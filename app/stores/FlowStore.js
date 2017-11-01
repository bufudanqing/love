import {assign, contains} from 'underscore';
import alt from '../alt';
import FlowActions from '../actions/FlowActions';

class FlowStore {
    constructor() {
        this.bindActions(FlowActions);
        this.id = 0;
        this.name = '';
        this.author = '';
        this.url='';
        this.content = '';
    }

    onGetFlowSuccess(data) {
        this.setState(data)
    }

    onGetFlowFail(jqXhr) {

    }
}

export default alt.createStore(FlowStore);