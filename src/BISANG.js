import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const BISANG = () => {
    return(
        <div>
            <Up/>
            <Club name = "총여학생회<비상>" location = "학생회관 202호" boss = "김종은" src = "BISANG.png" information = "총여학생회는 본교 여학생들을 회원으로 하는 자치기구로 교내에서 여성이 소수자라는 이유로 겪는 어려움에 가장 먼저 반응하고 행동하며 교내 구성원들의 성 평등한 인식 함양을 위해 다양한 기회를 제공하는 단체입니다. 총여학생회 집행위원회는 존재 의의를 실현할 수 있는 여학생체육활동활성화사업, 여성인권함양캠페인 등의 사업을 진행하고 있습니다."></Club>
            <Down/>
        </div>
    );
}



export default BISANG;  