import alt from '../alt';
import Base64 from './Base64';
class AcademicExchangeActions {
    constructor() {
        this.generateActions(
            'getAcademicExchangeSuccess',
            'getAcademicExchangeFail'
        );
    }
    getAcademicExchange(id) {
        $.ajax({ url: '/yjzx/academic-exchange/getAcademicExchange/' + id+Base64.sign() ,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getAcademicExchangeSuccess(data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getAcademicExchangeFail(data);
            });
    }
}
export default alt.createActions(AcademicExchangeActions);