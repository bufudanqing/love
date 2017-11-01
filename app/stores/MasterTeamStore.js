import {assign, contains} from 'underscore';
import alt from '../alt';
import MasterTeamActions from '../actions/MasterTeamActions';

class MasterTeamStore {
    constructor() {
        this.bindActions(MasterTeamActions);
        this.id = 0;
        this.name = '';
        this.job = '';
        this.aliases='';
        this.introduction='';
        this.url = '/img/default.gif';
        this.content = '';
    }

    onGetMasterTeamSuccess(data) {
        this.setState(data[0])
    }

    onGetMasterTeamFail(jqXhr) {
    }
}

export default alt.createStore(MasterTeamStore);