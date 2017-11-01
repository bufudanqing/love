import alt from '../alt';
import MasterTeamListActions from '../actions/MasterTeamListActions';

class MasterTeamListStore {
    constructor() {
        this.bindActions(MasterTeamListActions);
        this.masterTeams = [];
    }

    onGetMasterTeamListSuccess(data) {
        this.masterTeams = data;
    }

    onGetMasterTeamListFail(data) {
        this.masterTeams = data;
    }
}

export default alt.createStore(MasterTeamListStore);