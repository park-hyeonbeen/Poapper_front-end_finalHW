import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const SFC = () => {
    return(
        <div>
            <Up/>
            <Club name = "SFC" genre = "기독교 동아리" location = "학생회관 231호" boss = "조예은" src = "SFC.png" information = "SFC는 Student For Christ의 약자로 하나님 나라를 꿈꾸는 학생들의 동아리입니다. SFC에서는 같은 신앙을 고백하는 선배들과 함께 말씀을 배우고 나누며 하나님을 알아갑니다. 바쁜 일상 속에서도 신앙을 지키고 싶은 분, 기독교 동아리가 궁금하신 분들 모두 환영합니다!"></Club>
            <Down/>
        </div>
    );
}



export default SFC;