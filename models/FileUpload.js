var formidable = require('formidable');
var fs=require('fs');
module.exports.fileUpload=function(req,res){
    var ip_port=req.headers.host;
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.keepExtensions = true;
    form.maxFieldsSize = 2 * 1024 * 1024;
    form.parse(req, function(err, fields, files) {
        if (err) {
            console.error('图片写入错误: ' + err.stack);
            return ;
        }
        var  filename = files.img.name;
        var newPath = fields.baseUrl + filename ;
        fs.renameSync(files.img.path, newPath);
        var imgUrl=fields.baseUrl.substring(6);
        res.json({src:"http://"+ip_port+imgUrl+filename,size:files.img.size+'kb'});
        res.end();
    });
}