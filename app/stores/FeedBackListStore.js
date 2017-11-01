import alt from '../alt';
import FeedBackListActions from '../actions/FeedBackListActions';

class FeedBackListStore {
    constructor() {
        this.bindActions(FeedBackListActions);
        this.feedBacks = [];
    }

    onGetFeedBackListSuccess(data) {
        this.feedBacks = data;
    }

    onGetFeedBackListFail(data) {
        this.feedBacks = data;
    }
}

export default alt.createStore(FeedBackListStore);