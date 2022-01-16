import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const SCU = () => {
    return(
        <div>
            <Up/>
            <Club name = "동아리연합회" location = "학생회관 301호" boss = "남수헌" src = "SCU.png" information = "동아리연합회는 교내 동아리들을 총괄하고 동아리 활동을 지원하는 단체입니다. 스피커나 믹서 같은 대형 장비를 관리 및 대여하고, 동아리대표자 회의 개회 및 교내 축제 지원과 동아리 지원금을 관리합니다. 매년 10월 31일에는 할로윈 행사를 개최하여 동아리와 교내 구성원이 화합할 수 있도록 합니다."></Club>
            <Down/>
        </div>
    );
}



export default SCU;