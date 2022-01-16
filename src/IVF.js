import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const IVF = () => {
    return(
        <div>
            <Up/>
            <Club name = "IVF" genre = "한국기독학생회" location = "학생회관 227호" boss = "장서현" src = "IVF.png" information = "IVF는 '캠퍼스와 세상 속'에서 크리스천으로서 어떻게 살아가야 할지에 대해 함께 고민하는 동아리입니다! 초신자에서부터 모태신앙까지 다양한 학생들로 구성되어 있고, 신앙적인 측면뿐만 아니라 학교 생활에 관해서도 많은 도움을 얻을 수 있는 곳 입니다. 대학생활 가운데서 하나님을 향한 마음을 유지하고 싶고, 하나님을 새롭게 알아가고 싶은 모두를 환영합니다♥"></Club>
            <Down/>
        </div>
    );
}



export default IVF;