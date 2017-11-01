import alt from '../alt';
import AcademicExchangeListActions from '../actions/AcademicExchangeListActions';

class AcademicExchangeListStore {
    constructor() {
        this.bindActions(AcademicExchangeListActions);
        this.academicExchanges = [];
    }

    onGetAcademicExchangeListSuccess(data) {
        this.academicExchanges = data;
    }

    onGetAcademicExchangeListFail(data) {
        this.academicExchanges = data;
    }
}

export default alt.createStore(AcademicExchangeListStore);