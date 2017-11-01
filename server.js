require('babel-register');
var ueditor = require('ueditor-nodejs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var async = require('async');
var colors = require('colors');
var mongoose = require('mongoose');
var request = require('request');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var swig  = require('swig');
var xml2js = require('xml2js');
var _ = require('underscore');
var config = require('./config');
var routes = require('./app/routes');
var urlUtil = require('./models/UrlUtil');
var NewsConsult=require('./models/NewsConsult');
var FileUpload=require('./models/FileUpload');
var Spread=require('./models/Spread');
var MasterTeam=require('./models/MasterTeam');
var ResearchTeam=require('./models/ResearchTeam');
var ResearchProject=require('./models/ResearchProject');
var ResearchResult=require('./models/ResearchResult');
var AcademicExchange=require('./models/AcademicExchange');
var FeedBack=require('./models/FeedBack');
var ApkUpload=require('./models/ApkUpload');
var Apk=require('./models/Apk');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var Filter=require('./models/Filter');
var Flow=require('./models/Flow');
var Document=require('./models/Document');
var SafetyUtil=require("./models/SafetyUtil");
var WebSocket=require("./models/WebSocket");
var app = express();
app.set('port', process.env.PORT || config.port);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/ueditor/ue', ueditor({
    configFile: '/ueditor/php/config.json',
    mode: 'local',
    accessKey: '',
    secrectKey: '',
    staticPath: path.join(__dirname, 'public'),
    dynamicPath: function(req){
        return "/img/resource";
    }
}));
app.use(cookieParser());
app.use(session({
    secret: Math.random().toString(36).substr(2),
    cookie: { maxAge: 10 * 1000 }
}));
app.post('/login', function(req, res, next) {
  var  info=req.body;
  if(info.name==="root" && info.pwd==="123456"){
      res.json({success:true});
      req.session.sign=true;
  }else{
      res.json({success:false});
  }
  res.end();
});
app.get('/error', function(req, res, next) {
    Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
         var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
         var page = swig.renderFile('views/index.html', { html: html });
         res.status(200).send(page);
    });
});
app.post('/syxa/news-consult/addNewsConsult', function(req, res, next) {
        NewsConsult.addNewsConsult(req,res);
});
app.post('/syxa/news-consult/editNewsConsult', function(req, res, next) {
    NewsConsult.editNewsConsult(req,res);
});

