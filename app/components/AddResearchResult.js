//此处是创建一个添加新闻公告/公司动态的组件
import React from 'react';
import AddResearchResultStore from '../stores/AddResearchResultStore';
import AddResearchResultActions from '../actions/AddResearchResultActions';
import Ueditor from './Ueditor';
class AddResearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddResearchResultStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AddResearchResultStore.listen(this.onChange);
    }

    componentWillUnmount() {
        AddResearchResultStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var reqData={
            title:this.state.title,
            type:this.state.type,
            url:$("#imgUrl").attr("src"),
            summary:UE.getEditor('content').getContent()
        }
        AddResearchResultActions.addResearchResult(reqData);
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
                            <div className='panel-heading'>创建研究成果</div>
                            <div className='panel-body'>
                                <span className='help-block'>{this.state.helpBlock}</span>
                                <div className={'form-group '}>
                                    <label className='control-label'>图片</label>
                                    <form>
                                        <input type="hidden" name="baseUrl" value="public/img/yjzx/research_result/"/>
                                        <img onClick={this.imgAjaxUpload.bind(this)} id="imgUrl" height="200" width="200"  src="/img/default.gif"  />
                                        <input name="img" type="file" style={style} />
                                    </form>
                                </div>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div className={'form-group '}>
                                        <label className='control-label'>标题</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.title}
                                               onChange={AddResearchResultActions.updateTitle} autoFocus/>
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>类型</label>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='type' id='zl' value="1" checked={this.state.type === '1'}
                                                   onChange={AddResearchResultActions.updateType}/>
                                            <label htmlFor='zl'>专利</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='type' id='rz' value='2' checked={this.state.type === '2'}
                                                   onChange={AddResearchResultActions.updateType}/>
                                            <label htmlFor='rz'>软著</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='type' id='hj' value='3' checked={this.state.type === '3'}
                                                   onChange={AddResearchResultActions.updateType}/>
                                            <label htmlFor='hj'>获奖</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='type' id='xm' value='4' checked={this.state.type === '4'}
                                                   onChange={AddResearchResultActions.updateType}/>
                                            <label htmlFor='xm'>项目</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='type' id='lw' value='5' checked={this.state.type === '5'}
                                                   onChange={AddResearchResultActions.updateType}/>
                                            <label htmlFor='lw'>论文</label>
                                        </div>
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

export default AddResearchResult;