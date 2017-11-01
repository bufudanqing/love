import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
    $(document).ajaxStart(() => {
      NavbarActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        NavbarActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    let searchQuery = this.state.searchQuery.trim();

    if (searchQuery) {
      NavbarActions.findCharacter({
        searchQuery: searchQuery,
        searchForm: this.refs.searchForm,
        history: this.props.history
      });
    }
  }

  render() {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <Link to='/home' className='navbar-brand'>
            <span className={'triangles animated ' + this.state.ajaxAnimationClass}>
              <div className='tri invert'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
            </span>
            Dmisec
          </Link>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>数元信安 <span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li className='dropdown-submenu'>
                  <Link to='#'>列表</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/syxa/news-consult/list'>新闻资讯</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='#'>添加</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/syxa/news-consult/add'>新闻资讯</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>培训基地 <span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li className='dropdown-submenu'>
                  <Link to='#'>列表</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/pxjd/master-team/list'>名师团队</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='#'>添加</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/pxjd/master-team/add'>名师团队</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>研究中心 <span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li className='dropdown-submenu'>
                  <Link to='#'>列表</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/yjzx/research-team/list'>研究团队</Link></li>
                    <li><Link to='/yjzx/research-project/list'>研究项目</Link></li>
                    <li className='dropdown-submenu'>
                      <Link to='#'>研究成果</Link>
                      <ul className='dropdown-menu'>
                        <li><Link to='/yjzx/research-result/list/1'>专利</Link></li>
                        <li><Link to='/yjzx/research-result/list/2'>软著</Link></li>
                        <li><Link to='/yjzx/research-result/list/3'>获奖</Link></li>
                        <li><Link to='/yjzx/research-result/list/4'>项目</Link></li>
                        <li><Link to='/yjzx/research-result/list/5'>论文</Link></li>
                      </ul>
                    </li>
                    <li><Link to='/yjzx/academic-exchange/list'>学术交流</Link></li>
                    <li><Link to='/yjzx/feed-back/list'>意见反馈</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='#'>添加</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/yjzx/research-team/add'>研究团队</Link></li>
                    <li><Link to='/yjzx/research-project/add'>研究项目</Link></li>
                    <li><Link to='/yjzx/research-result/add'>研究成果</Link></li>
                    <li><Link to='/yjzx/academic-exchange/add'>学术交流</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>展板 <span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li className='dropdown-submenu'>
                  <Link to='#'>列表</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/syxa/spread/list/1'>数元信安</Link></li>
                    <li><Link to='/syxa/spread/list/2'>培训基地</Link></li>
                    <li><Link to='/syxa/spread/list/3'>研究中心</Link></li>
                  </ul>
                </li>
                <li>
                <Link to='/syxa/spread/add/'>添加</Link>
                </li>
              </ul>
            </li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>应用包<span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li >
                  <Link to='/apk/list'>列表</Link>
                </li>
                <li>
                  <Link to='/apk/add'>添加</Link>
                </li>
              </ul>
            </li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>流程<span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li >
                  <Link to='/flow/list'>列表</Link>
                </li>
                <li>
                  <Link to='/flow/add'>添加</Link>
                </li>
              </ul>
            </li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>文件<span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li >
                  <Link to='/document/list'>列表</Link>
                </li>
                <li>
                  <Link to='/document/add'>添加</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;