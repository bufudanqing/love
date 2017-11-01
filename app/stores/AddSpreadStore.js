import alt from '../alt';
import AddSpreadActions from '../actions/AddSpreadActions';
class AddSpreadStore {
    constructor() {
        this.bindActions(AddSpreadActions);
        this.baseUrl = '';
        this.helpBlock = '';
    }
}

export default alt.createStore(AddSpreadStore);