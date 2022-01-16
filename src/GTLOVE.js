import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import GtloveImg from './img/GTLOVE.jpg'
const GTLOVE = () => {
    return(
        <div>
            <Up/>
            <Club name = "GT LOVE" genre = "버스킹" location = "학생회관 402호" boss = "이민재" src = {GtloveImg} information = "GT LOVE는 여러분의 학교 생활의 기분 좋은 활력소가 될 버스킹 동아리입니다! 피아노, 기타, 베이스, 드럼, 보컬 등 음악을 좋아하는 사람들이 모여 멋진 공연을 만들어가는 동아리입니다. 매 학기 오디션 없이 부원을 모집하고 멘토링이 체계적으로 운영되기 때문에 악기를 연주하고 싶다는 마음만으로 누구나 들어와 원하는 악기를 자유롭게 배울 수 있어요!"></Club>
            <Down/>
        </div>
    );
}



export default GTLOVE;