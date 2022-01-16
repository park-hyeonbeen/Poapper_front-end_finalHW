import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const POSCAT = () => {
    return(
        <div>
            <Up/>
            <Club name = "POSCAT" genre = "알고리즘 및 AI" location = "학생회관 214-6호" boss = "정윤성" src = "POSCAT.png" information = "POSCAT은 알고리즘 및 AI를 공부하는 동아리입니다. 여름, 겨울의 합숙 세미나를 통해 알고리즘을 통한 문제해결 능력을 향상하고, ACM-ICPC 등의 대회에 참가합니다. AI 스터디 역시 진행하며, 포카전 AI 게임 등을 맡고 있습니다. 입부를 희망한다면 3월 시험을 통과하거나, 여름 합숙 세미나에 참여하면 됩니다. 같이 공부하고 싶다면 모두 환영입니다."></Club>
            <Down/>
        </div>
    );
}



export default POSCAT;