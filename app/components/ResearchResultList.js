import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import ResearchResultListStore from '../stores/ResearchResultListStore';
import ResearchResultListActions from '../actions/ResearchResultListActions';

class ResearchResultList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ResearchResultListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ResearchResultListStore.listen(this.onChange);
        ResearchResultListActions.getResearchResults(this.props.params.type);
    }

    componentWillUnmount() {
        ResearchResultListStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {
    }

    onChange(state) {
        this.setState(state);
    }
    delClick(event){
        ResearchResultListActions.delResearchResult(event.target.name,this.props.params.type);
    }
    render() {
        let ResearchResultList = this.state.researchResults.map((researchResult, index) => {
            return (
                <div key={researchResult.id} className='list-group-item animated fadeIn'>
                    <div className='media'>
                        <span className='position pull-left'>{index<=8?'0'+(index + 1):index + 1}</span>
                        <div className='pull-left thumb-lg'>
                            <img className='media-object'  src={researchResult.url} />
                        </div>
                        <div className='media-body'>
                            <h4 className='media-heading'>
                                <small>标题 <strong>
                                    <Link to={'/yjzx/research-result/getResearchResult/' + researchResult.id}>{researchResult.title}</Link>
                                </strong></small>
                            </h4>
                            <small>类型 <strong>{researchResult.type}</strong></small><br/>
                            <div className="del-button">
                                <button>
                                    <Link to={'/yjzx/research-result/editresearchResult/' + researchResult.id}>编辑</Link>
                                </button>
                                <input type="button" value="删除" name={researchResult.id}  onClick={this.delClick.bind(this)} />
                            </div>
                        </div>

                    </div>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='list-group'>
                    {ResearchResultList}
                </div>
            </div>
        );
    }
}

export default ResearchResultList;