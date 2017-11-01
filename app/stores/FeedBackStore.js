import {assign, contains} from 'underscore';
import alt from '../alt';
import FeedBackActions from '../actions/FeedBackActions';

class FeedBackStore {
    constructor() {
        this.bindActions(FeedBackActions);
        this.id = 0;
        this.name = '';
        this.email = '';
        this.message = '';
    }

    onGetFeedBackSuccess(data) {
        this.setState(data[0])
    }

    onGetFeedBackFail(jqXhr) {
    }
}

export default alt.createStore(FeedBackStore);