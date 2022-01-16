import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const POAPPER = () => {
    return(
        <div>
            <Up/>
            <Club name = "PoApper" genre = "개발" location = "학생회관 211호" boss = "윤효정" src = "POAPPER.png" information = "PoApper는 함께 최신 개발 기술을 익히고 공유하며 성장하는 개발 동아리입니다. 데이터 플랫폼을 개발해 POSTECH의 데이터를 수집하며, 개발 세미나와 해커톤 등을 개최하여 POSTECH의 개발 문화를 이끌고 있습니다."></Club>
            <Down/>
        </div>
    );
}



export default POAPPER;