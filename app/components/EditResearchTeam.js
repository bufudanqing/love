import React from 'react';
import ResearchTeamStore from '../stores/ResearchTeamStore';
import ResearchTeamActions from '../actions/ResearchTeamActions';
import AddResearchTeamActions from '../actions/AddResearchTeamActions';
import Ueditor from './Ueditor';
class EditResearchTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = ResearchTeamStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount(){
        ResearchTeamActions.getResearchTeam(this.props.params.id);

    }
    componentDidMount() {
        ResearchTeamStore.unlisten(this.onChange);
        ResearchTeamActions.getResearchTeam(this.props.params.id);

    }

    componentWillUnmount() {
        ResearchTeamStore.unlisten(this.onChange);
        $(document.body).removeClass();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.params.id !== this.props.params.id) {
            ResearchTeamActions.getResearchTeam(this.props.params.id);
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
            academy:$("#academy").val(),
            type:$('input:radio[name="type"]:checked').val(),
            url:$("#imgUrl").attr("src"),
            summary:UE.getEditor('content').getContent(),
            aliases:$("#aliases").val(),
            professional:$("#professional").val()
        }
        AddResearchTeamActions.editResearchTeam(reqData);
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
                            <div className='panel-heading'>编辑研究团队</div>
                            <div className='panel-body'>
                                <span className='help-block'>{this.state.helpBlock}</span>
                                <div className={'form-group '}>
                                    <label className='control-label'>图片</label>
                                    <form>
                                        <input type="hidden" name="baseUrl" value="public/img/yjzx/research_team/"/>
                                        <img onClick={this.imgAjaxUpload.bind(this)} id="imgUrl" height="200" width="200"  src={this.state.url || url}  />
                                        <input name="img" type="file" style={style} />
                                    </form>
                                </div>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <input type="hidden" id="id" value={this.state.id}/>

                                    <div className={'form-group '}>
                                        <label className='control-label'>团队名称</label>
                                        <input type='text' className='form-control' id="name" ref='nameTextField' defaultValue={this.state.name}
                                               onChange={ResearchTeamActions.updateName} />
                                    </div>

                                    <div className={'form-group '}>
                                        <label className='control-label'>别名</label>
                                        <input type='text' className='form-control' id='aliases' ref='nameTextField' defaultValue={this.state.aliases}
                                               onChange={ResearchTeamActions.updateAliases} />
                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>职称</label>
                                        <input type='text' className='form-control' id='professional' ref='nameTextField' defaultValue={this.state.professional}
                                               onChange={ResearchTeamActions.updateProfessional} />
                                    </div>

                                    <div className={'form-group '}>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='type' id='js' value='1' defaultChecked={this.state.type == 1}
                                                  />
                                            <label htmlFor='js'>教授</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='type' id='zj' value='2' defaultChecked={this.state.type == 2}
                                                   />
                                            <label htmlFor='zj'>专家</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='type' id='js1' value='3' defaultChecked={this.state.type == 3}
                                                   />
                                            <label htmlFor='js1'>技术</label>
                                        </div>

                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>简介</label>
                                        <input type='text' className='form-control' id="academy" ref='nameTextField' defaultValue={this.state.academy}
                                               onChange={ResearchTeamActions.updateAcademy} />
                                    </div>

                                    <div className={'form-group '}>
                                        <label className='control-label'>描述</label>
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

export default EditResearchTeam;