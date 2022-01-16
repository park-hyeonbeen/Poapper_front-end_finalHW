import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import UmchiImg from './img/UMCHI.png'
const UMCHI = () => {
    return(
        <div>
            <Up/>
            <Club name = "음치" genre = "아카펠라" location = "학생회관 413호" boss = "김관호" src = {UmchiImg} information = "음치는 포스텍 유일의 아카펠라 동아리입니다. 아카펠라는 사람의 목소리로만 구성하는 음악으로 베이스, 바리톤, 테너, 알토, 소프라노, 퍼커션이 함께 무대를 구성하게 됩니다. 학기마다 정기공연, 새터 공연 등 많은 공연을 하게 되며, 노래를 좋아하는 사람들이라면 언제든지 지원하시면 됩니다."></Club>
            <Down/>
        </div>
    );
}



export default UMCHI;