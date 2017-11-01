var DBUtil = require('./DBUtil');
module.exports.getApks=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        countsql:' SELECT count(id)  FROM apk ',
        sql:" SELECT *  FROM apk  ORDER BY create_time DESC ",
        arg:[],
        res:res
    }
    DBUtil.list(dbData)
}
module.exports.getApk=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        countsql:' SELECT count(id)  FROM apk ',
        sql:" SELECT *  FROM apk  ORDER BY create_time DESC ",
        arg:[],
        res:res
    }
    DBUtil.lists(dbData)
}

module.exports.addApk=function(req,res){
    var ip_port=req.headers.host;
    var apk=req.body;
    var dbData={
        sql:" insert into apk (  name, version,  url ,down_url,size ) values ( ?, ?, ?,?,? ) ",
        arg:[apk.name,apk.version,apk.url,apk.down_url,apk.size],
        res:res
    }
    DBUtil.save(dbData)
}


