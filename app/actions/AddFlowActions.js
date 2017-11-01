import alt from '../alt';

class AddFlowActions {
    constructor() {
        this.generateActions(
            'addFlowSuccess',
            'addFlowFail',
            'updateName',
            'updateAuthor',
            'updateContent',
            'updateUrl',
        );
    }

    addFlow(reqData) {
        $.ajax({
            type: 'POST',
            url: '/flow/addFlow',
            data: reqData
        })
            .done((data) => {
                this.actions.addFlowSuccess(data.message);
            })
            .fail((data) => {
                this.actions.addFlowFail(data.message);
            });
    }
    editFlow(reqData){
        $.ajax({
            type: 'POST',
            url: '/flow/editFlow',
            data: reqData
        })
            .done((data) => {
                this.actions.addFlowSuccess(data.message);
            })
            .fail((data) => {
                this.actions.addFlowFail(data.message);
            });

    }
}

export default alt.createActions(AddFlowActions);