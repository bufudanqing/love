import alt from '../alt';
import SpreadListActions from '../actions/SpreadListActions';

class SpreadListStore {
    constructor() {
        this.bindActions(SpreadListActions);
        this.spreads = [];
    }

    onGetSpreadsSuccess(data) {
        this.spreads = data;
    }

    onGetSpreadsFail(data) {
        this.spreads = data;
    }
}

export default alt.createStore(SpreadListStore);