app.get('/syxa/news-consult/getNewsConsult/:id/:sign/:timestamp', function(req, res, next) {
    SafetyUtil.checkAPI(req,res);
    NewsConsult.getNewsConsultById(req,res)
});
app.get('/syxa/news-consult/getNewsConsults/:start/:size/:sign/:timestamp', function(req, res, next) {
    SafetyUtil.checkAPI(req,res);
    NewsConsult.getNewsConsults(req,res)
});
app.get('/syxa/news-consult/delNewsConsult/:id/:sign/:timestamp', function(req, res, next) {
    SafetyUtil.checkAPI(req,res);
    NewsConsult.delNewsConsult(req,res)
});
app.post("/fileUpload/add",function(req,res,next){
    FileUpload.fileUpload(req,res)
});
app.post("/apkUpload/add",function(req,res,next){
    ApkUpload.fileUpload(req,res)
});
app.post("/apk/add",function(req,res,next){
    Apk.addApk(req,res)
});
app.get("/apk/list/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    Apk.getApks(req,res)
});
app.post("/spread/add",function(req,res,next){
    Spread.addSpread(req,res)
});
app.get("/spread/list/:type/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    Spread.getSpreadsByType(req,res)
});
app.post("/pxjd/master-team/addMasterTeam",function(req,res,next){
    MasterTeam.addMasterTeam(req,res)
});
app.post("/yjzx/research-team/addResearchTeam",function(req,res,next){
    ResearchTeam.addResearchTeam(req,res)
});
app.post("/yjzx/research-project/addResearchProject",function(req,res,next){
    ResearchProject.addResearchProject(req,res)
});
app.post("/yjzx/research-result/addResearchResult",function(req,res,next){
    ResearchResult.addResearchResult(req,res)
});
app.post("/pxjd/academic-exchange/addAcademicExchange",function(req,res,next){
    AcademicExchange.addAcademicExchange(req,res)
});
app.get("/yjzx/feed-back/getFeedBacks/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    FeedBack.getFeedBacks(req,res)
});
app.get("/yjzx/feed-back/delFeedBacks/:id/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    FeedBack.delFeedBack(req,res)
});
app.get("/yjzx/feed-back/getFeedBack/:id/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    FeedBack.getFeedBack(req,res)
});
app.get("/yjzx/academic-exchange/getAcademicExchanges/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    AcademicExchange.getAcademicExchanges(req,res)
});
app.get("/yjzx/academic-exchange/delAcademicExchange/:id/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    AcademicExchange.delAcademicExchange(req,res)
});
app.get("/yjzx/academic-exchange/getAcademicExchange/:id/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    AcademicExchange.getAcademicExchange(req,res)
});
app.post("/pxjd/academic-exchange/editAcademicExchange",function(req,res,next){
    AcademicExchange.editAcademicExchange(req,res)
});
app.get("/yjzx/research-result/getResearchResults/:type/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    ResearchResult.getResearchResults(req,res)
});
app.get("/yjzx/research-result/delResearchResult/:id/:type/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    ResearchResult.delResearchResult(req,res)
});
app.get("/yjzx/research-result/getResearchResult/:id/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    ResearchResult.getResearchResult(req,res)
});
app.post("/yjzx/research-result/editResearchResult",function(req,res,next){
    ResearchResult.editResearchResult(req,res)
});

app.get("/yjzx/research-project/getResearchProjects/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    ResearchProject.getResearchProjects(req,res)
});
app.get("/yjzx/research-project/delResearchProject/:id/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    ResearchProject.delResearchProject(req,res)
});
app.get("/yjzx/research-project/getResearchProject/:id/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    ResearchProject.getResearchProject(req,res)
});
app.post("/yjzx/research-project/editResearchProject",function(req,res,next){
    ResearchProject.editResearchProject(req,res)
});

app.get("/yjzx/research-team/getResearchTeams/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    ResearchTeam.getResearchTeams(req,res)
});
app.get("/yjzx/research-team/delResearchTeam/:id/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    ResearchTeam.delResearchTeam(req,res)
});
app.get("/pxjd/research-team/getResearchTeam/:id/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    ResearchTeam.getResearchTeam(req,res)
});
app.post("/yjzx/research-team/editResearchTeam",function(req,res,next){
    ResearchTeam.editResearchTeam(req,res)
});

app.get("/pxjd/master-team/getMasterTeams/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    MasterTeam.getMasterTeams(req,res)
});
app.get("/pxjd/master-team/delMasterTeam/:id/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    MasterTeam.delMasterTeam(req,res)
});
app.get("/pxjd/master-team/getMasterTeam/:id/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    MasterTeam.getMasterTeam(req,res)
});
app.post("/pxjd/master-team/editMasterTeam",function(req,res,next){
    MasterTeam.editMasterTeam(req,res)
});
app.post("/flow/addFlow",function(req,res,next){
    Flow.addFlow(req,res)
});
app.post("/document/add",function(req,res,next){
    Document.addDocument(req,res)
});
app.get("/flow/getFlows/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    Flow.getFlows(req,res)
});
app.get("/flow/getFlow/:id/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    Flow.getFlow(req,res)
});
app.post("/flow/editFlow",function(req,res,next){
    Flow.editFlow(req,res)
});
app.get("/flow/delFlow/:id/:sign/:timestamp",function(req,res,next){
    SafetyUtil.checkAPI(req,res);
    Flow.delFlow(req,res)
});


