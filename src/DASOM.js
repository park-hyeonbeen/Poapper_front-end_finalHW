import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import DasomImg from './img/Dasom.png'
const DASOM = () => {
    return(
        <div>
            <Up/>
            <Club name = "다솜" genre = "봉사동아리" location = "학생회관 207호" boss = "송석빈" src = {DasomImg} information = "다솜은 포스텍 유일의 봉사 동아리입니다. 장애인 복지관, 지역 아동 센터, 청소년 수련관, 사회복지센터 등 다양한 곳들과 연계하여 봉사를 진행하고 있습니다. 또한 1학기에는 동아리원들이 빙수를 만들어 판매하고 그 수익을 센터에 기부합니다. 2학기에는 겨울방학 캠프를 준비하여 중학생 아이들을 대상으로 겨울 방학에 캠프를 진행합니다."></Club>
            <Down/>
        </div>
    );
}



export default DASOM;