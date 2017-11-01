import {assign, contains} from 'underscore';
import alt from '../alt';
import ResearchProjectActions from '../actions/ResearchProjectActions';

class ResearchProjectStore {
    constructor() {
        this.bindActions(ResearchProjectActions);
        this.id = 0;
        this.title = '';
        this.url = '/img/default.gif';
        this.summary = '';
    }

    onGetResearchProjectSuccess(data) {
        this.setState(data[0])
    }

    onGetResearchProjectFail(jqXhr) {
    }
}

export default alt.createStore(ResearchProjectStore);