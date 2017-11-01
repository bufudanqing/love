import React from 'react';
import ResearchTeamStore from '../stores/ResearchTeamStore';
import ResearchTeamActions from '../actions/ResearchTeamActions'

class ResearchTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = ResearchTeamStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount(){
        ResearchTeamActions.getResearchTeam(this.props.params.id);
    }
    componentDidMount() {
        ResearchTeamStore.listen(this.onChange);
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
        $("#showContent").html(this.state.summary);
    }

    render() {
        let style={
            width:"200px",
            height:"200px"
        }
        return (
            <div className='container'>
                <div className='row flipInX animated'>
                    <div className='col-sm-12'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'>查看研究团队</div>
                            <div className='panel-body'>
                                <div className={'form-group '}>
                                    <label className='control-label'>名称</label>
                                    <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                                    />
                                </div>

                                <div className={'form-group '}>
                                    <label className='control-label'>别名</label>
                                    <input type='text' className='form-control' ref='nameTextField' value={this.state.aliases}
                                          />
                                </div>
                                <div className={'form-group '}>
                                    <label className='control-label'>职称</label>
                                    <input type='text' className='form-control' ref='nameTextField' value={this.state.professional}
                                           />
                                </div>


                                <div className={'form-group '}>
                                    <label className='control-label'>类型</label>
                                    <div className='radio radio-inline'>
                                        <input type='radio' name='type' id='js' defaultValue='1' checked={this.state.type === "1"}
                                        />
                                        <label htmlFor='js'>教授</label>
                                    </div>
                                    <div className='radio radio-inline'>
                                        <input type='radio' name='type' id='zj' defaultValue='2' checked={this.state.type === "2"}
                                        />
                                        <label htmlFor='js'>专家</label>
                                    </div>
                                    <div className='radio radio-inline'>
                                        <input type='radio' name='type' id='js1' defaultValue='1' checked={this.state.type === "3"}
                                        />
                                        <label htmlFor='js1'>技术</label>
                                    </div>
                                </div>
                                <div className={'form-group '}>
                                    <label className='control-label'>图片</label>
                                    <img width={style.width} height={style.height} src={this.state.url}/>
                                </div>
                                <div className={'form-group '}>
                                    <label className='control-label'>简介</label>
                                    <input type='text' className='form-control' ref='nameTextField' value={this.state.academy}
                                    />
                                </div>
                                <div className={'form-group '}>
                                    <label className='control-label'>内容</label><br/>
                                    <div id="showContent" >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ResearchTeam;