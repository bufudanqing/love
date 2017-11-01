import alt from '../alt';
import AddFlowActions from '../actions/AddFlowActions';

class AddFlowStore {
    constructor() {
        this.bindActions(AddFlowActions);
        this.name = '';
        this.author = '';
        this.content='';
        this.url='';
        this.helpBlock = '';
    }
    onAddFlowSuccess(successMessage) {
        this.helpBlock = successMessage;
    }
    onAddFlowFail(errorMessage) {
        this.helpBlock = errorMessage;
    }
    onUpdateName(event) {
        this.name = event.target.value;
    }
    onUpdateAuthor(event) {
        this.author = event.target.value;
    }
    onUpdateJob(event) {
        this.url = event.target.value;
    }
    onUpdateContent(event) {
        this.content = event.target.value;
    }
}
export default alt.createStore(AddFlowStore);