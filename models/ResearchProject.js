var DBUtil = require('./DBUtil');
module.exports.addResearchProject=function(req,res){
    var ip_port=req.headers.host;
    var researchProject=req.body;
    var dbData={
        sql:"insert into research_project (  title ,url  ,summary) values (  ?, ?, ? ) ",
        arg:[
            researchProject.title,
            researchProject.url,
            researchProject.summary
        ],
        res:res
    }
    DBUtil.save(dbData)
}

module.exports.getResearchProjects=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        sql:" SELECT id, url ,title FROM research_project   ORDER BY time DESC  ",
        arg:[],
        countsql:" select count(id) FROM research_project  ",
        res:res
    }
    DBUtil.list(dbData)
}
module.exports.delResearchProject=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        delete:"DELETE FROM  research_project where id=? ",
        arg:[req.params.id],
        res:res,
        sel:[],
        select:" SELECT id, title,url FROM research_project  ORDER BY time DESC  "
    }
    DBUtil.delById(dbData)
}
module.exports.getResearchProject=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        arg:[req.params.id],
        res:res,
        sql:" SELECT * FROM research_project where id=?  "
    }
    DBUtil.selectById(dbData)
}
module.exports.editResearchProject=function(req,res){
    var ip_port=req.headers.host;
    var newsProject=req.body;
    var dbData={
        sql:" UPDATE research_project set title=? , url= ?, summary=? where id= ? ",
        arg:[
            newsProject.title,
            newsProject.url,
            newsProject.summary,
            newsProject.id
        ],
        res:res
    }
    DBUtil.save(dbData)
}


module.exports.getResearchProjectsByQuery=function(req,res){
    var page=1,size=10;
    if(req.params.page){
        page=parseInt(req.params.page);
    }
    if(req.params.size){
        size=parseInt(req.params.size);
    }

    var start= (page-1)*size;

    var dbData={
        count:"select count(id) num  from research_project   ",
        arg:[],
        res:res,
        time:"time",
        sel:[start,size],
        select:"  SELECT * FROM research_project  ORDER BY time DESC LIMIT ?, ?  "
    }
    DBUtil.getExampleByQuery(dbData)
}
module.exports.getResearchProjectInfoById=function(req,res){
    var dbData={
        sql:"select * from  research_project where id =? ",
        arg:[req.params.id],
        time:"time",
        res:res
    }
    DBUtil.selectById2(dbData)
}
