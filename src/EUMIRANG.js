import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import EumirangImg from './img/EUMIRANG.png'
const EUMIRANG = () => {
    return(
        <div>
            <Up/>
            <Club name = "음이랑" genre = "음악 감상/칵테일" location = "학생회관 410호" boss = "우병주" src = {EumirangImg} information = "음이랑은 포스텍의 음악 감상/칵테일 동아리입니다. 매주 수요일마다 음악감상실에서 정기모임을 진행하며, 다양한 장르의 음악을 듣고 감상을 나누는 음악 세미나 활동과 칵테일을 소개하는 칵테일 세미나 활동을 진행하고 있습니다. 음악/칵테일을 사랑하는 여러분 모두를 환영합니다!"></Club>
            <Down/>
        </div>
    );
}



export default EUMIRANG;