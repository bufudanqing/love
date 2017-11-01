import React from 'react';
import MasterTeamStore from '../stores/MasterTeamStore';
import MasterTeamActions from '../actions/MasterTeamActions';
import AddMasterTeamActions from '../actions/AddMasterTeamActions';
import Ueditor from './Ueditor';
class EditMasterTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = MasterTeamStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount(){
        MasterTeamActions.getMasterTeam(this.props.params.id);

    }
    componentDidMount() {
        MasterTeamStore.unlisten(this.onChange);
        MasterTeamActions.getMasterTeam(this.props.params.id);

    }

    componentWillUnmount() {
        MasterTeamStore.unlisten(this.onChange);
        $(document.body).removeClass();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.params.id !== this.props.params.id) {
            MasterTeamActions.getMasterTeam(this.props.params.id);
        }
    }

    onChange(state) {
        this.setState(state);
    }
    handleSubmit(event) {
        event.preventDefault();
        var reqData={
            id:this.state.id,
            name:$("#name").val(),
            job:$("#job").val(),
            introduction:$("#introduction").val(),
            aliases:$("#aliases").val(),
            url:$("#imgUrl").attr("src"),
            content:UE.getEditor('content').getContent()
        }
        AddMasterTeamActions.editMasterTeam(reqData);
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
                            <div className='panel-heading'>编辑名师团队</div>
                            <div className='panel-body'>
                                <div className={'form-group '}>
                                    <label className='control-label'>图片</label>
                                    <form>
                                        <input type="hidden" name="baseUrl" value="public/img/pxjd/master_team/"/>
                                        <img onClick={this.imgAjaxUpload.bind(this)} id="imgUrl" height="200" width="200"  src={this.state.url || url}  />
                                        <input name="img" type="file" style={style} />
                                    </form>
                                </div>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <input type="hidden" id="id" value={this.state.id}/>
                                    <span className='help-block'>{this.state.helpBlock}</span>
                                    <div className={'form-group '}>
                                        <label className='control-label'>名称</label>
                                        <input type='text' className='form-control' id="name" ref='nameTextField' defaultValue={this.state.name}
                                               onChange={AddMasterTeamActions.updateName} />
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>别名</label>
                                        <input type='text' className='form-control' id="aliases" ref='nameTextField' defaultValue={this.state.aliases}
                                               onChange={AddMasterTeamActions.updateAliases} />
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>简介</label>
                                        <input type='text' className='form-control' id="introduction" ref='nameTextField' defaultValue={this.state.introduction}
                                               onChange={AddMasterTeamActions.updateIntroduction} />
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>职称</label>
                                        <input type='text' className='form-control' id="job" ref='nameTextField' defaultValue={this.state.job}
                                               onChange={AddMasterTeamActions.updateJob} autoFocus/>
                                    </div>

                                    <div className={'form-group '}>
                                        <label className='control-label'>内容</label>
                                        <Ueditor name={this.state.content} id="content" height="400" />
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

export default EditMasterTeam;