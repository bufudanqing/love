import alt from '../alt';
import ApkListActions from '../actions/ApkListActions';

class ApkListStore {
    constructor() {
        this.bindActions(ApkListActions);
        this.apks = [];
    }

    onGetApkListSuccess(data) {
        this.apks=data;

    }

    onGetApkListFail(data) {
        this.apks = data;
    }
}

export default alt.createStore(ApkListStore);