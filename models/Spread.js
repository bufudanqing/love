var DBUtil = require('./DBUtil');
module.exports.addSpread=function(req,res){
    var ip_port=req.headers.host;
    var spread=req.body;
    var dbData={
        sql:"insert into spread (  type, url) values (   ?, ? ) ",
        arg:[
            spread.type,
            spread.url],
        res:res
    }
    DBUtil.save(dbData)
}

module.exports.getSpreadsByType=function(req,res){
    var ip_port=req.headers.host;
    var type="1"
    if(req.params.type){
        type=req.params.type;
    }
    var dbData={
        sql:" SELECT id, url FROM spread WHERE  type=?  ORDER BY time DESC LIMIT 0,5 ",
        arg:[type],
        res:res,
        countsql:" SELECT count(id) FROM spread WHERE  type="+type+"  ORDER BY time DESC  "
    }
    DBUtil.list(dbData)
}




module.exports.getSpreadsByQuery=function(req,res){
    var type=1,page=1,size=5;
    if(req.params.type){
        type=parseInt(req.params.type);
    }
    if(req.params.page){
        page=parseInt(req.params.page);
    }
    if(req.params.size){
        size=parseInt(req.params.size);
    }
    var start= (page-1)*size;
    var dbData={
        count:"select count(id) num  from spread  where type= ?  ",
        arg:[type],
        res:res,
        time:"time",
        sel:[type,start,size],
        select:"  SELECT * FROM spread where type= ?   ORDER BY time DESC LIMIT ?, ?  "
    }
    DBUtil.getExampleByQuery(dbData)

   
}