import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import CccImg from './img/CCC.png'
const CCC = () => {
    return(
        <div>
            <Up/>
            <Club name = "CCC" genre = "한국 대학생 선교회" location = "학생회관 225호" boss = "전상혁" src = {CccImg} information = "CCC는 Movements Everywhere라는 목표 아래에 예수님이 누구인지 알아가고 한 사람의 제자로 성장하여 다른 사람들을 제자의 길로 이끌어 주는 활동을 하고 있습니다. 캠퍼스모임은 화요일 오후 9시 지구채플(예배)는 금요일 오후 7시에 육거리 PICC에서 진행합니다. 부원은 상시모집합니다."></Club>
            <Down/>
        </div>
    );
}



export default CCC;