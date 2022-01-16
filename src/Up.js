import React from 'react';
import {useNavigate} from 'react-router-dom'
import Accordian1 from './Accordian1'
import Accordian2 from './Accordian2'
import Accordian3 from './Accordian3'
import Accordian4 from './Accordian4'
import './main.css'
const Up = () => {
    let navigate = useNavigate();
    return(
        <div>
            <div className = "Top">
                <div className = "HomeLogo" onClick = {()=>navigate('/')}>POPO<br/>Postechian's Portal</div>                
                <div><Accordian1 title = "장소/장비 예약"/></div>
                <div><Accordian2 title = "총학생회"/></div>                
                <div><Accordian3 title = "동아리"/></div>
                <div><Accordian4 title = "생활백서"/></div>
                <div onClick = {()=>navigate('/login')}className = "Login">로그인</div>
                <img className = "Earth" src = "earth.png" alt = ""/>
        </div>
        </div>
    );
}



export default Up;