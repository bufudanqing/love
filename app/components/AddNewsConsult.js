//此处是创建一个添加新闻公告/公司动态的组件
import React from 'react';
import AddNewsConsultStore from '../stores/AddNewsConsultStore';
import AddNewsConsultActions from '../actions/AddNewsConsultActions';
import Ueditor from './Ueditor';
class AddNewsConsult extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddNewsConsultStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AddNewsConsultStore.listen(this.onChange);
    }

    componentWillUnmount() {
        AddNewsConsultStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var reqData={
            title:this.state.title,
            author:this.state.author,
            subtitle:this.state.subtitle,
            type:this.state.type,
            content:'<p style="text-align: center;"><span>'+this.state.title+'</span></p></br></br>'+UE.getEditor('content').getContent(),
            top_img:$("#imgUrl").attr("src")
        }
        AddNewsConsultActions.addNewsConsult(reqData);
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
                            <div className='panel-heading'>创建新闻公告/公司动态</div>
                            <div className='panel-body'>
                                <div className={'form-group '}>
                                    <label className='control-label'>图片</label>
                                    <form>
                                        <input type="hidden" name="baseUrl" value="public/img/syxa/"/>
                                        <img onClick={this.imgAjaxUpload.bind(this)} id="imgUrl" height="200" width="200"  src="/img/default.gif"  />
                                        <input name="img" type="file" style={style} />
                                    </form>
                                </div>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <span className='help-block'>{this.state.helpBlock}</span>
                                    <div className={'form-group '}>
                                        <label className='control-label'>标题</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.title}
                                               onChange={AddNewsConsultActions.updateTitle} autoFocus/>
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>作者</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.author}
                                               onChange={AddNewsConsultActions.updateAuthor} autoFocus/>
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>子标题</label>
                                        <textarea type='text' className='form-control' ref='nameTextField' value={this.state.subtitle}
                                               onChange={AddNewsConsultActions.updateSubtitle} autoFocus></textarea>
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>类型</label>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='gender' id='female' value='1' checked={this.state.type === '1'}
                                                   onChange={AddNewsConsultActions.updateType}/>
                                            <label htmlFor='female'>公司动态</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='gender' id='male' value='2' checked={this.state.type === '2'}
                                                   onChange={AddNewsConsultActions.updateType}/>
                                            <label htmlFor='male'>新闻资讯</label>
                                        </div>
                                        <div className={'form-group '}>
                                            <label className='control-label'>内容</label>
                                            <Ueditor  id="content" height="400" />
                                        </div>
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

export default AddNewsConsult;