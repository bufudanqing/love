import alt from '../alt';
import NewsConsultListActions from '../actions/NewsConsultListActions';

class NewsConsultListStore {
    constructor() {
        this.bindActions(NewsConsultListActions);
        this.newsConsults = [];
    }

    onGetNewsConssultSuccess(data) {
        this.setState({newsConsults:data.data});

    }

    onGetNewsConssultFail(data) {
        this.newsConsults = data;
    }
}

export default alt.createStore(NewsConsultListStore);