import alt from '../alt';
import Base64 from './Base64';
class FeedBackListActions {
    constructor() {
        this.generateActions(
            'getFeedBackListSuccess',
            'getFeedBackListFail'
        );
    }

    getFeedBacks() {
        let url = '/yjzx/feed-back/getFeedBacks'+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getFeedBackListSuccess(data.data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getFeedBackListFail(data.data);
            });
    }
    delFeedBacks(id){
        let url = '/yjzx/feed-back/delFeedBacks/'+id+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getFeedBackListSuccess(data.data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getFeedBackListFail(data.data);
            });
    }
}

export default alt.createActions(FeedBackListActions);