import alt from '../alt';
import FlowListActions from '../actions/FlowListActions';

class FlowListStore {
    constructor() {
        this.bindActions(FlowListActions);
        this.flows = [];
    }

    onGetFlowListSuccess(data) {
        this.flows = data;
    }

    onGetFlowListFail(data) {
        this.flows = data;
    }
}

export default alt.createStore(FlowListStore);