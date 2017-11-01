import alt from '../alt';

class AddResearchResultActions {
    constructor() {
        this.generateActions(
            'addResearchResultSuccess',
            'addResearchResultFail',
            'updateTitle',
            'updateType'
        );
    }

    addResearchResult(reqData) {
        $.ajax({
            type: 'POST',
            url: '/yjzx/research-result/addResearchResult',
            data: reqData
        })
            .done((data) => {
                this.actions.addResearchResultSuccess(data.message);
            })
            .fail((jqXhr) => {
                this.actions.addResearchResultFail(jqXhr.responseJSON.message);
            });
    }
    editResearchResult(reqData){
        $.ajax({
            type: 'POST',
            url: '/yjzx/research-result/editResearchResult',
            data: reqData
        })
            .done((data) => {
                this.actions.addResearchResultSuccess(data.message);
            })
            .fail((jqXhr) => {
                this.actions.addResearchResultFail(jqXhr.responseJSON.message);
            });
    }
}

export default alt.createActions(AddResearchResultActions);