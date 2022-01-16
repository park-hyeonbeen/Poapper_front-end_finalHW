import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const TACHYONS = () => {
    return(
        <div>
            <Up/>
            <Club name = "TACHYONS" genre = "야구" location = "blank" boss = "황태연" src = "TACHYONS.png" information = "TACHYONS는 교내 유일 야구동아리입니다. 금요일이나 토요일 자체훈련이 진행됩니다. 또한, 포항 시리그 3부에 등록 되어 있어, 2주에 한 번 정도 다른 야구팀과 경기를 하게됩니다. 이 밖에 포카전, 스타디움, 교류전 등 원한다면 야구에 흠뻑 빠질 수 있을 것입니다. 야구에 관심 있는 사람이라면 누구나 언제든지 환영합니다!"></Club>
            <Down/>
        </div>
    );
}



export default TACHYONS;