//此处是创建一个添加新闻公告/公司动态的组件
import React from 'react';
import AddResearchTeamStore from '../stores/AddResearchTeamStore';
import AddResearchTeamActions from '../actions/AddResearchTeamActions';
import Ueditor from './Ueditor';
class AddResearchTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddResearchTeamStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AddResearchTeamStore.listen(this.onChange);
    }

    componentWillUnmount() {
        AddResearchTeamStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var reqData={
            name:this.state.name,
            type:this.state.type,
            url:$("#imgUrl").attr("src"),
            academy:this.state.academy,
            summary:UE.getEditor('content').getContent()
        }
        AddResearchTeamActions.addResearchTeam(reqData);
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
                            <div className='panel-heading'>创建研究团队</div>
                            <div className='panel-body'>
                                <span className='help-block'>{this.state.helpBlock}</span>
                                <div className={'form-group '}>
                                    <label className='control-label'>图片</label>
                                    <form>
                                        <input type="hidden" name="baseUrl" value="public/img/yjzx/research_team/"/>
                                        <img onClick={this.imgAjaxUpload.bind(this)} id="imgUrl" height="200" width="200"  src="/img/default.gif"  />
                                        <input name="img" type="file" style={style} />
                                    </form>
                                </div>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div className={'form-group '}>
                                        <label className='control-label'>团队名称</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                                               onChange={AddResearchTeamActions.updateName} autoFocus/>
                                    </div>
                                    <div className={'form-group '}>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='type' id='js' value='1' checked={this.state.type === '1'}
                                                   onChange={AddResearchTeamActions.updateType}/>
                                            <label htmlFor='js'>教授</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='type' id='zj' value='2' checked={this.state.type === '2'}
                                                   onChange={AddResearchTeamActions.updateType}/>
                                            <label htmlFor='zj'>专家</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='type' id='js2' value='3' checked={this.state.type === '3'}
                                                   onChange={AddResearchTeamActions.updateType}/>
                                            <label htmlFor='js2'>技术</label>
                                        </div>

                                    </div>
                                    <div className={'form-group '}>
                                        <label className='control-label'>简介</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.academy}
                                               onChange={AddResearchTeamActions.updateAcademy} autoFocus/>
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

export default AddResearchTeam;