import alt from '../alt';
import Base64 from './Base64';
class ResearchTeamActions {
    constructor() {
        this.generateActions(
            'getResearchTeamSuccess',
            'getResearchTeamFail'
        );
    }
    getResearchTeam(id) {
        $.ajax({ url: '/pxjd/research-team/getResearchTeam/' + id+Base64.sign() ,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getResearchTeamSuccess(data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getResearchTeamFail(data);
            });
    }
}

export default alt.createActions(ResearchTeamActions);