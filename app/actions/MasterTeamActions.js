import alt from '../alt';
import Base64 from './Base64';
class MasterTeamActions {
    constructor() {
        this.generateActions(
            'getMasterTeamSuccess',
            'getMasterTeamFail'
        );
    }
    getMasterTeam(id) {
        $.ajax({ url: '/pxjd/master-team/getMasterTeam/' + id+Base64.sign() ,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getMasterTeamSuccess(data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getMasterTeamFail(data);
            });
    }
}

export default alt.createActions(MasterTeamActions);