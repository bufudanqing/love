import alt from '../alt';
import Base64 from './Base64';
class FlowListActions {
    constructor() {
        this.generateActions(
            'getFlowListSuccess',
            'getFlowListFail'
        );
    }

    getFlows() {
        let url = '/flow/getFlows'+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getFlowListSuccess(data.data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getFlowListFail(data.data);
            });
    }
    delFlow(id,type){
        let url = '/flow/delFlow/'+id+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getFlowListSuccess(data.data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getFlowListFail(data.data);
            });
    }
}

export default alt.createActions(FlowListActions);