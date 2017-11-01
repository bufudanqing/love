import alt from '../alt';

class AddMasterTeamActions {
    constructor() {
        this.generateActions(
            'addMasterTeamSuccess',
            'addMasterTeamFail',
            'updateName',
            'updateJob',
            'updateContent',
            'updateAliases',
            'updateIntroduction'
        );
    }

    addMasterTeam(reqData) {
        $.ajax({
            type: 'POST',
            url: '/pxjd/master-team/addMasterTeam',
            data: reqData
        })
            .done((data) => {
                this.actions.addMasterTeamSuccess(data.message);
            })
            .fail((data) => {
                this.actions.addMasterTeamFail(data.message);
            });
    }
    editMasterTeam(reqData){
        $.ajax({
            type: 'POST',
            url: '/pxjd/master-team/editMasterTeam',
            data: reqData
        })
            .done((data) => {
                this.actions.addMasterTeamSuccess(data.message);
            })
            .fail((data) => {
                this.actions.addMasterTeamFail(data.message);
            });

    }
}

export default alt.createActions(AddMasterTeamActions);