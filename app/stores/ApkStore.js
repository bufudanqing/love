import alt from '../alt';
import ApkActions from '../actions/ApkActions';
class ApkStore {
    constructor() {
        this.bindActions(ApkActions);
        this.name='';
        this.version='';
        this.helpBlock = '';
    }
    onAddApkActionsSuccess(successMessage) {
        this.helpBlock = successMessage;
    }
    onAddApkActionsFail(errorMessage) {
        this.helpBlock = errorMessage;
    }
}

export default alt.createStore(ApkStore);