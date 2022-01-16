import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import PassingImg from './img/PASSING.png'
const PASSING = () => {
    return(
        <div>
            <Up/>
            <Club name = "PASSING" genre = "테니스" location = "체육관 146호" boss = "이건호" src = {PassingImg} information = "PASSING은 POSTECH 개교 이후 지속되어 온 테니스 동아리입니다. 주 매주 화목 9시반부터 12시까지 정기 모임이 있으며 자유롭게 참여하시면 됩니다. 매 학기 PASSING배와 현은배 대회를 진행하고 있으며 타 대학과의 교류전 및 친목도모 활동도 진행하고 있습니다. 테니스를 배워보고 싶었던 분들은 PASSING에 가입하셔서 함께 즐겁게 운동을 즐기시"></Club>
            <Down/>
        </div>
    );
}



export default PASSING;