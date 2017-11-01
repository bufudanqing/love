import alt from '../alt';
import AddResearchResultActions from '../actions/AddResearchResultActions';

class AddResearchResultStore {
    constructor() {
        this.bindActions(AddResearchResultActions);
        this.title = '';
        this.type = '1';
        this.helpBlock = '';
    }
    //添加成功的事件
    onAddResearchResultSuccess(successMessage) {
        this.helpBlock = successMessage;
    }
//添加失败的事件
    onAddResearchResultFail(errorMessage) {
        this.helpBlock = errorMessage;
    }
//修改更新
    onUpdateTitle(event) {
        this.title = event.target.value;
    }

    onUpdateType(event) {
        this.type = event.target.value;
    }
}

export default alt.createStore(AddResearchResultStore);