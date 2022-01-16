import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const CenterExecution = () => {
    return(
        <div>
            <Up/>
            <Club name = "중앙집행위원회" location = "학생회관 214-1호" boss = "blank" src = "CenterExecution.png" information = "중앙집행위원회는 포항공과대학교 총학생회 산하 최고 집행기구입니다. 총학생회장단의 공약을 실행해 나가고 학교생활에 즐거움을 더해주는 행사들을 진행합니다. 학우분들이 더 편리하게 생활하기 위한 복지를 기획하기도 합니다. 또한 총학생회 산하기구의 재정 및 문서를 중앙관리합니다."></Club>
            <Down/>
        </div>
    );
}



export default CenterExecution;