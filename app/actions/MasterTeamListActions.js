import alt from '../alt';
import Base64 from './Base64';
class MasterTeamListActions {
    constructor() {
        this.generateActions(
            'getMasterTeamListSuccess',
            'getMasterTeamListFail'
        );
    }

    getMasterTeams() {
        let url = '/pxjd/master-team/getMasterTeams'+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getMasterTeamListSuccess(data.data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getMasterTeamListFail(data.data);
            });
    }
    delMasterTeam(id,type){
        let url = '/pxjd/master-team/delMasterTeam/'+id+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getMasterTeamListSuccess(data.data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getMasterTeamListFail(data.data);
            });
    }
}

export default alt.createActions(MasterTeamListActions);