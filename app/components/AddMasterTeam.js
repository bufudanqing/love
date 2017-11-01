import React from 'react';
import AddMasterTeamStore from '../stores/AddMasterTeamStore';
import AddMasterTeamActions from '../actions/AddMasterTeamActions';
import Ueditor from './Ueditor';
class AddResearchTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddMasterTeamStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AddMasterTeamStore.listen(this.onChange);

    }

    componentWillUnmount() {
        AddMasterTeamStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var reqData={
            name:this.state.name,
            url:$("#imgUrl").attr("src"),
            job:this.state.job,
            aliases:this.state.aliases,
            introduction:this.state.introduction,
            content:UE.getEditor('content').getContent()
        }
        AddMasterTeamActions.addMasterTeam(reqData);
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
                            <div className='panel-heading'>创建名师团队</div>
                            <div className='panel-body'>
                                <span className='help-block'>{this.state.helpBlock}</span>
                                <div className={'form-group '}>
                                    <label className='control-label'>头像</label>
                                    <form>
                                        <input type="hidden" name="baseUrl" value="public/img/pxjd/master_team/"/>
                                        <img onClick={this.imgAjaxUpload.bind(this)} id="imgUrl" height="200" width="200"  src="/img/default.gif"  />
                                        <input name="img" type="file" style={style} />
                                    </form>
                                </div>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div className={'form-group '}>
                                        <label className='control-label'>姓名</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                                               onChange={AddMasterTeamActions.updateName} autoFocus/>
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>别名</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.aliases}
                                               onChange={AddMasterTeamActions.updateAliases} autoFocus/>
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>简介</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.introduction}
                                               onChange={AddMasterTeamActions.updateIntroduction} autoFocus/>
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>职称</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.job}
                                               onChange={AddMasterTeamActions.updateJob} autoFocus/>
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

export default AddResearchTeam;