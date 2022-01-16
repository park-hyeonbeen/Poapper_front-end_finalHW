import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import SarmturImg from './img/SARMTUR.png'
const SARMTUR = () => {
    return(
        <div>
            <Up/>
            <Club name = "삶터" genre = "사물놀이" location = "학생회관 229호" boss = "문유인" src = {SarmturImg} information = "삶터는 사물놀이 동아리입니다. 해맞이한마당, 할로윈 행사 등 한 학기에 1번정도 공연을 진행합니다. 공연이 절정에 이를 때의 강력한 카타르시스를 느끼고 싶으신 분들, 소규모 동아리의 끈끈한 관계가 부러우신 분들, 대학에 와서 새로운 경험을 해보고 싶으신 분들 모두 환영합니다."></Club>
            <Down/>
        </div>
    );
}



export default SARMTUR;