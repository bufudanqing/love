import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import ResearchTeamListStore from '../stores/ResearchTeamListStore';
import ResearchTeamListActions from '../actions/ResearchTeamListActions';

class ResearchTeamList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ResearchTeamListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ResearchTeamListStore.listen(this.onChange);
        ResearchTeamListActions.getResearchTeams();
    }

    componentWillUnmount() {
        ResearchTeamListStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {
    }

    onChange(state) {
        this.setState(state);
    }
    delClick(event){
        ResearchTeamListActions.delResearchTeam(event.target.name);
    }
    render() {
        let ResearchTeamList = this.state.researchTeams.map((researchTeam, index) => {
            return (
                <div key={researchTeam.id} className='list-group-item animated fadeIn'>
                    <div className='media'>
                        <span className='position pull-left'>{index<=8?'0'+(index + 1):index + 1}</span>
                        <div className='pull-left thumb-lg'>
                            <img className='media-object'  src={researchTeam.url} />
                        </div>
                        <div className='media-body'>
                            <h4 className='media-heading'>
                                <small>名称 <strong>
                                    <Link to={'/yjzx/research-team/getResearchTeam/' + researchTeam.id}>{researchTeam.name}</Link>
                                </strong></small>

                            </h4>
                            <small>类型 <strong>{researchTeam.type}</strong></small>
                            <br />
                            <small>简介 <strong>{researchTeam.academy}</strong></small>
                            <br />
                            <div className="del-button">
                                <button>
                                    <Link to={'/yjzx/research-team/editResearchTeam/' + researchTeam.id}>编辑</Link>
                                </button>
                                <input type="button" value="删除" name={researchTeam.id}  onClick={this.delClick} />
                            </div>
                        </div>

                    </div>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='list-group'>
                    {ResearchTeamList}
                </div>
            </div>
        );
    }
}

export default ResearchTeamList;