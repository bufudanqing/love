import alt from '../alt';
import Base64 from './Base64';
class NewsConsultActions {
    constructor() {
        this.generateActions(
            'getNewsConsultSuccess',
            'getNewsConsultFail'
        );
    }
    getNewsConsult(id) {
        $.ajax({ url: '/syxa/news-consult/getNewsConsult/' + id+Base64.sign(),method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getNewsConsultSuccess(data);
            })
            .fail((jqXhr) => {
                this.actions.getNewsConsultFail(jqXhr);
            });
    }
}

export default alt.createActions(NewsConsultActions);