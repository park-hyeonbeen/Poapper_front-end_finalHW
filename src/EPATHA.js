import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import EpathaImg from './img/Epatha.png'
const EPATHA = () => {
    return(
        <div>
            <Up/>
            <Club name = "에파타" genre = "카톨릭" location = "학생회관 223호" boss = "이아현" src = {EpathaImg} information = "포스텍 유일의 천주교 동아리 에파타입니다! 주요한 활동은 개강, 종강 미사와 매주 함께 효자성당에서 미사에 참여하는 것입니다. 또 부활절 달걀 나눔 행사, 동방 꾸미기 행사, 적십자사 헌혈 도우미 행사, 묵주 만들기 등을 진행합니다. 함께 신앙활동을 하고 싶거나 천주교에 관심있으신 분들 부담갖지 마시고 지원해주세요! 궁금한 사항은 회장에게 문의부탁드립니다!"></Club>
            <Down/>
        </div>
    );
}



export default EPATHA;