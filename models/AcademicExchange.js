var DBUtil = require('./DBUtil');
module.exports.addAcademicExchange=function(req,res){
    var ip_port=req.headers.host;
    var academicExchange=req.body;
    var dbData={
        sql:"insert into academic_exchange (  title ,author,address ,content,url) values ( ?,?,?, ? ,?) ",
        arg:[
            academicExchange.title,
            academicExchange.author,
            academicExchange.address,
            academicExchange.content,
            academicExchange.url
        ],
        res:res
    }
    DBUtil.save(dbData)
}


module.exports.getAcademicExchanges=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        sql:" SELECT * FROM academic_exchange   ORDER BY publishTime DESC  ",
        arg:[],
        res:res,
        countsql:" select count(id) from academic_exchange "
    }
    DBUtil.list(dbData)
}

module.exports.delAcademicExchange=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        delete:"DELETE FROM  academic_exchange where id=? ",
        arg:[req.params.id],
        res:res,
        select:" SELECT id,title,address,author FROM academic_exchange   ORDER BY publishTime DESC  "
    }
    DBUtil.delById(dbData)
}

module.exports.getAcademicExchange=function(req,res){
    var ip_port=req.headers.host;
    var dbData={
        sql:" SELECT *  FROM academic_exchange   where id=?  ",
        arg:[req.params.id],
        res:res
    }
    DBUtil.selectById(dbData)
}
module.exports.editAcademicExchange=function(req,res){
    var ip_port=req.headers.host;
    var academicExchange=req.body;
    var dbData={
        sql:" UPDATE academic_exchange set title=?, author=?, address= ?,  content= ? ,url=?  where id= ? ",
        arg:[
            academicExchange.title,
            academicExchange.author,
            academicExchange.address,
            academicExchange.content,
            academicExchange.url,
            academicExchange.id
        ],
        res:res
    }
    DBUtil.save(dbData);
}



module.exports.getAcademicExchangesByQuery=function(req,res){
    var page=1,size=10,type=1,month=(new Date().getMonth()+1);
    if(req.params.page){
        page=parseInt(req.params.page);
    }
    if(req.params.size){
        size=parseInt(req.params.size);
    }
    if(req.params.type){
        type=parseInt(req.params.type);
    }
    if(req.params.month){
        month=parseInt(req.params.month);
    }
    var start= (page-1)*size;

    var dbData={
        count:"select count(id) num  from academic_exchange   where month(publishTime)= ? ",
        arg:[month],
        res:res,
        time:"publishTime",
        sel:[month,start,size],
        select:"  SELECT * FROM academic_exchange  where month(publishTime)= ?  ORDER BY publishTime DESC LIMIT ?, ?  "
    }
    DBUtil.getExampleByQuery(dbData)
}
module.exports.getAcademicExchangeInfoById=function(req,res){
    var dbData={
        sql:"select * from  academic_exchange where id =? ",
        arg:[req.params.id],
        time:"publishTime",
        res:res
    }
    DBUtil.selectById(dbData)
}
