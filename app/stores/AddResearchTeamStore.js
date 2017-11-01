import alt from '../alt';
import AddResearchTeamActions from '../actions/AddResearchTeamActions';

class AddResearchTeamStore {
    constructor() {
        this.bindActions(AddResearchTeamActions);
        this.name = '';
        this.type = '3';
        this.academy='';
        this.helpBlock = '';
    }
    //添加成功的事件
    onAddResearchTeamSuccess(successMessage) {
        this.helpBlock = successMessage;
    }
//添加失败的事件
    onAddResearchTeamFail(errorMessage) {
        this.helpBlock = errorMessage;
    }
//修改更新
    onUpdateName(event) {
        this.name = event.target.value;
    }

    onUpdateType(event) {
        this.type = event.target.value;
    }
    onUpdateAcademy(event) {
        this.academy = event.target.value;
    }
}

export default alt.createStore(AddResearchTeamStore);