import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const PBS = () => {
    return(
        <div>
            <Up/>
            <Club name = "방송국<PBS>" location = "학생회관 303호" boss = "권민재" src = "PBS.png" information = "PBS는 총학생회 산하 언론기구로교내 창조적 여론 형성을 및 정보 전달을 위해 활동합니다. 보도부, 편성제작부, 아나운서부 총 3개 부서로 이루어져 있으며 방송 기획출연연출촬영편집에 흥미가 있다면, PBS의 2020년도 수습국원이 될 자격이 충분합니다! PBS는 여러분을 기다립니다!"></Club>
            <Down/>
        </div>
    );
}



export default PBS;