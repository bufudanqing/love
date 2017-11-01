import React from 'react';
import MasterTeamStore from '../stores/MasterTeamStore';
import MasterTeamActions from '../actions/MasterTeamActions'

class MasterTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = MasterTeamStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount(){
        MasterTeamActions.getMasterTeam(this.props.params.id);
    }
    componentDidMount() {
        MasterTeamStore.listen(this.onChange);
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
        $("#showContent").html(this.state.content)
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
                            <div className='panel-heading'>查看名师团队</div>
                            <div className='panel-body'>
                                <div className={'form-group '}>
                                    <label className='control-label'>图片</label>
                                    <img width={style.width} height={style.height} src={this.state.url}/>
                                </div>
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
                                    <label className='control-label'>简介</label>
                                    <input type='text' className='form-control' ref='nameTextField' value={this.state.introduction}
                                    />
                                </div>
                                <div className={'form-group '}>
                                    <label className='control-label'>职称</label>
                                    <input type='text' className='form-control' ref='nameTextField' value={this.state.job}
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

export default MasterTeam;