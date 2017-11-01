import {assign, contains} from 'underscore';
import alt from '../alt';
import ResearchTeamActions from '../actions/ResearchTeamActions';

class ResearchTeamStore {
    constructor() {
        this.bindActions(ResearchTeamActions);
        this.id = 0;
        this.name = '';
        this.type = '';
        this.url = '/img/default.gif';
        this.academy = '';
        this.summary = '';
    }

    onGetResearchTeamSuccess(data) {
        this.setState(data[0])
    }

    onGetResearchTeamFail(jqXhr) {
    }
}

export default alt.createStore(ResearchTeamStore);