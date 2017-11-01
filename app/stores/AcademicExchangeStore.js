import {assign, contains} from 'underscore';
import alt from '../alt';
import AcademicExchangeActions from '../actions/AcademicExchangeActions';

class AcademicExchangeStore {
    constructor() {
        this.bindActions(AcademicExchangeActions);
        this.id = 0;
        this.title = '';
        this.address = '';
        this.author = '';
        this.content='';
    }

    onGetAcademicExchangeSuccess(data) {
        this.setState(data[0])
    }

    onGetAcademicExchangeFail(jqXhr) {
    }
}

export default alt.createStore(AcademicExchangeStore);