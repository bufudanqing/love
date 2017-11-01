import React from 'react';
import AddSpreadStore from '../stores/AddSpreadStore';
import AddSpreadActions from '../actions/AddSpreadActions';
class AddSpread extends React.Component {
    constructor(props) {
        super(props);
        this.state=AddSpreadStore.getState();
    }
    componentDidMount() {
        var spread=this;
        $( "input[type='radio']" ).on( "click", function(){
            switch ($(this).val()){
                case "1":
                    spread.setState({baseUrl:"public/img/spread/syxa/",type:1});
                    break;
                case "2":
                    spread.setState({baseUrl:"public/img/spread/pxjd/",type:2});
                    break;
                case "3":
                    spread.setState({baseUrl:"public/img/spread/yjzx/",type:3});
                    break;
                default:
                    break
            }
        } );
    }


    imgAjaxUpload(event){
        if(this.state.baseUrl.length<1){
            alert("请先选择上传图片的类型!");
           return false;
        }
        event.preventDefault();
        var imgEle=$(event.target),formDom=$(event.target.parentNode),fileEle=$(event.target.nextSibling);
        fileEle.click();
            fileEle.on('change',function(){
                var objFile=  $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if(!(objType===".jpg" || objType ===".png" || objType===".jpeg")){
                    alert("请选择.jpg/.png/.jpeg类型的图片");
                    return false;
                }
                $.ajax({
                    url: '/fileUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function(res) {
                    imgEle.attr('src',res.src);
                }).fail(function(res) {});
            });
    }
    subBtn(){
        AddSpreadActions.addSpread({type:this.state.type,url:$("#imgUrl").attr("src")});
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
                            <div className='panel-heading'>创建展板</div>
                            <span className='help-block'>{this.state.helpBlock}</span>
                            <div className='panel-body'>
                                <div className='row '>
                                <div className='col-sm-6'>
                                <div className={'form-group '}>
                                <label className='control-label'>图片:</label>
                                <form>
                                <input type="hidden" name="baseUrl" value={this.state.baseUrl}/>
                                <img onClick={this.imgAjaxUpload.bind(this)} id="imgUrl" height="300" width="300"  src="/img/default.gif"  />
                                <input name="img" type="file" style={style} />
                                </form>
                                </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className={'form-group '}>
                                        <label className='control-label'>类型:</label><br/>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='type' value='1' id="syxa" />
                                            <label htmlFor='syxa'>数元信安</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio'  name='type' value='2' id="pxjd"/>
                                            <label htmlFor='pxjd'>培训基地</label>
                                        </div>
                                        <div className='radio  radio-inline'>
                                            <input type='radio'  name='type' value='3'  id="yjzx" />
                                            <label htmlFor='yjzx'>研究中心</label>
                                        </div>
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

export default AddSpread;