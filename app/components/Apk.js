import React from 'react';
import ApkStore from '../stores/ApkStore';
import ApkActions from '../actions/ApkActions';
class Apk extends React.Component {
    constructor(props) {
        super(props);
        this.state=ApkStore.getState();
    }
    componentDidMount() {

    }


    imgAjaxUpload(event){
       event.preventDefault();
        var imgEle=$(event.target),formDom=$(event.target.parentNode),fileEle=$(event.target.nextSibling);
        fileEle.click();
        fileEle.on('change',function(){
            var objFile=  $(this).val();
            var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
            if(!(objType===".apk")){
                alert("请上传apk文件");
                return false;
            }
            if(objType===".apk"){
                $.ajax({
                    url: '/apkUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function(res) {
                    imgEle.attr('src',res.src);
                    $("#size").val(res.size);
                    $("#download").val(res.url);

                }).fail(function(res) {});
            }

        });
    }
    subBtn(){
        var reqData={
           name:$("#name").val(),
            version:$("#version").val(),
            url:$("#apkUrl").attr("src"),
            down_url:$("#download").val(),
            size:$("#size").val(),
        }
        ApkActions.addApk(reqData);
    }
    render() {
        let style={
            opacity:0
        }
        return (
            <div className='container'>
                <div className='row flipInX animated'>
                    <div className='col-sm-12'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'>添加Apk</div>
                            <div className='panel-body'>

                                <div className='row '>
                                    <div className='col-sm-6'>
                                        <div className={'form-group '}>
                                            <input type="hidden" id="download"/>
                                            <label className='control-label'>名称</label>
                                            <input type='text' className='form-control' id="name"
                                                   />
                                        </div>
                                        <div className={'form-group '}>
                                            <label className='control-label'>版本</label>
                                            <input type='text' className='form-control' id="version"
                                                    />
                                        </div>
                                        <div className={'form-group '}>
                                            <input type="hidden" id="download"/>
                                            <label className='control-label'>大小</label>
                                            <input type='text' className='form-control' id="size"
                                            />
                                        </div>
                                        <div className={'form-group '}>
                                            <label className='control-label'>Apk:</label>
                                            <form>
                                                <input type="hidden" name="imgurl" id="imgurl" value=""/>
                                                <input type="hidden" name="baseUrl" value="public/apk/"/>
                                                <img onClick={this.imgAjaxUpload.bind(this)} id="apkUrl" height="150" width="150"  src="/img/default.gif"  />
                                                <input name="img" type="file" style={style} />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <button type='submit'  className='btn btn-primary subBtn' onClick={this.subBtn.bind(this)} >提交</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Apk;