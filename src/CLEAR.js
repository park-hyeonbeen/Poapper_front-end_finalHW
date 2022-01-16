import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import ClearImg from './img/CLEAR.png'
const CLEAR = () => {
    return(
        <div>
            <Up/>
            <Club name = "Clear(클리어)" genre = "배드민턴" location = "체육관 142호" boss = "하재현" src = {ClearImg} information = "클리어는 체육분과 최대 인원을 자랑하는 명문 배드민턴 동아리입니다. 매주 목요일, 토요일 오후 10시부터 2시간 동안 정기모임을 진행하고 있습니다. 저희 클리어는 매주 경기 결과를 바탕으로 하는 랭크제도를 운영하고 있어, 실력에 상관없이 누구나 즐겁게 배드민턴을 칠 수 있습니다. 또한, 매학기 1회 또는 2회 경기 결과 및 출석을 바탕으로 수만원 상당의 상"></Club>
            <Down/>
        </div>
    );
}



export default CLEAR;