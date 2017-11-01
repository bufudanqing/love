import React from 'react';
import ResearchProjectStore from '../stores/ResearchProjectStore';
import ResearchProjectActions from '../actions/ResearchProjectActions';
import AddResearchProjectActions from '../actions/AddResearchProjectActions';
import Ueditor from './Ueditor';
class EditResearchProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = ResearchProjectStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount(){
        ResearchProjectActions.getResearchProject(this.props.params.id);

    }
    componentDidMount() {
        ResearchProjectStore.unlisten(this.onChange);
        ResearchProjectActions.getResearchProject(this.props.params.id);

    }

    componentWillUnmount() {
        ResearchProjectStore.unlisten(this.onChange);
        $(document.body).removeClass();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.params.id !== this.props.params.id) {
            ResearchProjectActions.getResearchProject(this.props.params.id);
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
            url:$("#imgUrl").attr("src"),
            summary:UE.getEditor('content').getContent()
        }
        AddResearchProjectActions.editMasterTeam(reqData);
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
                            <div className='panel-heading'>编辑研究工程</div>
                            <div className='panel-body'>
                                <div className={'form-group '}>
                                    <label className='control-label'>图片</label>
                                    <form>
                                        <input type="hidden" name="baseUrl" value="public/img/yjzx/research_project/"/>
                                        <img onClick={this.imgAjaxUpload.bind(this)} id="imgUrl" height="200" width="200"  src={this.state.url || url}  />
                                        <input name="img" type="file" style={style} />
                                    </form>
                                </div>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <input type="hidden" id="id" value={this.state.id}/>
                                    <span className='help-block'>{this.state.helpBlock}</span>
                                    <div className={'form-group '}>
                                        <label className='control-label'>标题</label>
                                        <input type='text' className='form-control' id="title" ref='nameTextField' defaultValue={this.state.title}
                                               onChange={AddResearchProjectActions.updateTitle} />
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>内容</label>
                                        <Ueditor name={this.state.summary} id="content" height="400" />
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

export default EditResearchProject;