import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const BREMEN = () => {
    return(
        <div>
            <Up/>
            <Club name = "BREMEN" genre = "밴드" location = "학생회관 401호" boss = "최희원" src = "BREMEN.png" information = "BREMEN은 포항공대 밴드동아리로 락, 어쿠스틱, 재즈, 펑크 등 장르를 가리지 않고 다양한 음악을 즐기는 동아리 입니다. 매 학기 정기공연과 축제에서 공연을 진행하고 새터, 포카전에서 치어로와 함께 치어로밴드로써 응원무대도 준비하고 있습니다. 정해진 파트 제한없이 공연을 할 수 있으며 악기를 다루지 못해도 동아리에 들어와서 배울 수 있습니다."></Club>
            <Down/>
        </div>
    );
}



export default BREMEN;