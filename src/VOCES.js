import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const VOCES = () => {
    return(
        <div>
            <Up/>
            <Club name = "VOCES" genre = "발라드,R&B" location = "학생회관 404호" boss = "윤현서" src = "VOCES.png" information = "VOCES는 포스텍 유일의 발라드, R&B 동아리로 오직 보컬만 있는 동아리입니다! 매년 새터, 축제, 정기공연 등 교내에서 공연을 진행하며 매주 정모를 진행합니다. 선배들과 팀을 이루어 공연 준비를 하며 쉽고 재밌게 노래를 배울 수 있습니다."></Club>
            <Down/>
        </div>
    );
}



export default VOCES;