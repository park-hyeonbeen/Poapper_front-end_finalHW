import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import HanulimImg from './img/HANULIM.png'
const HANULIM = () => {
    return(
        <div>
            <Up/>
            <Club name = "한울림" genre = "클래식" location = "학생회관 306호" boss = "윤병준" src = {HanulimImg} information = "한울림은 교내 유일의 클래식 악기 연주 동아리로, 악기를 배우고 함께 연주하며 음악적 이해를 계발하고 친목을 도모합니다. 주요 행사인 축제에서의 Clazz, 정기공연, 그 외 소규모 공연 등을 통해 학내 문화 발전에 기여하고 있습니다. 회원은 악기 연주 경험과 관계 없이 상시 모집합니다."></Club>
            <Down/>
        </div>
    );
}



export default HANULIM;