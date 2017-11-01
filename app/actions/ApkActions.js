import alt from '../alt';

class ApkActions {
    constructor() {
        this.generateActions(
            'addApkActionsSuccess',
            'addApkActionsFail'
        );
    }

    addApk(reqData) {
        $.ajax({
            type: 'POST',
            url: '/apk/add',
            data: reqData
        })
            .done((data) => {
                this.actions.addApkActionsSuccess(data.message);
            })
            .fail((jqXhr) => {
                this.actions.addApkActionsFail(jqXhr.responseJSON.message);
            });
    }
}

export default alt.createActions(ApkActions);