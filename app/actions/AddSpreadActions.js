import alt from '../alt';

class AddSpreadActions {
    constructor() {
        this.generateActions(
            'getSpreadSuccess',
            'getSpreadFail',
        );
    }

    addSpread(args) {
        $.ajax({ url: '/spread/add',method:"POST",data:args})
            .done((data) => {
                this.actions.getSpreadSuccess(data);
            })
            .fail((data) => {
                this.actions.getSpreadFail(data);
            });
    }
}

export default alt.createActions(AddSpreadActions);