import alt from '../alt';
import Base64 from './Base64';
class ResearchResultListActions {
    constructor() {
        this.generateActions(
            'getResearchResultListSuccess',
            'getResearchResultListFail'
        );
    }

    getResearchResults(type) {
        let url = '/yjzx/research-result/getResearchResults/'+type+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
            data.data.forEach(function(item,index,arr){
                item.type=="1"?item.type="专利":item.type=="2"?item.type="软著":item.type=="3"?item.type="获奖":item.type=="4"?item.type="项目":item.type="论文";
                arr[index]=item;
            });
                this.actions.getResearchResultListSuccess(data.data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getResearchResultListFail(data.data);
            });
    }
    delResearchResult(id,type){
        let url = '/yjzx/research-result/delResearchResult/'+id+'/'+type+Base64.sign();
        $.ajax({ url: url,method:"GET"})
            .done((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getResearchResultListSuccess(data.data);
            })
            .fail((data) => {
                var data=Base64.parseBase64(data);
                this.actions.getResearchResultListFail(data.data);
            });
    }
}

export default alt.createActions(ResearchResultListActions);