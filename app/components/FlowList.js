import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import FlowListStore from '../stores/FlowListStore';
import FlowListActions from '../actions/FlowListActions';
import Pagination from './Page';

class FlowList extends React.Component {
    constructor(props) {
        super(props);
        this.state = FlowListStore.getState();
        this.onChange = this.onChange.bind(this);
    }
//页面渲染完毕 获取数据
    componentDidMount() {
        FlowListStore.listen(this.onChange);
        FlowListActions.getFlows();
    }
    pageChangeHandle(){
        console.info(JSON.stringify(this))
    }
    componentWillUnmount() {
        FlowListStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {
    }

    onChange(state) {
        this.setState(state);
    }
    delClick(event){
        FlowListActions.delFlow(event.target.name);
    }
    render() {
        let FlowList = this.state.flows.map((flow, index) => {
            return (
                <div key={flow.id} className='list-group-item animated fadeIn'>
                    <div className='media'>
                        <span className='position pull-left'>{index<=8?'0'+(index + 1):index + 1}</span>
                        <div className='media-body'>
                            <div className='pull-left thumb-lg'>
                                <img className='media-object'  src={flow.url} />
                            </div>
                            <h4 className='media-heading'>
                                <small>名字 <strong>
                                    <Link to={'/flow/getFlow/' + flow.id}>{flow.name}</Link>
                                </strong></small>

                            </h4>
                            <small>作者 <strong>{flow.author}</strong></small>
                            <br />
                            <div className="del-button">
                                <button>
                                    <Link to={'/flow/editFlow/' + flow.id}>编辑</Link>
                                </button>
                                <input type="button" value="删除" name={flow.id}  onClick={this.delClick} />
                            </div>
                        </div>

                    </div>

                </div>
            );
        });

        return (
            <div className='container'>
                <div className='list-group'>
                    {FlowList}
                </div>
                {/*<Pagination key="cmk" start={this.state.start} size={this.state.size} total={this.state.total} pageIndexChange={this.pageChangeHandle} {...this.state} />*/}
            </div>
        );
    }
}

export default FlowList;