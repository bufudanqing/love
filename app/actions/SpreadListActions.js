import alt from '../alt';
import Base64 from './Base64';
class SpreadListActions {
    constructor() {
        this.generateActions(
            'getSpreadsSuccess',
            'getSpreadsFail'
        );
    }
    getSpreads(type) {
        let url = '/spread/list/'+type+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getSpreadsSuccess(data.data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getSpreadsFail(data.data);
            });
    }
}

export default alt.createActions(SpreadListActions);