import alt from '../alt';
import Base64 from './Base64';
class ApkListActions {
    constructor() {
        this.generateActions(
            'getApkListSuccess',
            'getApkListFail'
        );
    }

    getApks() {
        let url = '/apk/list'+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getApkListSuccess(data.data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getApkListFail(data.data);
            });
    }

}

export default alt.createActions(ApkListActions);