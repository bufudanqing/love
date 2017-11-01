import alt from '../alt';
import Base64 from './Base64';
class NewsConsultListActions {
    constructor() {
        this.generateActions(
            'getNewsConssultSuccess',
            'getNewsConsultFail'
        );
    }

    getNewsConsults() {
        var start=0,size=10;
        let url = '/syxa/news-consult/getNewsConsults/'+start+'/'+size+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                data.data.forEach(function(item,insex,arr){
                    item.type=="1"?item.type="新闻咨询":item.type="公司动态";
                    arr[insex]=item;
                });
                this.actions.getNewsConssultSuccess(data);
            })
            .fail((data) => {
                this.actions.getNewsConssultSuccess(data);
            });
    }
    delNewsConsult(id){
        let url = '/syxa/news-consult/delNewsConsult/'+id+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                data.data.forEach(function(item,insex,arr){
                    item.type=="1"?item.type="新闻咨询":item.type="公司动态";
                    arr[insex]=item;
                });
                this.actions.getNewsConssultSuccess(data);
            })
            .fail((data) => {
                this.actions.getNewsConssultSuccess(data);
            });
    }










}

export default alt.createActions(NewsConsultListActions);