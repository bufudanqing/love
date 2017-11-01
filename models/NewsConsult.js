var DBUtil = require('./DBUtil');
module.exports.addNewsConsult=function(req,res){
    var ip_port=req.headers.host;
    var newsConsult=req.body;
    var dbData={
        sql:"insert into news_consult (  title, subtitle,  top_img, author, content, type) values (   ?, ?, ?, ?, ?, ?) ",
        arg:[
            newsConsult.title,
            newsConsult.subtitle,
            newsConsult.top_img,
            newsConsult.author,
            newsConsult.content,
            newsConsult.type],
        res:res
    }
    DBUtil.save(dbData)
}
module.exports.editNewsConsult=function(req,res){
    var ip_port=req.headers.host;
    var newsConsult=req.body;
    var dbData={
        sql:" UPDATE news_consult set title=?, subtitle=?, top_img= ?, author=? , content= ? , type= ? where id= ? ",
        arg:[
            newsConsult.title,
            newsConsult.subtitle,
            newsConsult.top_img,
            newsConsult.author,
            newsConsult.content,
            newsConsult.type,
            newsConsult.id
        ],
        res:res
    }
    DBUtil.save(dbData)
}


module.exports.getNewsConsultById=function(req,res){
    var dbData={
        sql:"select * from  news_consult where id =? ",
        arg:[req.params.id],
        res:res
    }
    DBUtil.selectById(dbData)
}

module.exports.getNewsConsults=function(req,res){
   var start= (parseInt(req.params.start)-1)*parseInt(req.params.size);
    var size=parseInt(req.params.size);
    var dbData={
        countsql:"  SELECT COUNT(id) total FROM news_consult  ",
        sql:"select id ,title,author,type ,top_img from  news_consult ORDER BY create_time  DESC  ",// LIMIT ?,?
        arg:[],
        res:res
    }
    DBUtil.list(dbData)
}
module.exports.delNewsConsult=function(req,res){
    var dbData={
        delete:"DELETE FROM  news_consult where id=? ",
        arg:[req.params.id],
        res:res,
        sel:[],
        select:" select * from  news_consult ORDER BY create_time  DESC "
    }
    DBUtil.delById(dbData)
}
module.exports.getNewsConsultsByQuery=function(req,res){
    var page=1,size=10,type=1,level=1,dbData;
    if(req.params.page){
        page=parseInt(req.params.page);
    }
    if(req.params.size){
        size=parseInt(req.params.size);
    }
    if(req.params.type){
        type=parseInt(req.params.type);
    }
    if(req.params.level){
        level=parseInt(req.params.level);
    }
    var start= (page-1)*size;
    switch (level){
        case 3:
           dbData={
                count:"select count(id) num  from news_consult where  year(  create_time  ) = year( curdate( )) and type= ?  ",
                arg:[type],
                res:res,
                time:"create_time",
                sel:[type,start,size],
                select:"  SELECT * FROM news_consult where  year(  create_time  ) = year( curdate( )) and  type= ? ORDER BY create_time DESC LIMIT ?, ?  "
            }
            break;
        case 2:
            dbData={
                count:"select count(id) num  from news_consult where  quarter(  create_time  ) = quarter( curdate( ))  and type= ?  ",
                arg:[type],
                res:res,
                time:"create_time",
                sel:[type,start,size],
                select:"  SELECT * FROM news_consult where  quarter(  create_time  ) = quarter( curdate( ))  and  type= ? ORDER BY create_time DESC LIMIT ?, ?  "
            }
            break;
        default:
            dbData={
                count:"select count(id) num  from news_consult where  month(create_time) = month(curdate()) and week(create_time) = week(curdate())  and type= ?  ",
                arg:[type],
                res:res,
                time:"create_time",
                sel:[type,start,size],
                select:"  SELECT * FROM news_consult where  month(create_time) = month(curdate()) and week(create_time) = week(curdate())   and  type= ? ORDER BY create_time DESC LIMIT ?, ?  "
            }
            break;
    }
    DBUtil.getExampleByQuery(dbData)
}


module.exports.getNewsConsultInfoById=function(req,res){
    var dbData={
        sql:"select * from  news_consult where id =? ",
        arg:[req.params.id],
        time:"create_time",
        res:res
    }
    DBUtil.selectById2(dbData)
}