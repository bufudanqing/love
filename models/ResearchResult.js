var DBUtil = require('./DBUtil');
module.exports.addResearchResult=function(req,res){
    var ip_port=req.headers.host;
    var researchResult=req.body;
    var dbData={
        sql:"insert into research_result (  title ,type,url  ,summary) values ( ?, ?, ?, ? ) ",
        arg:[
            researchResult.title,
            researchResult.type,
            researchResult.url,
            researchResult.summary
        ],
        res:res
    }
    DBUtil.save(dbData)
}

module.exports.getResearchResults=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        sql:" SELECT id, title,url ,type FROM research_result WHERE  type=?  ORDER BY time DESC  ",
        arg:[req.params.type],
        res:res,
        countsql:" select count(id) from research_result "
    }
    DBUtil.list(dbData)
}

module.exports.delResearchResult=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        delete:"DELETE FROM  research_result where id=? ",
        arg:[req.params.id],
        sel:[req.params.type],
        res:res,
        select:" SELECT id, title,url FROM research_result WHERE  type=?  ORDER BY time DESC  "
    }
    DBUtil.delById(dbData)
}


module.exports.getResearchResult=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        arg:[req.params.id],
        res:res,
        sql:" SELECT *  FROM research_result WHERE  id=?  "
    }
    DBUtil.selectById(dbData);
}

module.exports.editResearchResult=function(req,res){
    var ip_port=req.headers.host;
    var researchResult=req.body;
    var dbData={
        sql:" UPDATE research_result set title=?, url=?, summary= ?, type=?  where id= ? ",
        arg:[
            researchResult.title,
            researchResult.url,
            researchResult.summary,
            researchResult.type,
            researchResult.id
        ],
        res:res
    }
    DBUtil.save(dbData)
}

module.exports.getResearchResultsByQuery=function(req,res){
    var page=1,size=10,type=1;
    if(req.params.page){
        page=parseInt(req.params.page);
    }
    if(req.params.size){
        size=parseInt(req.params.size);
    }
    if(req.params.type){
        type=parseInt(req.params.type);
    }
    var start= (page-1)*size;

    var dbData={
        count:"select count(id) num  from research_result where  type= ?   ",
        arg:[type],
        res:res,
        time:"time",
        sel:[type,start,size],
        select:"  SELECT * FROM research_result  where  type= ?  ORDER BY time DESC LIMIT ?, ?  "
    }
    DBUtil.getExampleByQuery(dbData)
}
module.exports.getResearchResultInfoById=function(req,res){
    var dbData={
        sql:"select * from  research_result where id =? ",
        arg:[req.params.id],
        time:"time",
        res:res
    }
    DBUtil.selectById2(dbData)
}
