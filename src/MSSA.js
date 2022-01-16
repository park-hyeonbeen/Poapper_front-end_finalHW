import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const MSSA = () => {
    return(
        <div>
            <Up/>
            <Club name = "MSSA" genre = "경영전략연구회" location = "학생회관 101호" boss = "조민" src = "MSSA.png" information = "MSSA는 포스텍 경영전략연구회로 '열정 있는 리더들의 네트워크'라는 슬로건을 비전 삼아 세계를 이끄는 비즈니스 리더가 되는 것을 목표하는 사람들이 모인 동아리입니다. 초기엔 경영컨설팅에 초점을 맞춰 활동했으나 최근에는 창업이나 금융 등 다양한 분야에 관심 있는 사람들이 많아짐에따라 활동 범위를 넓혀가고 있습니다."></Club>
            <Down/>
        </div>
    );
}



export default MSSA;