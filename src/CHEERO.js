import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import CheeroImg from './img/CHEERO.jpg'
const CHEERO = () => {
    return(
        <div>
            <Up/>
            <Club name = "Cheero" genre = "응원단" location = "학생회관 403호" boss = "주의손" src = {CheeroImg} information = "치어로는 포항공과대학교의 응원동아리로, 포스텍-카이스트 학생대제전에서 학생들의 응원 참여를 유도해 학생들의 애교심 양성을 목적으로 활동한다. 학교의 주요 행사인 새내기 새로 배움터, 이공계 학과 대탐험, 해맞이 한마당, 포스텍–카이스트 대제전에 참여하게 된다."></Club>
            <Down/>
        </div>
    );
}



export default CHEERO;