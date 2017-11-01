import alt from '../alt';
import AddResearchProjectActions from '../actions/AddResearchProjectActions';

class AddResearchProjectStore {
    constructor() {
        this.bindActions(AddResearchProjectActions);
        this.title = '';
        this.helpBlock = '';
    }
    //添加成功的事件
    onAddResearchProjectSuccess(successMessage) {
        this.helpBlock = successMessage;
    }
//添加失败的事件
    onAddResearchProjectFail(errorMessage) {
        this.helpBlock = errorMessage;
    }
//修改更新
    onUpdateTitle(event) {
        this.title = event.target.value;
    }


}

export default alt.createStore(AddResearchProjectStore);