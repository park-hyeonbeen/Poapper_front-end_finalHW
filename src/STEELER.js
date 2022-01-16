import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import SteelerImg from './img/STEELER.jpg'
const STEELER = () => {
    return(
        <div>
            <Up/>
            <Club name = "STEELER" genre = "밴드" location = "대강당 지하 1층" boss = "홍석윤" src = "STEELER.png" information = "STEELER는 포스텍의 밴드 동아리입니다. 매학기 다섯팀이 넘는 밴드들이 블루스, 발라드, 하드락, 펑크, 메탈, 프로그레시브 등 다양한 장르를 해내고 있습니다. 매학기 학교 행사를 위한 공연을 준비하며 누구든 자유롭게 동아리원들과 밴드를 구성하여 정기공연에서 공연할 수 있습니다. 음악에 대한 열정만 가지고 있다면 누구든지 환영합니다."></Club>
            <Down/>
        </div>
    );
}



export default STEELER;