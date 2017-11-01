var DBUtil = require('./DBUtil');
module.exports.addMasterTeam=function(req,res){
    var ip_port=req.headers.host;
    var masterTeam=req.body;
    var dbData={
        sql:"insert into master_team (  name ,url ,job ,content ,aliases,introduction) values ( ?,?,  ?, ? ,?,?) ",
        arg:[
            masterTeam.name,
            masterTeam.url,
            masterTeam.job,
            masterTeam.content,
            masterTeam.aliases,
            masterTeam.introduction
        ],
        res:res
    }
    DBUtil.save(dbData)
}

module.exports.getMasterTeams=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        sql:" SELECT id, name,job,url  FROM master_team  ORDER BY time DESC ",
        arg:[],
        res:res,
        countsql:" select count(id) from  master_team "
    }
    DBUtil.list(dbData)
}


module.exports.delMasterTeam=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        delete:"DELETE FROM  master_team where id=? ",
        arg:[req.params.id],
        res:res,
        sel:[],
        select:" SELECT id, name,job,url FROM master_team  ORDER BY time DESC   "
    }
    DBUtil.delById(dbData)
}


module.exports.getMasterTeam=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        sql:" SELECT * FROM master_team  where id=?  ",
        arg:[req.params.id],
        res:res
    }
    DBUtil.selectById(dbData)
}

module.exports.editMasterTeam=function(req,res){
    var ip_port=req.headers.host;
    var newsConsult=req.body;
    var dbData={
        sql:" UPDATE master_team set name=?, job=?, url= ?,  content= ? ,aliases=? ,introduction=?  where id= ? ",
        arg:[
            newsConsult.name,
            newsConsult.job,
            newsConsult.url,
            newsConsult.content,
            newsConsult.aliases,
            newsConsult.introduction,
            newsConsult.id
        ],
        res:res
    }
    DBUtil.save(dbData);
}

module.exports.getMasterTeamsByQuery=function(req,res){
    var page=1,size=101;
    if(req.params.page){
        page=parseInt(req.params.page);
    }
    if(req.params.size){
        size=parseInt(req.params.size);
    }
    var start= (page-1)*size;

    var dbData={
        count:"select count(id) num  from master_team    ",
        arg:[],
        res:res,
        time:"time",
        sel:[start,size],
        select:"  SELECT * FROM master_team    ORDER BY time DESC LIMIT ?, ?  "
    }
    DBUtil.getExampleByQuery(dbData)
}
module.exports.getMasterTeamInfoById=function(req,res){
    var dbData={
        sql:"select * from  master_team where id =? ",
        arg:[req.params.id],
        time:"time",
        res:res
    }
    DBUtil.selectById2(dbData)
}