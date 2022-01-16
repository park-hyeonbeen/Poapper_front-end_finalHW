import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import GonggamImg from './img/Gonggam.jpg'
const GongGam = () => {
    return(
        <div>
            <Up/>
            <Club name = "교지편집위원회<공감>" location = "학생회관 214-5호" boss = "김형진" src = {GonggamImg} information = "교지편집위원회는 교내 언론기구 중 하나로, 매 학기 교지 “공감”을 발행하여 학교 내외의 소식을 전달합니다. 교지 공감은 학내 사안, 학외 사안, 그리고 학교 구성원이 출품한 공모전으로 구성되어 매 학기 1번 느린 언론으로서의 소식을 전합니다."></Club>
            <Down/>
        </div>
    );
}



export default GongGam;