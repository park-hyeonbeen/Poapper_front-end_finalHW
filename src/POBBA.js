import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import PobbaImg from './img/POBBA.png'
const POBBA = () => {
    return(
        <div>
            <Up/>
            <Club name = "POBBA" genre = "농구" location = "체육관 147호" boss = "이재윤" src = {PobbaImg} information = "POBBA는 함께 농구하며 친목을 다지는 동아리입니다. 주 2회 정기 훈련을 하고 있고 탄탄한 실력을 바탕으로 포카전 승리, 스타디움 우승, 금오기 준우승 등 여러 대회를 휩쓸고 있습니다. 또한, 신입생 농구대회, 포바배 농구대회, 과대항 농구대회를 비롯한 여러 대회를 개최 및 진행하고 있습니다. 특히 포바배 농구대회는 이승준, 이동준, 한준혁 등의 스타"></Club>
            <Down/>
        </div>
    );
}



export default POBBA;