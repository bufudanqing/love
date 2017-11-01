var crypto = require('crypto');
var legal= {
    terminals: [md5("trek")]

}
function md5(value){
    if(!value){
        return false;
    }
     var md5=crypto.createHash('md5');
     md5.update(value)
   var v=md5.digest('hex');
     console.info(v)
     return v;
}
function parseBase64(time){
    if(!time){
        return false;
    }
   var arrs= time.split('');
    var items=[];
    arrs.forEach(function(item,index){
        if(index !=3){
            items.push(item);
        }
    })
  return parseInt( new Buffer(items.join(''), 'base64').toString())
}
//外部接口安全检测
module.exports.reqCheck=function(req,res){
    var info={
        isSign:true,
        info:"",
    }
    var newTime=new Date().getTime();
    if( !(parseBase64(req.params.sign)>= newTime)){
        info.isSign=false;
        info.info="签名失败";
    }
    if(!((newTime+60*1000)>=(parseBase64(req.params.sign)))){
        info.isSign=false;
        info.info="签名失败";
    }
    return info;
}
module.exports.checkAPI=function(req,res){
    if(!req.params.sign){
        res.end("签名认证失败");
        return false;
    }
    legal.terminals.forEach(function(item){
        if(item!==req.params.sign ){
            res.end("签名认证失败");
            return false;
        }
    });
    if(!req.params.timestamp){
        res.end("接口已失效");
        return false;
    }
    var newTime=new Date().getTime();
    if( !(parseBase64(req.params.timestamp)>= newTime)){
        res.end("接口已失效");
        return false;
    }
    if(!((newTime+60*1000)>=(parseBase64(req.params.timestamp)))){
        res.end("接口已失效");
        return false;
    }
}
module.exports.toBase64=function(data){
    if(!data){
       return false;
    }

 return    new Buffer(JSON.stringify(data)).toString('base64');
}
module.exports.toBase642=function(data){
    if(!data){
        return false;
    }
    var str=new Buffer(JSON.stringify(data)).toString('base64');
    var arrs=str.split('');
    arrs[10]=arrs[10]+'c';
    return   arrs.join('') ;
}