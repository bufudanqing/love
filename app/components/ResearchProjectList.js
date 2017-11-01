import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import ResearchProjectListStore from '../stores/ResearchProjectListStore';
import ResearchProjectListActions from '../actions/ResearchProjectListActions';

class ResearchProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ResearchProjectListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ResearchProjectListStore.listen(this.onChange);
        ResearchProjectListActions.getResearchProjects();
    }

    componentWillUnmount() {
        ResearchProjectListStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {
    }

    onChange(state) {
        this.setState(state);
    }
    delClick(event){
        ResearchProjectListActions.delResearchProject(event.target.name);
    }
    render() {
        let ResearchProjectList = this.state.researchProjects.map((researchProject, index) => {
            return (
                <div key={researchProject.id} className='list-group-item animated fadeIn'>
                    <div className='media'>
                        <span className='position pull-left'>{index<=8?'0'+(index + 1):index + 1}</span>
                        <div className='pull-left thumb-lg'>
                            <img className='media-object'  src={researchProject.url} />
                        </div>
                        <div className='media-body'>
                            <h4 className='media-heading'>
                                <small>标题 <strong>
                                    <Link to={'/yjzx/research-project/getResearchProject/' + researchProject.id}>{researchProject.title}</Link>
                                </strong></small>

                            </h4>
                            <div className="del-button">
                                <button>
                                    <Link to={'/syxa/news-project/editNewsProject/' + researchProject.id}>编辑</Link>
                                </button>
                                <input type="button" value="删除" name={researchProject.id}  onClick={this.delClick} />
                            </div>
                        </div>

                    </div>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='list-group'>
                    {ResearchProjectList}
                </div>
            </div>
        );
    }
}

export default ResearchProjectList;