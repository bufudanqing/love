var DBUtil = require('./DBUtil');
module.exports.addDocument=function(req,res){
    var document=req.body;
    var dbData={
        sql:"insert into document (  name ,url ,size ) values ( ?,?,? ) ",
        arg:[
            document.name,
            document.url,
            document.size,
        ],
        res:res
    }
    DBUtil.save(dbData)
}
module.exports.getDocuments=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        sql:" SELECT *   FROM document  ORDER BY create_time DESC ",
        arg:[],
        res:res,
        countsql:" select count(id) from  flow "
    }
    DBUtil.getDocumentList(dbData)
}