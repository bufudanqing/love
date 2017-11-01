var DBUtil = require('./DBUtil');
module.exports.addFlow=function(req,res){
    var ip_port=req.headers.host;
    var flow=req.body;
    var dbData={
        sql:"insert into flow (  name ,url ,author ,content ) values ( ?,?, ?, ?) ",
        arg:[
            flow.name,
            flow.url,
            flow.author,
            flow.content,
        ],
        res:res
    }
    DBUtil.save(dbData)
}

module.exports.getFlows=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        sql:" SELECT id, name,author,url  FROM flow  ORDER BY create_time DESC ",
        arg:[],
        res:res,
        countsql:" select count(id) from  flow "
    }
    DBUtil.list(dbData)
}


module.exports.delFlow=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        delete:"DELETE FROM  flow where id=? ",
        arg:[req.params.id],
        res:res,
        sel:[],
        select:" SELECT id, name,author,url FROM flow  ORDER BY create_time DESC   "
    }
    DBUtil.delById(dbData)
}


module.exports.getFlow=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        sql:" SELECT * FROM flow  where id=?  ",
        arg:[req.params.id],
        res:res
    }
    DBUtil.selectById(dbData)
}

module.exports.editFlow=function(req,res){
    var ip_port=req.headers.host;
    var flow=req.body;
    var dbData={
        sql:" UPDATE flow set name=?, author=?, url= ?,  content= ?  where id= ? ",
        arg:[
            flow.name,
            flow.author,
            flow.url,
            flow.content,
            flow.id
        ],
        res:res
    }
    DBUtil.save(dbData);
}
module.exports.getFlowList=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        sql:" SELECT id, name,author,url  FROM flow  ORDER BY create_time DESC ",
        arg:[],
        res:res,
        countsql:" select count(id) from  flow "
    }
    DBUtil.getFlowList(dbData)
}

