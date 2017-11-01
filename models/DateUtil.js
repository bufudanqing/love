module.exports.formatDate=function (dataTime){
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