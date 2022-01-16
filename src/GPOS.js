import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import GposImg from './img/G-POS.png'
const GPOS = () => {
    return(
        <div>
            <Up/>
            <Club name = "G-POS" genre = "게임 개발" location = "학생회관 411호" boss = "진시완" src = {GposImg} information = "Gpos는 포스텍 게임 개발 동아리로써 학기 중에는 스터디를 통해 게임을 개발할 수 있는 능력을 키우고, 여름과 겨울 방학 기간에 합숙을 진행해 집중적으로 게임을 제작하고 있습니다. 또한 저희 동아리는 Nexon Dream Members의 일원으로써 동아리에서 개발한 게임들을 정기적으로 넥슨에 발표하고 있습니다. 게임 개발에 대해 더 자세히 배우고 싶거나 관심 있으신 분은 누구든지 환영입니다."></Club>
            <Down/>
        </div>
    );
}



export default GPOS;