import alt from '../alt';
import ResearchResultListActions from '../actions/ResearchResultListActions';

class ResearchResultListStore {
    constructor() {
        this.bindActions(ResearchResultListActions);
        this.researchResults = [];
    }

    onGetResearchResultListSuccess(data) {
        this.researchResults = data;
    }

    onGetResearchResultListFail(data) {
        this.researchResults = data;
    }
}

export default alt.createStore(ResearchResultListStore);