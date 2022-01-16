import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const SGNN = () => {
    return(
        <div>
            <Up/>
            <Club name = "행사지원위원회<생각나눔>" location = "학생회관 108호" boss = "이지선" src = "SGNN.png" information = "포스텍 총학생회 산하 행사준비위원회를 대표, 지원하는 단체 생각나눔입니다. 저희는 행사 준비위원회 구성, 준비위원회 지원, 행사 개선 및 발전을 위한 연구 및 데이터베이스 구축 등을 주요한 활동으로 진행합니다."></Club>
            <Down/>
        </div>
    );
}



export default SGNN;