import React from 'react';
import AddAcademicExchangeStore from '../stores/AddAcademicExchangeStore';
import AddAcademicExchangeActions from '../actions/AddAcademicExchangeActions';
import Ueditor from './Ueditor';
class AddAcademicExchange extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddAcademicExchangeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AddAcademicExchangeStore.listen(this.onChange);
    }

    componentWillUnmount() {
        AddAcademicExchangeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var reqData={
            title:this.state.title,
            author:this.state.author,
            address:this.state.address,
            url:$("#imgUrl").attr("src"),
            content:UE.getEditor('content').getContent()
        }
        AddAcademicExchangeActions.addAcademicExchange(reqData);
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
        var url="/img/default.gif";
        return (
            <div className='container'>
                <div className='row flipInX animated'>
                    <div className='col-sm-12'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'>创建学术交流</div>
                            <div className='panel-body'>
                                <span className='help-block'>{this.state.helpBlock}</span>
                                <div className={'form-group '}>

                                    <label className='control-label'>图片</label>
                                    <form>
                                        <input type="hidden" name="baseUrl" value="public/img/yjzx/academic_exchange/" />

                                        <img onClick={this.imgAjaxUpload.bind(this)} id="imgUrl" height="200" width="200"  src={this.state.url || url}  />
                                        <input name="img" type="file" style={style} />
                                    </form>
                                </div>
                                <form onSubmit={this.handleSubmit.bind(this)}>


                                    <div className={'form-group '}>
                                        <label className='control-label'>标题</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.title}
                                               onChange={AddAcademicExchangeActions.updateTitle} autoFocus/>
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>作者</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.author}
                                               onChange={AddAcademicExchangeActions.updateAuthor} autoFocus/>
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>地址</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.address}
                                               onChange={AddAcademicExchangeActions.updateAddress} autoFocus/>
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

export default AddAcademicExchange;