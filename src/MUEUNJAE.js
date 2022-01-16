import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const MUEUNJAE = () => {
    return(
        <div>
            <Up/>
            <Club name = "무은재학생회 비상대책위원회" location = "학생회관 109호" boss = "김태민" src = "Mueunjae.png" information = "무은재학생회는 총학생회 산하 자치기구로 무은재학부생들을 대표하는 유일한 기구입니다. 무은재학부생이란 학교에 입학하여 학과를 결정하기 전까지 속해있는 무은재학부의 학부생들을 뜻합니다. 본 학생회는 무은재학부생들의 권익 증진 및 복지를 위해 노력하고 학생들의 의견을 전달하는 역할을 맡고 있습니다."></Club>
            <Down/>
        </div>
    );
}



export default MUEUNJAE;