import {assign, contains} from 'underscore';
import alt from '../alt';
import NewsConsultActions from '../actions/NewsConsultActions';

class NewsConsultStore {
    constructor() {
        this.bindActions(NewsConsultActions);
        this.id = 0;
        this.title = '';
        this.author = '';
        this.top_img='';
        this.type = '';
        this.subtitle = '';
        this.content = '';
    }

    onGetNewsConsultSuccess(data) {
        this.setState(data[0])
    }

    onGetNewConsultFail(jqXhr) {
    }
}

export default alt.createStore(NewsConsultStore);