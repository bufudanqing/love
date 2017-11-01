import React from 'react';
import NewsConsultStore from '../stores/NewsConsultStore';
import NewsConsultActions from '../actions/NewsConsultActions';
import AddNewsConsultActions from '../actions/AddNewsConsultActions';
import Ueditor from './Ueditor';
class EditNewsConsult extends React.Component {
    constructor(props) {
        super(props);
        this.state = NewsConsultStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount(){
        NewsConsultActions.getNewsConsult(this.props.params.id);

    }
    componentDidMount() {
        NewsConsultStore.unlisten(this.onChange);
        NewsConsultActions.getNewsConsult(this.props.params.id);

    }

    componentWillUnmount() {
        NewsConsultStore.unlisten(this.onChange);
        $(document.body).removeClass();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.params.id !== this.props.params.id) {
            NewsConsultActions.getNewsConsult(this.props.params.id);
        }
    }

    onChange(state) {
        this.setState(state);
    }
    handleSubmit(event) {
        event.preventDefault();
        var reqData={
            id:this.state.id,
            title:$("#title").val(),
            author:$("#author").val(),
            subtitle:$("#subtitle").val(),
            type:$('input:radio[name="type"]:checked').val(),
            top_img:$("#imgUrl").attr("src"),
            content:UE.getEditor('content').getContent()
        }
        AddNewsConsultActions.editNewsConsult(reqData);
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
        var top_img="/img/default.gif";
        return (
            <div className='container'>
                <div className='row flipInX animated'>
                    <div className='col-sm-12'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'>编辑新闻资讯/公司动态</div>
                            <div className='panel-body'>
                                <div className={'form-group '}>
                                    <label className='control-label'>图片</label>
                                    <form>
                                        <input type="hidden" name="baseUrl" value="public/img/syxa/"/>
                                        <img onClick={this.imgAjaxUpload.bind(this)} id="imgUrl" height="200" width="200"  src={this.state.top_img || top_img}  />
                                        <input name="img" type="file" style={style} />
                                    </form>
                                </div>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <input type="hidden" id="id" value={this.state.id}/>
                                    <span className='help-block'>{this.state.helpBlock}</span>
                                    <div className={'form-group '}>
                                        <label className='control-label'>标题</label>
                                        <input type='text' className='form-control' id="title" ref='nameTextField' defaultValue={this.state.title}
                                               onChange={this.updateTitle} />
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>作者</label>
                                        <input type='text' className='form-control' id="author" ref='nameTextField' defaultValue={this.state.author}
                                               onChange={AddNewsConsultActions.updateAuthor} autoFocus/>
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>子标题</label>
                                        <input type='text' className='form-control' id="subtitle" ref='nameTextField' defaultValue={this.state.subtitle}
                                               onChange={AddNewsConsultActions.updateSubtitle} autoFocus/>
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>类型</label>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='type' id='female'  value='1' defaultChecked={this.state.type === 1}
                                                  />
                                            <label htmlFor='female'>新闻咨询</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='type' id='male' value='2' defaultChecked={this.state.type === 2}
                                                  />
                                            <label htmlFor='male'>公司动态</label>
                                        </div>
                                        <div className={'form-group '}>
                                            <label className='control-label'>内容</label>
                                            <Ueditor name={this.state.content} id="content" height="400" />
                                        </div>
                                    </div>
                                    <button type='submit'  className='btn btn-primary subBtn'>提交</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default EditNewsConsult;