import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import FeedBackListStore from '../stores/FeedBackListStore';
import FeedBackListActions from '../actions/FeedBackListActions';

class FeedBackList extends React.Component {
    constructor(props) {
        super(props);
        this.state = FeedBackListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        FeedBackListStore.listen(this.onChange);
        FeedBackListActions.getFeedBacks();
    }

    componentWillUnmount() {
        FeedBackListStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {
    }

    onChange(state) {
        this.setState(state);
    }
    delClick(event){
        FeedBackListActions.delFeedBacks(event.target.name);
    }
    render() {
        let FeedBackList = this.state.feedBacks.map((feedBack, index) => {
            return (
                <div key={feedBack.id} className='list-group-item animated fadeIn'>
                    <div className='media'>
                        <span className='position pull-left'>{index<=8?'0'+(index + 1):index + 1}</span>
                        <div className='media-body'>
                            <h4 className='media-heading'>
                                <small>姓名 <strong>
                                    <Link to={'/yjzx/feed-book/getFeedBack/' + feedBack.id}>{feedBack.name}</Link>
                                </strong></small>
                            </h4>
                            <small>Email <strong>{feedBack.email}</strong></small>
                            <br />
                            <small>内容 <strong>{feedBack.message}</strong></small>
                            <br />
                            <div className="del-button">
                                <input type="button" value="删除" name={feedBack.id}  onClick={this.delClick} />
                            </div>
                        </div>

                    </div>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='list-group'>
                    {FeedBackList}
                </div>
            </div>
        );
    }
}

export default FeedBackList;