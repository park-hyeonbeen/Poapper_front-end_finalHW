import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import ManiaImg from './img/MANIA.jpg'
const MANIA = () => {
    return(
        <div>
            <Up/>
            <Club name = "MANIA" genre = "만화·애니메이션" location = "학생회관 214-4호" boss = "최정현" src = {ManiaImg} information = "MANIA는 포스텍 유일의 만화·애니메이션 동아리로, 서브컬쳐 전반에 대한 창작, 감상, 향유를 목적으로 합니다. 대외적으로는 전시회, 상영회, 내부에서는 일본어/그림 스터디, 코스프레 등의 자유롭고 다양한 활동이 이루어지고 있습니다. 다른 사람들과 함께 즐거운 취미 활동을 하고 싶으신 분들은 누구나 환영합니다!"></Club>
            <Down/>
        </div>
    );
}



export default MANIA;