import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const ADLIB = () => {
    return(
        <div>
            <Up/>
            <Club name = "ADLIB" genre = "연극" location = "학생회관 233호" boss = "진영서" src = "ADLIB.png" information = "ADLIB은 포스텍 유일 연극 동아리입니다! 신입 부원들을 위한 워크샵부터 본격적인 정기 공연까지 다양한 연극 활동을 진행하고 있습니다. 연극에 관심 있는 사람이라면 누구나 함께할 수 있습니다 :)"></Club>
            <Down/>
        </div>
    );
}



export default ADLIB;