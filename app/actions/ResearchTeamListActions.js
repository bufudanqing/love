import alt from '../alt';
import Base64 from './Base64';
class ResearchTeamListActions {
    constructor() {
        this.generateActions(
            'getResearchTeamListSuccess',
            'getResearchTeamListFail'
        );
    }

    getResearchTeams(type) {
        let url = '/yjzx/research-team/getResearchTeams'+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                data.data.forEach(function(item,index,arr){
                    item.type=="1"?item.type="教授":item.type=="2"?item.type="专家":item.type="技术";
                    arr[index]=item;
                });
                this.actions.getResearchTeamListSuccess(data.data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getResearchTeamListFail(data.data);
            });
    }
    delResearchTeam(id){
        let url = '/yjzx/research-team/delResearchTeam/'+id+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getResearchTeamListSuccess(data.data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getResearchTeamListFail(data.data);
            });
    }
}

export default alt.createActions(ResearchTeamListActions);