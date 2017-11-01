import alt from '../alt';

class AddResearchProjectActions {
    constructor() {
        this.generateActions(
            'addResearchProjectSuccess',
            'addResearchProjectFail',
            'updateTitle',
        );
    }

    addResearchProject(reqData) {
        $.ajax({
            type: 'POST',
            url: '/yjzx/research-project/addResearchProject',
            data: reqData
        })
            .done((data) => {
                this.actions.addResearchProjectSuccess(data.message);
            })
            .fail((jqXhr) => {
                this.actions.addResearchProjectFail(jqXhr.responseJSON.message);
            });
    }
    editMasterTeam(reqData){
        $.ajax({
            type: 'POST',
            url: '/yjzx/research-project/editResearchProject',
            data: reqData
        })
            .done((data) => {
                this.actions.addResearchProjectSuccess(data.message);
            })
            .fail((jqXhr) => {
                this.actions.addResearchProjectFail(jqXhr.responseJSON.message);
            });
    }
}

export default alt.createActions(AddResearchProjectActions);