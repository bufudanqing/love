import alt from '../alt';
import AddNewsConsultActions from '../actions/AddNewsConsultActions';

class AddNewsConsultStore {
    constructor() {
        this.bindActions(AddNewsConsultActions);
        this.title = '';//标题
        this.author='';//作者
        this.type='1';//新闻公告/公司动态
        this.subtitle='';//描述
        this.content='';//内容
        this.helpBlock = '';
    }
    //添加成功的事件
    onAddNewsConsultSuccess(successMessage) {
        this.helpBlock = successMessage;
    }
//添加失败的事件
    onAddNewConsultFail(errorMessage) {
        this.helpBlock = errorMessage;
    }
//修改更新
    onUpdateTitle(event) {
        this.title = event.target.value;
    }


    onUpdateAuthor(event) {
        this.author = event.target.value;
    }
    onUpdateType(event) {
        this.type = event.target.value;
    }
    onUpdateSubtitle(event) {
        this.subtitle = event.target.value;
    }
    onUpdateContent(event) {
        this.content = event.target.value;
    }
}

export default alt.createStore(AddNewsConsultStore);