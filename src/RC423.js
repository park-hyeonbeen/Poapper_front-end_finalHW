import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import Rc423Img from './img/RC423.png'
const RC423 = () => {
    return(
        <div>
            <Up/>
            <Club name = "RC423" genre = "항공우주" location = "학생회관 103-2호" boss = "장환중" src = {Rc423Img} information = "RC423은 포스텍 유일의 항공우주동아리입니다. RC423에서는 3D 프린팅을 활용하여 로켓을 제작하여 연소실험을 진행하거나 부원들이 가지고 있는 항공우주 관련 주제들을 토대로 프로젝트를 진행해 최종 결과물을 만들어내는 활동을 하고 있습니다. 항공우주 분야에 관심을 가지고 있는 모든 분을 환영합니다!"></Club>
            <Down/>
        </div>
    );
}



export default RC423;