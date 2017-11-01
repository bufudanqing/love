import alt from '../alt';

class AddNewsConsultActions {
    constructor() {
        this.generateActions(
            'addNewsConsultSuccess',
            'addNewsConsultFail',
            'updateTitle',
            'updateSubtitle',
            'updateAuthor',
            'updateType',
            'updateContent',
        );
    }

    addNewsConsult(reqData) {
        $.ajax({
            type: 'POST',
            url: '/syxa/news-consult/addNewsConsult',
            data: reqData
        })
            .done((data) => {
                this.actions.addNewsConsultSuccess(data.message);
            })
            .fail((jqXhr) => {
                this.actions.addNewsConsultFail(jqXhr.responseJSON.message);
            });
    }
    editNewsConsult(reqData){
        $.ajax({
            type: 'POST',
            url: '/syxa/news-consult/editNewsConsult',
            data: reqData
        })
            .done((data) => {
                this.actions.addNewsConsultSuccess(data.message);
            })
            .fail((jqXhr) => {
                this.actions.addNewsConsultFail(jqXhr.responseJSON.message);
            });
    }
}

export default alt.createActions(AddNewsConsultActions);