//官网后台接口 新闻
app.get('/syxa/news-consult/:level/:type/:page/:size', function(req,res){
    urlUtil.setResHeader(res);
    NewsConsult.getNewsConsultsByQuery(req,res);
});
//官网后台接口  明细
app.get('/syxa/news-consult/:id', function(req,res){
    urlUtil.setResHeader(res);
    NewsConsult.getNewsConsultInfoById(req,res);
});

//研究团队

app.get('/yjzx/research_team/:type/:page/:size', function(req,res){
    urlUtil.setResHeader(res);
    ResearchTeam.getResearchTeamsByQuery(req,res);
});
app.get('/yjzx/research_team/:id', function(req,res){
    urlUtil.setResHeader(res);
    ResearchTeam.getResearchTeamInfoById(req,res);
});
//研究项目
app.get('/yjzx/research_project/:page/:size', function(req,res){
    urlUtil.setResHeader(res);
    ResearchProject.getResearchProjectsByQuery(req,res);
});
app.get('/yjzx/research_project/:id', function(req,res){
    urlUtil.setResHeader(res);
    ResearchProject.getResearchProjectInfoById(req,res);
});
//研究成果
app.get('/yjzx/research_result/:type/:page/:size', function(req,res){
    urlUtil.setResHeader(res);
    ResearchResult.getResearchResultsByQuery(req,res);
});
app.get('/yjzx/research_result/:id', function(req,res){
    urlUtil.setResHeader(res);
    ResearchResult.getResearchResultInfoById(req,res);
});
//学术交流
app.get('/yjzx/academic_exchange/:month/:page/:size', function(req,res){
    urlUtil.setResHeader(res);
    AcademicExchange.getAcademicExchangesByQuery(req,res);
});
app.get('/yjzx/academic_exchange/:id', function(req,res){
    urlUtil.setResHeader(res);
    AcademicExchange.getAcademicExchangeInfoById(req,res);
});
//培训基地
app.get('/pxjd/master_team/:page/:size', function(req,res){
    urlUtil.setResHeader(res);
    MasterTeam.getMasterTeamsByQuery(req,res);
});
app.get('/pxjd/master_team/:id', function(req,res){
    urlUtil.setResHeader(res);
    MasterTeam.getMasterTeamInfoById(req,res);
});

//轮播图

app.get('/spread/:type/:page/:size', function(req,res){
    urlUtil.setResHeader(res);
    Spread.getSpreadsByQuery(req,res);
});

//用户反馈


app.post('/feedback', function(req,res){
    urlUtil.setResHeader(res);
    FeedBack.addFeedBack(req,res);
});
//获取apk下载
app.get("/apk/lists",function(req,res){
    urlUtil.setResHeader(res);
    Apk.getApk(req,res)
});
//获取流程
app.get("/flow/getFlows",function(req,res){
    urlUtil.setResHeader(res);
    Flow.getFlowList(req,res)
});
//获取文档
app.get("/document/getDocuments",function(req,res){
    urlUtil.setResHeader(res);
    Document.getDocuments(req,res)
});

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
        res.redirect("/error");
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
       if( renderProps.routes[1].path==="/login"){
           var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
           var page = swig.renderFile('views/index.html', { html: html });
           res.status(200).send(page);
       }else{
           if(renderProps.routes[1].path !=="/error"){
               if(req.session.sign){
                   var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
                   var page = swig.renderFile('views/index.html', { html: html });
                   res.status(200).send(page);
               }else {
                   res.redirect("/login");
               }
           }else{
               res.redirect("/error");
           }

       }
    } else {
        res.redirect("/error");
    }
  });
});
app.use(function(err, req, res, next) {
  console.log(err.stack.red);
  res.status(err.status || 500);
    res.redirect("/error");
  //res.send({ message: err.message });
});
WebSocket.websocket();
var server = require('http').createServer(app);
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
