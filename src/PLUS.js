import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const PLUS = () => {
    return(
        <div>
            <Up/>
            <Club name = "PLUS" genre = "컴퓨터 보안" location = "학생회관 102호" boss = "양승원" src = "PLUS.png" information = "PLUS는 시스템, 네트워크, 암호 등 다양한 분야에서의 보안을 공부하는 동아리입니다. 동아리 세미나와 대회(CTF) 참가를 중심으로 활동하고 있습니다. 매년 1학기에 입부 문제를 모아 놓은 사이트에서의 성과와 면접을 바탕으로 부원을 선발합니다. 선발과정에서는 해킹/보안에 관한 열정과 스스로 공부할 수 있는 능력을 평가합니다."></Club>
            <Down/>
        </div>
    );
}



export default PLUS;