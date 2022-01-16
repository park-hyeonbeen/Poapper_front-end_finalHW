import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import BgmImg from './img/BGM.png'
const BGM = () => {
    return(
        <div>
            <Up/>
            <Club name = "BGM(Board Game Master)" genre = "보드게임" location = "학생회관 205호" boss = "최현준" src = {BgmImg} information = "BGM은 보드게임의 즐거움을 공유하기 위해 만들어진 동아리입니다. 평일 저녁이나 주말 등 여유로운 시간에 모여서 보드게임을 플레이하는 것이 주요 활동입니다. 동아리 내에 수십 종류의 보드게임이 구비되어 있으며, 동아리원들의 신청을 받아 새로운 보드게임들을 구입하고 있습니다. 보드게임을 즐기고 싶은 분들은 언제든지 찾아주세요!"></Club>
            <Down/>
        </div>
    );
}



export default BGM;