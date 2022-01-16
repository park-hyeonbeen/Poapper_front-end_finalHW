import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club'
import ModamImg from './img/Modam.png'
const MODAM = () => {
    return(
        <div>
            <Up/>
            <Club name = "학생·소수자인권위원회<모담>" location = "학생회관 213호" boss = "심미석" src = {ModamImg} information = "포항공과대학교 학생·소수자인권위원회 모담은 총학생회 산하 전문기구로 ‘모두를 담습니다. 모두와 함께 이야기합니다.’라는 슬로건으로, 학우들의 인권의식 고취를 위하여 캠페인, 인권주간과 같은 행사를 개최합니다. 또한 인권 문제 신고가 접수될 경우, 상황을 파악하여 사과 요청이나 공론화 등 적절한 조치를 취합니다."></Club>
            <Down/>
        </div>
    );
}



export default MODAM;