import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
const Login = () => {
    return(
        <div>
            <Up/>
            <div className = "LoginBody">
                <form className = "Loginform">
                    <div style = {{marginTop: '20px'}}>아이디</div>
                    <input className = "Write"></input>
                    <div style = {{marginTop: '15px'}}>비밀번호</div>
                    <input className = "Write"></input>
                    <div></div>
                    <button className = "LoginButton">로그인</button>
                    <div className = "Find">
                    <div className = "FindContent">아이디 찾기</div>
                    <div className = "FindContent">비밀번호 찾기</div>
                    <div className = "FindContent" style = {{borderWidth: '0px 0px 0px 0px'}}>회원가입</div>
                </div>
                </form>
            </div>
            <Down/>
        </div>
    );
}



export default Login;