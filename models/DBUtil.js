var mysql      = require('mysql');
var config     =require("../config");
var SafetyUtil =require("./SafetyUtil");
var DateUtil =require("./DateUtil");
//创建操作数据库的工具类
var connection  = mysql.createConnection({
    host            : config.host,
    user            : config.user,
    password        : config.password,
    database        : config.database
});
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
});

//新增数据
module.exports.save=function(args){
    if(!args){
        return false
    }
    connection.query(args.sql,args.arg,
        function (error, results, fields) {
            if(error){
                console.error('error query: ' + error.stack);
                return ;
            }
            args.res.json({message:"信息添加成功!",code:200});
            args.res.end();
        }
    );
}
//根据指定的id获取数据
module.exports.selectById=function(args){
    if(!args){
        return false
    }
    connection.query(args.sql,args.arg,
        function (error, results, fields) {
            if(error){
                console.error('error query: ' + error.stack);
                return ;
            }
            args.res.send(SafetyUtil.toBase64(results));
            args.res.end();
        }
    );
}
//获取数据
module.exports.list=function(args){
    if(!args){
        return false;
    }
    connection.query(args.countsql,
        function (error, results, fields) {
            if(error){
                console.error('error query: ' + error.stack);
                return ;
            }
            args.total=results[0].total;
            connection.query(args.sql,args.arg,
                function (error, results, fields) {
                    if(error){
                        console.error('error query: ' + error.stack);
                        return ;
                    }
                    args.res.send(SafetyUtil.toBase64({total:args.total,data:results}));
                    args.res.end();
                }
            );
        }
    );
}
//删除数据
module.exports.delById=function(args){
    if(!args){
        return false;
    }
    connection.query(args.delete,args.arg,
        function (error, results, fields) {
            if(error){
                console.error('error query: ' + error.stack);
                return ;
            }
            connection.query(args.select,args.sel,function(err,result,field){
                args.res.send(SafetyUtil.toBase64({data:result}));
                args.res.end();
            });
        }
    );
}

module.exports.edit=function(args){
    if(!args){
        return false;
    }
    connection.query(args.sql,args.arg,
        function (error, results, fields) {
            if(error){
                console.error('error query: ' + error.stack);
                return ;
            }
            args.res.json(results);
            args.res.end();
        }
    );
}

//获取团队信息  TODO 该方法需要优化
module.exports.get_research_team=function(args){
    if(!args){
        return false
    }
    var sql=" SELECT COUNT(id) num from research_team WHERE type= ?  ";
    connection.query(sql,[args.type],
        function (error, results, fields) {
            if(error){
                console.error('error query: ' + error.stack);
                return ;
            }
            args.count=results[0].num;
        })
    var sql=" SELECT * FROM research_team where type like ? ORDER BY id LIMIT ? ,10  ";
    connection.query(sql,[args.type,args.start],
        function (error, results, fields) {
            if(error){
                console.error('error query: ' + error.stack);
                return ;
            }
            args.res.json({count:args.count,data:results,success:true,code:200});
            args.res.end();

        }
    );
}



module.exports.getExampleByQuery=function(args){
    connection.query(args.count,args.arg,
        function (error, results, fields) {
            if(error){
                console.error('error query: ' + error.stack);
                return ;
            }
            args.count=results[0].num;
            connection.query(args.select,args.sel,function(e,r,f){
                if(e){
                    console.error('error query: ' + e.stack);
                    return ;
                }
                r.forEach(function(it,ind,ar){
                    it[args.time]=DateUtil.formatDate(it[args.time]);
                    ar[ind]=it;
                })
                args.res.send({count:args.count,data:r,success:true,code:200});
                args.res.end()

            });

        }
    );
}

module.exports.selectById2=function(args){
    if(!args){
        return false
    }
    connection.query(args.sql,args.arg,
        function (error, results, fields) {
            if(error){
                console.error('error query: ' + error.stack);
                return ;
            }
            results[0][args.time]=DateUtil.formatDate(results[0][args.time]);
            args.res.json(results);
            args.res.end();
        }
    );
}

module.exports.lists=function(args){
    if(!args){
        return false;
    }
    connection.query(args.countsql,
        function (error, results, fields) {
            if(error){
                console.error('error query: ' + error.stack);
                return ;
            }
            args.total=results[0].total;
            connection.query(args.sql,args.arg,
                function (error, results, fields) {
                    if(error){
                        console.error('error query: ' + error.stack);
                        return ;
                    }
                    args.res.json({total:args.total,data:results});
                    args.res.end();
                }
            );
        }
    );
}

module.exports.getFlowList=function(args){
    if(!args){
        return false;
    }
    connection.query(args.countsql,
        function (error, results, fields) {
            if(error){
                console.error('error query: ' + error.stack);
                return ;
            }
            args.total=results[0].total;
            connection.query(args.sql,args.arg,
                function (error, results, fields) {
                    if(error){
                        console.error('error query: ' + error.stack);
                        return ;
                    }
                    args.res.send({total:args.total,data:results});
                    args.res.end();
                }
            );
        }
    );
}



module.exports.getDocumentList=function(args){
    if(!args){
        return false;
    }
    connection.query(args.countsql,
        function (error, results, fields) {
            if(error){
                console.error('error query: ' + error.stack);
                return ;
            }
            args.total=results[0].total;
            connection.query(args.sql,args.arg,
                function (error, results, fields) {
                    if(error){
                        console.error('error query: ' + error.stack);
                        return ;
                    }
                    args.res.send({total:args.total,data:results});
                    args.res.end();
                }
            );
        }
    );
}