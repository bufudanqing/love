import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import Index from './components/Index';
import Home from './components/Home';
import Login from './components/Login';
import Error from './components/Error';
import AddNewsConsult from './components/AddNewsConsult';
import NewsConsult from './components/NewsConsult';
import NewsConsultList from './components/NewsConsultList';
import EditNewsConsult from './components/EditNewsConsult';
import AddMasterTeam from './components/AddMasterTeam';
import MasterTeamList from './components/MasterTeamList';
import MasterTeam from './components/MasterTeam';
import EditMasterTeam from './components/EditMasterTeam';
import AddResearchTeam from './components/AddResearchTeam';
import ResearchTeamList from './components/ResearchTeamList';
import EditResearchResult from './components/EditResearchResult';
import ResearchTeam from './components/ResearchTeam';
import EditResearchTeam from './components/EditResearchTeam';
import AddResearchProject from './components/AddResearchProject';
import ResearchProjectList from './components/ResearchProjectList';
import EditResearchProject from './components/EditResearchProject';
import ResearchProject from './components/ResearchProject';
import AddResearchResult from './components/AddResearchResult';
import ResearchResultList from './components/ResearchResultList';
import ResearchResult from './components/ResearchResult';
import AddAcademicExchange from './components/AddAcademicExchange';
import AcademicExchangeList from './components/AcademicExchangeList';
import EditAcademicExchange from './components/EditAcademicExchange';
import AcademicExchange from './components/AcademicExchange';
import SpreadList from './components/SpreadList';
import FeedBackList from './components/FeedBackList';
import FeedBack from './components/FeedBack';
import AddSpread from './components/AddSpread';
import Apk from './components/Apk';
import ApkList from './components/ApkList';
import AddFlow from './components/AddFlow';
import FlowList from './components/FlowList';
import Flow from './components/Flow';
import EditFlow from './components/EditFlow';
import AddDocument from './components/AddDocument';
export default (
  <Route component={App}>
    <IndexRoute component={Login}/>
    <Route path="/login" component={Login}/>
    <Route path="/error" component={Error}/>
    <Route component={Index}>
    <Route path='/home' component={Home} />
    <Route path='/syxa/news-consult/add' component={AddNewsConsult} />
    <Route path='/syxa/news-consult/list' component={NewsConsultList} />
    <Route path='/syxa/news-consult/getNewsConsult/:id' component={NewsConsult} />
    <Route path='/syxa/news-consult/editNewsConsult/:id' component={EditNewsConsult} />
    <Route path='/pxjd/master-team/add' component={AddMasterTeam} />
    <Route path='/pxjd/master-team/list' component={MasterTeamList} />
    <Route path='/pxjd/master-team/editMasterTeam/:id' component={EditMasterTeam} />
    <Route path='/pxjd/master-team/getMasterTeam/:id' component={MasterTeam} />
    <Route path='/yjzx/research-team/add' component={AddResearchTeam} />
    <Route path='/yjzx/research-team/list' component={ResearchTeamList} />
    <Route path='/yjzx/research-team/editResearchTeam/:id' component={EditResearchTeam} />
    <Route path='/yjzx/research-team/getResearchTeam/:id' component={ResearchTeam} />
    <Route path='/yjzx/research-project/add' component={AddResearchProject} />
    <Route path='/yjzx/research-project/list' component={ResearchProjectList} />
    <Route path='/yjzx/research-project/getResearchProject/:id' component={ResearchProject} />
    <Route path='/syxa/news-project/editNewsProject/:id' component={EditResearchProject} />
    <Route path='/yjzx/research-result/add' component={AddResearchResult} />
    <Route path='/yjzx/research-result/list/:type' component={ResearchResultList} />
    <Route path='/yjzx/research-result/getResearchResult/:id' component={ResearchResult} />
    <Route path='/yjzx/research-result/editresearchResult/:id' component={EditResearchResult} />
    <Route path='/yjzx/academic-exchange/add' component={AddAcademicExchange} />
    <Route path='/yjzx/academic-exchange/list' component={AcademicExchangeList} />
    <Route path='/yjzx/academic-exchange/getAcademicExchange/:id' component={AcademicExchange} />
    <Route path='/syxa/academic-exchange/editAcademicExchange/:id' component={EditAcademicExchange} />
    <Route path='/yjzx/feed-back/list' component={FeedBackList} />
    <Route path='/yjzx/feed-book/getFeedBack/:id' component={FeedBack} />
    <Route path='/syxa/spread/add' component={AddSpread} />
    <Route path='/syxa/spread/list/:type' component={SpreadList} />
    <Route path='/apk/add' component={Apk} />
    <Route path='/apk/list' component={ApkList} />
    <Route path='/flow/add' component={AddFlow} />
    <Route path='/flow/list' component={FlowList} />
    <Route path='/flow/getFlow/:id' component={Flow} />
    <Route path='/flow/editFlow/:id' component={EditFlow} />
    <Route path='/document/add' component={AddDocument} />
    </Route>
  </Route>
);
