import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import ClatarImg from './img/CLATAR.jpg'
const CLATAR = () => {
    return(
        <div>
            <Up/>
            <Club name = "CLATAR" genre = "클래식 기타" location = "학생회관 412호" boss = "신재현" src = {ClatarImg} information = "CLATAR는 포스텍 유일의 클래식 기타 동아리입니다. 매년 정기공연과 내부연주회 등의 행사를 진행하며 매 주 정기모임을 열어 부원들이 함께 연습하는 시간을 갖고 있습니다. 상시 부원을 모집하고 있으며, 기타를 전혀 쳐보지 않은 사람이라도 언제든지 들어오셔서 배워나갈 수 있습니다."></Club>
            <Down/>
        </div>
    );
}



export default CLATAR;