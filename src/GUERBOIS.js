import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const GUERBOIS = () => {
    return(
        <div>
            <Up/>
            <Club name = "게르브와" genre = "그림예술" location = "학생회관 217호" boss = "김계윤" src = "GUERBOIS.png" information = "포스텍 유일 그림예술동아리 게르브와로 당신을 초대합니다. 게르브와는 소묘, 아크릴, 유화, 수채화 등의 회화와 그래피티, 디자인, 그래픽까지 자유로운 개인의 작품활동을 지원하는 최고의 예술힐링동아리입니다. 일주일에 한 번 동방에서 정모를 가져 그림스터디, 작품활동 등을 진행하고 정모가 아닌 시간에도 언제든지 동방에 와서 자신의 예술세계를 맘껏 펼칠 수 있습니다."></Club>
            <Down/>
        </div>
    );
}



export default GUERBOIS;