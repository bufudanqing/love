import alt from '../alt';
import Base64 from './Base64';
class FeedBackActions {
    constructor() {
        this.generateActions(
            'getFeedBackSuccess',
            'getFeedBackFail'
        );
    }
    getFeedBack(id) {
        $.ajax({ url: '/yjzx/feed-back/getFeedBack/' + id+Base64.sign() ,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getFeedBackSuccess(data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getFeedBackFail(data);
            });
    }
}
export default alt.createActions(FeedBackActions);