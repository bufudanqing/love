module.exports.authorize=function(req,res,next){
    console.info(req.session.sign)
   if(!req.session.sign){
       res.redirect("/error");
   }else{
       next();
   }
}