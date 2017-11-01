import alt from '../alt';

class AddDocumentActions {
    constructor() {
        this.generateActions(
            'addDocumentSuccess',
            'addDocumentFail',
            'updateName',
        );
    }

    addDocument(reqData) {
        $.ajax({
            type: 'POST',
            url: '/document/add',
            data: reqData
        })
            .done((data) => {
                this.actions.addDocumentSuccess(data.message);
            })
            .fail((data) => {
                this.actions.addDocumentFail(data.message);
            });
    }

}

export default alt.createActions(AddDocumentActions);