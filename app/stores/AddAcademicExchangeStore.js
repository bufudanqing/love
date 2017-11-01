import alt from '../alt';
import AddAcademicExchangeActions from '../actions/AddAcademicExchangeActions';

class AddAcademicExchangeStore {
    constructor() {
        this.bindActions(AddAcademicExchangeActions);
        this.title = '';//标题
        this.author = '';//地址
        this.address='';//内容
        this.helpBlock = '';
    }
    //添加成功的事件
    onAddAcademicExchangeSuccess(successMessage) {
        this.helpBlock = successMessage;
    }
//添加失败的事件
    onAddAcademicExchangeFail(errorMessage) {
        this.helpBlock = errorMessage;
    }
//修改更新
    onUpdateTitle(event) {
        this.title = event.target.value;
    }

    onUpdateAuthor(event) {
        this.author = event.target.value;
    }
    onUpdateAddress(event) {
        this.address = event.target.value;
    }
}

export default alt.createStore(AddAcademicExchangeStore);