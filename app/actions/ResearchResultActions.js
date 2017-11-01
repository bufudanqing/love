import alt from '../alt';
import Base64 from './Base64';
class ResearchResultActions {
    constructor() {
        this.generateActions(
            'getResearchResultSuccess',
            'getResearchResultFail'
        );
    }
    getResearchResult(id) {
        $.ajax({ url: '/yjzx/research-result/getResearchResult/' + id+Base64.sign() ,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getResearchResultSuccess(data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getResearchResultFail(data);
            });
    }
}

export default alt.createActions(ResearchResultActions);