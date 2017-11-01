import alt from '../alt';
import AddDocumentActions from '../actions/AddDocumentActions';

class AddDocumentStore {
    constructor() {
        this.bindActions(AddDocumentActions);
        this.name = '';
        this.helpBlock = '';
    }
    onAddDocumentSuccess(successMessage) {
        this.helpBlock = successMessage;
    }
    onAddDocumentFail(errorMessage) {
        this.helpBlock = errorMessage;
    }
    onUpdateName(event) {
        this.name = event.target.value;
    }
}
export default alt.createStore(AddDocumentStore);