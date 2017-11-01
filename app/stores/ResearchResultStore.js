import {assign, contains} from 'underscore';
import alt from '../alt';
import ResearchResultActions from '../actions/ResearchResultActions';

class ResearchResultStore {
    constructor() {
        this.bindActions(ResearchResultActions);
        this.id = 0;
        this.title = '';
        this.type = '';
        this.url = '/img/default.gif';
        this.summary = '';
    }

    onGetResearchResultSuccess(data) {
        this.setState(data[0])
    }

    onGetResearchResultFail(jqXhr) {
    }
}

export default alt.createStore(ResearchResultStore);