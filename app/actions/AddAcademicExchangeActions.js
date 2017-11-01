import alt from '../alt';

class AddAcademicExchangeActions {
    constructor() {
        this.generateActions(
            'addAcademicExchangeSuccess',
            'addAcademicExchangeFail',
            'updateTitle',
            'updateAuthor',
            'updateAddress',
        );
    }

    addAcademicExchange(reqData) {
        $.ajax({
            type: 'POST',
            url: '/pxjd/academic-exchange/addAcademicExchange',
            data: reqData
        })
            .done((data) => {
                this.actions.addAcademicExchangeSuccess(data.message);
            })
            .fail((jqXhr) => {
                this.actions.addAcademicExchangeFail(jqXhr.responseJSON.message);
            });
    }
    editAcademicExchange(reqData){
        $.ajax({
            type: 'POST',
            url: '/pxjd/academic-exchange/editAcademicExchange',
            data: reqData
        })
            .done((data) => {
                this.actions.addAcademicExchangeSuccess(data.message);
            })
            .fail((jqXhr) => {
                this.actions.addAcademicExchangeFail(jqXhr.responseJSON.message);
            });
    }
}

export default alt.createActions(AddAcademicExchangeActions);