import React from 'react';
import AddFlowStore from '../stores/AddFlowStore';
import AddFlowActions from '../actions/AddFlowActions';
import Ueditor from './Ueditor';
class AddFlow extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddFlowStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        AddFlowStore.listen(this.onChange);
    }
    componentWillUnmount() {
        AddFlowStore.unlisten(this.onChange);
    }
    onChange(state) {
        this.setState(state);
    }
    handleSubmit(event) {
        event.preventDefault();
        var reqData={
            name:this.state.name,
            author:this.state.author,
            url:$("#imgUrl").attr("src"),
            content:UE.getEditor('content').getContent()
        }
        AddFlowActions.addFlow(reqData);
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
                            <div className='panel-heading'>创建流程</div>
                            <div className='panel-body'>
                                <span className='help-block'>{this.state.helpBlock}</span>
                                <div className={'form-group '}>
                                    <label className='control-label'>流程图</label>
                                    <form>
                                        <input type="hidden" name="baseUrl" value="public/img/flow/"/>
                                        <img onClick={this.imgAjaxUpload.bind(this)} id="imgUrl" height="200" width="200"  src="/img/default.gif"  />
                                        <input name="img" type="file" style={style} />
                                    </form>
                                </div>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div className={'form-group '}>
                                        <label className='control-label'>名字</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                                               onChange={AddFlowActions.updateName} autoFocus/>
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>作者</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.author}
                                               onChange={AddFlowActions.updateAuthor} autoFocus/>
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>内容</label>
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

export default AddFlow;