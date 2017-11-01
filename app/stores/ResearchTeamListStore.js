import alt from '../alt';
import ResearchTeamListActions from '../actions/ResearchTeamListActions';

class ResearchTeamListStore {
    constructor() {
        this.bindActions(ResearchTeamListActions);
        this.researchTeams = [];
    }

    onGetResearchTeamListSuccess(data) {
        this.researchTeams = data;
    }

    onGetResearchTeamListFail(data) {
        this.researchTeams = data;
    }
}

export default alt.createStore(ResearchTeamListStore);