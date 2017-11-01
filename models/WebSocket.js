var ws = require("nodejs-websocket");
var total='';
var game1 = null,game2 = null , game1Ready = false , game2Ready = false;
module.exports.websocket=function(){
    var server = ws.createServer(function(conn){
        conn.on("text", function (str) {
            total +=formatDate(new Date())+'\n'+str+'\n';
            if(str==="game1"){
                game1 = conn;
                game1Ready = true;
                conn.sendText("success");
            }
            if(str==="game2"){
                game2 = conn;

                game2Ready = true;
                conn.sendText("success");
            }

            if(game1Ready&&game2Ready){
                game2.sendText(total);
                game1.sendText(total);
            }

            conn.sendText(total)
        })
        conn.on("close", function (code, reason) {
            //console.log("关闭连接")
        });
        conn.on("error", function (code, reason) {
            //console.log("异常关闭")
        });
    }).listen(8888);
}

setInterval(function(total){
total='';
},60000);
 function formatDate(dataTime){
    var Y,M,D,h,m,s;
    if(!dataTime){
        return ;
    }
    Y= dataTime.getFullYear() + '.';
    M = (dataTime.getMonth()+1 < 10 ? (dataTime.getMonth()+1) : dataTime.getMonth()+1) + '.';
    D = dataTime.getDate() + ' ';
    h = dataTime.getHours() + ':';
    m = dataTime.getMinutes() + ':';
    s = dataTime.getSeconds();
    return Y+M+D+h+m+s;
}