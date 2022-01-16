import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import KickoffImg from './img/KICKOFF.jpg'
const KICKOFF = () => {
    return(
        <div>
            <Up/>
            <Club name = "KICKOFF" genre = "풋살" location = "blank" boss = "김한결" src = {KickoffImg} information = "킥오프는 풋살부터 축구까지 아우르는 포스텍의 풋살 동아리입니다. 매주 2회 정기훈련을 진행하며 타 대학과의 교류전, 킥오프배 풋살대회 등도 진행하고 있습니다. 선배들의 코칭과 체계적인 훈련 프로그램을 통해 실력 향상을 돕고 있으며, 모두가 즐겁게 공을 찰 수 있는 화목한 분위기가 조성되어 있다고 자부합니다. 킥오프는 열정이 있는 여러분 모두를 환영합니다!"></Club>
            <Down/>
        </div>
    );
}



export default KICKOFF;