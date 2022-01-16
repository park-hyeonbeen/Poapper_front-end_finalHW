import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const POWERON = () => {
    return(
        <div>
            <Up/>
            <Club name = "POWER-ON" genre = "메이커" location = "학생회관 104호, 105호" boss = "정주환" src = "POWERON.png" information = "POWER-ON은 일상 속 소소한 도구부터 평소에 관심 있던 분야에 대한 연구까지 함께하는 메이커 동아리입니다. 다양한 분야의 로봇 개발을 주제로 활동하며, 동아리 내 연간 작품 전시회와 메이커 대회 참가, 특허 및 제어 관련 논문 출편을 목표로 하고 있습니다. 모집 시 별다른 선발 과정이 없으며, 저희 활동에 관심이 있으신 모든 신입생 분들을 환영합니다!"></Club>
            <Down/>
        </div>
    );
}



export default POWERON;