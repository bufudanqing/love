import React from 'react';
import {Link} from 'react-router';
class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    loginSubmit() {
        $.ajax(
            { url: '/login',
              method:"POST",
              async:false,
              data:{
                  name:$("#loginName").val(),
                  pwd:$("#loginPwd").val()
              }
            })
            .done((data) => {
            if(data.success){
                $("#goHome").click();
            }
            })
            .fail((data) => {
            });
    }
    render() {
        var style={
            'width':'30%',   
            'marginLeft':'auto',
            'marginRight':'auto'
        }
        var fromtop={
            'marginTop':'100px'
        }
        return (
            <div className="container" id="login" style={style}>
                <header>
                    <h1 className="text-center">数元信安 </h1>
                        <h4 className="text-center">后台</h4>
                </header>
                <form id="login-form" style={fromtop}>
                    <div className="form-group" style={{width:"100%"}} >
                        <label>用户名</label>
                        <input type="text"   className="form-control" placeholder="用户名" id="loginName" required />
                    </div>
                    <div className="form-group" style={{width:"100%"}}>
                        <label>密码</label>
                        <input type="password" className="form-control" placeholder="密码" id="loginPwd" required />
                    </div>
                    <button type="submit"  className="btn btn-default" onClick={this.loginSubmit}>登录</button>
                </form>
                <Link to={'/home'}>
                    <div id="goHome"></div>
                </Link>
            </div>
        );
    }
}

export default Login;