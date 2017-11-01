module.exports.parseUrl=function(req){
    var urlResource=[];
    if(!req.path){
        return ;
    }
    urlResource=req.path.split("/");
    urlResource.shift();
    return urlResource;
}
module.exports.setResHeader=function(res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
}