var DBUtil = require('./DBUtil');
module.exports.addResearchTeam=function(req,res){
    var ip_port=req.headers.host;
    var researchTeam=req.body;
    var dbData={
        sql:"insert into research_team (  name ,type,url ,academy ,summary ,aliases ,professional) values ( ?,?, ?, ?, ?,?,? ) ",
        arg:[
            researchTeam.name,
            researchTeam.type,
            researchTeam.url,
            researchTeam.academy,
            researchTeam.summary,
            researchTeam.academy,
            researchTeam.professional
        ],
        res:res
    }
    DBUtil.save(dbData)
}

module.exports.getResearchTeams=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        sql:" SELECT id, name,academy,type,url FROM research_team   ORDER BY time DESC  ",
        arg:[],
        countsql:" select count(id) from  research_team ",
        res:res
    }
    DBUtil.list(dbData)
}



module.exports.delResearchTeam=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        delete:"DELETE FROM  research_team where id=? ",
        arg:[req.params.id],
        res:res,
        select:" SELECT id, name,academy,url FROM research_team   ORDER BY time DESC  "
    }
    DBUtil.delById(dbData)
}


module.exports.getResearchTeam=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        sql:"select * FROM  research_team where id=? ",
        arg:[req.params.id],
        res:res,
    }
    DBUtil.selectById(dbData)
}
module.exports.editResearchTeam=function(req,res){
    var ip_port=req.headers.host;
    var researchTeam=req.body;
    var dbData={
        sql:" UPDATE research_team set name=?, type=?, url= ?, academy=? , summary= ? , aliases=? ,professional=?  where id= ? ",
        arg:[
            researchTeam.name,
            researchTeam.type,
            researchTeam.url,
            researchTeam.academy,
            researchTeam.summary,
            researchTeam.aliases ,
            researchTeam.professional,
            researchTeam.id
        ],
        res:res
    }
    DBUtil.save(dbData)
}

module.exports.getResearchTeamsByQuery=function(req,res){
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
        count:"select count(id) num  from research_team where type= ?  ",
        arg:[type],
        res:res,
        time:"time",
        sel:[type,start,size],
        select:"  SELECT * FROM research_team where type= ? ORDER BY time DESC LIMIT ?, ?  "
    }
    DBUtil.getExampleByQuery(dbData)
}
module.exports.getResearchTeamInfoById=function(req,res){
    var dbData={
        sql:"select * from  research_team where id =? ",
        arg:[req.params.id],
        time:"time",
        res:res
    }
    DBUtil.selectById(dbData)
}