import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import MasterTeamListStore from '../stores/MasterTeamListStore';
import MasterTeamListActions from '../actions/MasterTeamListActions';

class MasterTeamList extends React.Component {
    constructor(props) {
        super(props);
        this.state = MasterTeamListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        MasterTeamListStore.listen(this.onChange);
        MasterTeamListActions.getMasterTeams();
    }

    componentWillUnmount() {
        MasterTeamListStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {
    }

    onChange(state) {
        this.setState(state);
    }
    delClick(event){
        MasterTeamListActions.delMasterTeam(event.target.name);
    }
    render() {
        let MasterTeamList = this.state.masterTeams.map((masterTeam, index) => {
            return (
                <div key={masterTeam.id} className='list-group-item animated fadeIn'>
                    <div className='media'>
                        <span className='position pull-left'>{index<=8?'0'+(index + 1):index + 1}</span>
                        <div className='pull-left thumb-lg'>
                            <img className='media-object'  src={masterTeam.url} />
                        </div>
                        <div className='media-body'>
                            <h4 className='media-heading'>
                                <small>名称 <strong>
                                    <Link to={'/pxjd/master-team/getMasterTeam/' + masterTeam.id}>{masterTeam.name}</Link>
                                </strong></small>
                            </h4>
                            <small>职称 <strong>{masterTeam.job}</strong></small>

                            <div className="del-button">
                                <button>
                                    <Link to={'/pxjd/master-team/editMasterTeam/' + masterTeam.id}>编辑</Link>
                                </button>
                                <input type="button" value="删除" name={masterTeam.id}  onClick={this.delClick} />
                            </div>
                        </div>

                    </div>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='list-group'>
                    {MasterTeamList}
                </div>
            </div>
        );
    }
}

export default MasterTeamList;