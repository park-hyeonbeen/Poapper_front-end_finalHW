import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import PfunkImg from './img/P-FUNK.jpg'
const PFUNK = () => {
    return(
        <div>
            <Up/>
            <Club name = "P-FUNK" genre = "힙합" location = "학생회관 408호" boss = "이동민" src = {PfunkImg} information = "P-FUNK는 포스텍의 유일한 힙합동아리입니다. 래퍼, 보컬, 프로듀서, DJ로 구성되며 힙합을 좋아하는 누구나 즐겁게 활동할 수 있는 동아리입니다. 정기공연과 클럽공연을 비롯하여 1년에 8번 내외의 공연 기회가 있으며, 매 학기 오디션을 통해 동아리원을 선발하고 있습니다. 공연 활동 외에도 동아리원들의 자체적인 음악 창작 활동이 이루어지고 있습니다."></Club>
            <Down/>
        </div>
    );
}



export default PFUNK;