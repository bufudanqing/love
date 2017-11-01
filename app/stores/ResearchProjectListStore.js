import alt from '../alt';
import ResearchProjectListActions from '../actions/ResearchProjectListActions';

class ResearchProjectListStore {
    constructor() {
        this.bindActions(ResearchProjectListActions);
        this.researchProjects = [];
    }

    onGetResearchProjectListSuccess(data) {
        this.researchProjects = data;
    }

    onGetResearchProjectListFail(data) {
        this.researchProjects = data;
    }
}

export default alt.createStore(ResearchProjectListStore);