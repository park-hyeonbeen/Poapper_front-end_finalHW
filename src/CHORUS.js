import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import ChorusImg from './img/CHORUS.png'
const CHORUS = () => {
    return(
        <div>
            <Up/>
            <Club name = "코러스" genre = "합창" location = "학생회관 308호" boss = "나재현" src = {ChorusImg} information = "아름다운 화음(Chorus)을 함께 만들어 나가는 코러스는 포스텍 유일 합창부입니다. 한학기에 한번 공연을 진행하고 있습니다. 주 1회 전문 성악가 선생님의 지도를 받으며 같이 공연 준비를 하고 주 1회 파트 연습을 진행하며 곡이해 및 친목을 다집니다. 가요 가곡 아카펠라 등 자신이 원하는 다양한 장르의 음악을 도전할 수 있습니다. 단원과 반주자를 오디션"></Club>
            <Down/>
        </div>
    );
}



export default CHORUS;