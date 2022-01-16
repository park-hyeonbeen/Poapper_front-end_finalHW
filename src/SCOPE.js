import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club'
import ScopeImg from './img/Scope.jpg'
const SCOPE = () => {
    return(
        <div>
            <Up/>
            <Club name = "학생교육위원회<SCOPE>" location = "학생회관 106호" boss = "김경원" src = {ScopeImg} information = "학교 교육 현안들의 논의 및 심도 있는 연구를 통해, 좀 더 나은 POSTECH 교육 환경을 만들기 위해 노력하는 단체입니다. POSTECH에 들어오신 여러분께 공부란, 교육이란 그 무엇보다 중요한 가치일 것입니다. 저희 학생교육위원회에서는 그러한 가치를 직접 가꾸고, 지켜나가고 있습니다. 이러한 가치를 함께 지켜나갈 패기 있는 신입생들을 기다리겠습니다."></Club>
            <Down/>
        </div>
    );
}



export default SCOPE;