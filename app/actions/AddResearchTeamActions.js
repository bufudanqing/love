import alt from '../alt';

class AddResearchTeamActions {
    constructor() {
        this.generateActions(
            'addResearchTeamSuccess',
            'addResearchTeamFail',
            'updateName',
            'updateType',
            'updateAcademy',
        );
    }

    addResearchTeam(reqData) {
        $.ajax({
            type: 'POST',
            url: '/yjzx/research-team/addResearchTeam',
            data: reqData
        })
            .done((data) => {
                this.actions.addResearchTeamSuccess(data.message);
            })
            .fail((data) => {
                this.actions.addResearchTeamFail(data.message);
            });
    }
    editResearchTeam(reqData){
        $.ajax({
            type: 'POST',
            url: '/yjzx/research-team/editResearchTeam',
            data: reqData
        })
            .done((data) => {
                this.actions.addResearchTeamSuccess(data.message);
            })
            .fail((data) => {
                this.actions.addResearchTeamFail(data.message);
            });
    }
}

export default alt.createActions(AddResearchTeamActions);