import alt from '../alt';
import Base64 from './Base64';
class FlowActions {
    constructor() {
        this.generateActions(
            'getFlowSuccess',
            'getFlowFail'
        );
    }
    getFlow(id) {
        $.ajax({ url: '/flow/getFlow/' + id+Base64.sign() ,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getFlowSuccess(data[0]);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getFlowFail(data[0]);
            });
    }
}

export default alt.createActions(FlowActions);