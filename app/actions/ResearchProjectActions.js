import alt from '../alt';
import Base64 from './Base64';
class ResearchProjectActions {
    constructor() {
        this.generateActions(
            'getResearchProjectSuccess',
            'getResearchProjectFail'
        );
    }
    getResearchProject(id) {
        $.ajax({ url: '/yjzx/research-project/getResearchProject/' + id+Base64.sign(),method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getResearchProjectSuccess(data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getResearchProjectFail(data);
            });
    }



}

export default alt.createActions(ResearchProjectActions);