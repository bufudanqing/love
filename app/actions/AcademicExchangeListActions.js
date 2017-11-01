import alt from '../alt';
import Base64 from './Base64';
class AcademicExchangeListActions {
    constructor() {
        this.generateActions(
            'getAcademicExchangeListSuccess',
            'getAcademicExchangeListFail'
        );
    }

    getAcademicExchanges() {
        let url = '/yjzx/academic-exchange/getAcademicExchanges'+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getAcademicExchangeListSuccess(data.data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getAcademicExchangeListFail(data.data);
            });
    }
    delAcademicExchange(id){
        let url = '/yjzx/academic-exchange/delAcademicExchange/'+id+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getAcademicExchangeListSuccess(data.data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getAcademicExchangeListFail(data.data);
            });
    }
}

export default alt.createActions(AcademicExchangeListActions);