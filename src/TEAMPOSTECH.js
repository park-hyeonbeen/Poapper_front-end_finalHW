import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import TeampostechImg from './img/TEAMPOSTECH.jpg'
const TEAMPOSTECH = () => {
    return(
        <div>
            <Up/>
            <Club name = "TEAM POSTECH" genre = "주짓수" location = "blank" boss = "현승현" src = {TeampostechImg} information = "Team Postech은 포스텍 주짓수 동아리입니다. 매주 2~3번의 훈련을 수행하고 있고, 포항 주짓수 도장과 연계하여 승급식, 대회 등을 진행하고 있습니다. 동아리원을 상시 모집하고 있으니 무술을 연마하고 싶으신 분, 스스로 몸을 지키고 싶으신 분, 운동을 통해 강해지고 싶으신 분 등 어떤 목적이든 함께 운동하고 싶으신 분들은 누구나 환영합니다."></Club>
            <Down/>
        </div>
    );
}



export default TEAMPOSTECH;