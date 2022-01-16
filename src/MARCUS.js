import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import MarcusImg from './img/MARCUS.png'
const MARCUS = () => {
    return(
        <div>
            <Up/>
            <Club name = "MARCUS" genre = "수학 세미나" location = "학생회관 103-1호" boss = "전민수" src = {MarcusImg} information = "MARCUS는 포스텍 수학 세미나 동아리입니다. 금요일에 열리는 수학과 학부생 세미나를 수학과 학술부와 함께 주관하는 것이 주요 활동입니다. 파릇파릇 1학년들을 수학에 관심을 가지게 하고, 다른 학부생들에게도 수학의 흥미로움을 알리기 위해 재미있는 세미나를 구성하고자 노력하고 있습니다. 또한 내부 스터디, RC 튜터링, 포스테키안 글 게재, 수학동아 코너 담당 등의 활동을 하고 있습니다. 수학을 좋아하는 여러분 모두를 환영해요!"></Club>
            <Down/>
        </div>
    );
}



export default MARCUS;