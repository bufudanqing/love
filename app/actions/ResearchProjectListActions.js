import alt from '../alt';
import Base64 from './Base64';
class ResearchProjectListActions {
    constructor() {
        this.generateActions(
            'getResearchProjectListSuccess',
            'getResearchProjectListFail'
        );
    }

    getResearchProjects(type) {
        let url = '/yjzx/research-project/getResearchProjects'+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getResearchProjectListSuccess(data.data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getResearchProjectListFail(data.data);
            });
    }
    delResearchProject(id){
        let url = '/yjzx/research-project/delResearchProject/'+id+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getResearchProjectListSuccess(data.data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getResearchProjectListFail(data.data);
            });
    }
}

export default alt.createActions(ResearchProjectListActions);