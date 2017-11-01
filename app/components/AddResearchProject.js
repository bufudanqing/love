//此处是创建一个添加新闻公告/公司动态的组件
import React from 'react';
import AddResearchProjectStore from '../stores/AddResearchProjectStore';
import AddResearchProjectActions from '../actions/AddResearchProjectActions';
import Ueditor from './Ueditor';
class AddResearchProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddResearchProjectStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AddResearchProjectStore.listen(this.onChange);
    }

    componentWillUnmount() {
        AddResearchProjectStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var reqData={
            title:this.state.title,
            url:$("#imgUrl").attr("src"),
            summary:UE.getEditor('content').getContent()
        }
        AddResearchProjectActions.addResearchProject(reqData);
    }

    imgAjaxUpload(event){
        var self= this;
        event.preventDefault();
        var imgEle=$(event.target),formDom=$(event.target.parentNode),fileEle=$(event.target.nextSibling);
        fileEle.click();
        fileEle.on('change',function(){
            var objFile=  $(this).val();
            var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
            if(!(objType===".jpg" || objType ===".png" || objType===".jpeg")){
                alert("请选择.jpg/.png/.jpeg类型的图片");
                return false;
            }
            $.ajax({
                url: '/fileUpload/add',
                type: 'POST',
                cache: false,
                data: new FormData(formDom[0]),
                processData: false,
                contentType: false
            }).done(function(res) {
                imgEle.attr('src',res.src);
            }).fail(function(res) {});
        });
    }
    render() {
        let style={
            opacity:0
        }
        return (
            <div className='container'>
                <div className='row flipInX animated'>
                    <div className='col-sm-12'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'>创建研究项目</div>
                            <div className='panel-body'>
                                <span className='help-block'>{this.state.helpBlock}</span>
                                <div className={'form-group '}>
                                    <label className='control-label'>图片</label>
                                    <form>
                                        <input type="hidden" name="baseUrl" value="public/img/yjzx/research_project/"/>
                                        <img onClick={this.imgAjaxUpload.bind(this)} id="imgUrl" height="200" width="200"  src="/img/default.gif"  />
                                        <input name="img" type="file" style={style} />
                                    </form>
                                </div>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div className={'form-group '}>
                                        <label className='control-label'>项目名称</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.title}
                                               onChange={AddResearchProjectActions.updateTitle} autoFocus/>
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>描述</label>
                                        <Ueditor  id="content" height="400" />
                                    </div>
                                    <button type='submit' className='btn btn-primary subBtn'>提交</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddResearchProject;