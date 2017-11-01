var DBUtil = require('./DBUtil');
module.exports.addFeedBack=function(req,res){
    var feedBack=req.body;
    var dbData={
        sql:"insert into feedback (  name ,email ,message ) values ( ?,?,  ? ) ",
        arg:[
            feedBack.name,
            feedBack.email,
            feedBack.message,
            ],
        res:res
    }
    DBUtil.save(dbData)
}

module.exports.getFeedBacks=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        sql:" SELECT id, name,email,message FROM feedback  ORDER BY time DESC ",
        arg:[],
        res:res,
        countsql:" select count(id) from feedback "
    }
    DBUtil.list(dbData)
}
module.exports.delFeedBack=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        delete:"DELETE FROM  feedback where id=? ",
        arg:[req.params.id],
        res:res,
        select:" SELECT id, name,email,message FROM feedback  ORDER BY time DESC "
    }
    DBUtil.delById(dbData)
}
module.exports.getFeedBack=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        sql:"SELECT * FROM  feedback where id=? ",
        arg:[req.params.id],
        res:res
    }
    DBUtil.selectById(dbData)
}


