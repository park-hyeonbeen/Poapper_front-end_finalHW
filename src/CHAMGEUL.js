import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const CHAMGEUL = () => {
    return(
        <div>
            <Up/>
            <Club name = "참글" genre = "서예 및 캘리그라피" location = "학생회관 202호" boss = "조성은" src = "CHAMGEUL.png" information = "참글은 서예 및 캘리그라피 동아리입니다. 매주 정기모임에서 쓰고 싶은 글귀를 자유롭게 쓰는 활동을 하고 있으며, 매 학기 말 정기모임에서 만든 작품을 전시합니다. 서예와 캘리그라피는 접해본 적이 없어도, 누구든지 자유롭게 동아리에 가입하여 가볍게 시작할 수 있는 취미이며 바쁜 일상 속 함께 글씨를 쓰며 힐링하는 시간을 가질 수 있습니다. 부원은 상시 모집 중이므로 글씨를 쓰는 것에 관심 있으신 분들은 언제든지 연락해주세요."></Club>
            <Down/>
        </div>
    );
}



export default CHAMGEUL;