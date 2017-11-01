import React from 'react';
import AddDocumentStore from '../stores/AddDocumentStore';
import AddDocumentActions from '../actions/AddDocumentActions';
import Ueditor from './Ueditor';
class AddDocument extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddDocumentStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        AddDocumentStore.listen(this.onChange);
    }
    componentWillUnmount() {
        AddDocumentStore.unlisten(this.onChange);
    }
    onChange() {
    }
    handleSubmit(event) {
        event.preventDefault();
        var reqData={
            name:$("#name").val(),
            size:$("#size").val(),
            url:$("#fileUrl").val()
    }
        AddDocumentActions.addDocument(reqData);
    }
    imgAjaxUpload(event){
        var self= this;
        event.preventDefault();
        var imgEle=$(event.target),formDom=$(event.target.parentNode),fileEle=$(event.target.nextSibling);
        fileEle.click();
        fileEle.on('change',function(){
            var objFile=  $(this).val();
            var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
            if(!(objType===".doc" || objType ===".docx" || objType ===".pdf" || objType ===".zip" || objType ===".png" || objType ===".jpg" || objType ===".xls" || objType ===".xlsx" || objType ===".exe")){
                alert("请选择合法文档");
                return false;
            }
            $.ajax({
                url: '/apkUpload/add',
                type: 'POST',
                cache: false,
                data: new FormData(formDom[0]),
                processData: false,
                contentType: false
            }).done(function(res) {
                $("#fileUrl").val(res.src);
                $("#size").val(res.size);
                $("#imgUrl").attr("src",res.src)
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
                            <div className='panel-heading'>添加文档</div>
                            <div className='panel-body'>
                                <span className='help-block'>{this.state.helpBlock}</span>
                                <div className={'form-group '}>
                                    <label className='control-label'>文档</label>
                                    <form>
                                        <input type="hidden" name="baseUrl" value="public/document/"/>
                                        <img onClick={this.imgAjaxUpload.bind(this)} id="imgUrl" height="200" width="200"  src="/img/default.gif"  />
                                        <input name="img" type="file" style={style} />
                                    </form>
                                </div>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <input type="hidden" id="fileUrl" defaultValue=''/>
                                    <div className={'form-group '}>
                                        <label className='control-label'>名字</label>
                                        <input type='text' className='form-control' id='name' defaultValue=''/>
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>大小</label>
                                        <input type='text' className='form-control' id="size"  defaultValue='' />
                                    </div>
                                    {/*<div className={'form-group '}>*/}
                                        {/*<label className='control-label'>内容</label>*/}
                                        {/*<Ueditor  id="content" height="400" />*/}
                                    {/*</div>*/}
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

export default AddDocument;