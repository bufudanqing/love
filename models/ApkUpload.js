var formidable = require('formidable');
var fs=require('fs');
var qr=require('qr-image');
var images=require('images');
module.exports.fileUpload=function(req,res){
    var ip_port=req.headers.host;
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.keepExtensions = true;
    form.parse(req, function(err, fields, files) {
        if (err) {
            console.error('图片写入错误: ' + err.stack);
            return ;
        }
        var size=files.img.size+'kb';
        var  filename = files.img.name;
        var newPath = fields.baseUrl + filename ;
        fs.renameSync(files.img.path, newPath);
        var imgUrl=fields.baseUrl.substring(6);
        var apkurl="http://"+ip_port+imgUrl+filename;
        createQr(apkurl,filename,res,req,size);
    });
}
function addWater(sourceImg, waterImg, callback){
images(sourceImg).size(800).draw(images(waterImg), 320, 320).save(sourceImg,{quality : 10});
    callback(sourceImg);
}
function createQr(url,imgName,res,req,size){
    var qr_png=qr.image(url,{type:"png",size:6});
    var _imgName='public/apk/img/'+imgName+'.png';
    var qr_pipe = qr_png.pipe(fs.createWriteStream(_imgName));
    qr_pipe.on("error",function(err){
        console.info(err);
        res.end();
        return false;
    });
    qr_pipe.on("finish",function(){
        var path=_imgName.substring(6);
        addWater("public"+path,'public/apk/water/syxa.png',function(lastput){
            var src="http://"+req.headers.host+lastput.substring(6);
            res.json({src:src,url:url,size:size});
            res.end();
        })
    });
}
