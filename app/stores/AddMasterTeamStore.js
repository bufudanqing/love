import alt from '../alt';
import AddMasterTeamActions from '../actions/AddMasterTeamActions';

class AddMasterTeamStore {
    constructor() {
        this.bindActions(AddMasterTeamActions);
        this.name = '';//标题
        this.job = '';//地址
        this.content='';//内容
        this.aliases='';
        this.introduction='';
        this.helpBlock = '';
    }
    //添加成功的事件
    onAddMasterTeamSuccess(successMessage) {
        this.helpBlock = successMessage;
    }
//添加失败的事件
    onAddMasterTeamFail(errorMessage) {
        this.helpBlock = errorMessage;
    }
//修改更新
    onUpdateName(event) {
        this.name = event.target.value;
    }
    onUpdateAliases(event) {
        this.aliases = event.target.value;
    }
    onUpdateIntroduction(event) {
        this.introduction = event.target.value;
    }
    onUpdateJob(event) {
        this.job = event.target.value;
    }
    onUpdateContent(event) {
        this.content = event.target.value;
    }
}

export default alt.createStore(AddMasterTeamStore);