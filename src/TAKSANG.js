import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const TAKSANG = () => {
    return(
        <div>
            <Up/>
            <Club name = "탁상공론" genre = "탁구" location = "체육관 105호, 106호" boss = "신승호" src = "TAKSANG.png" information = "탁상공론은 POSTECH의 탁구 동아리입니다. 매주 목요일 9시 30분 정기 모임을 통해 연습 및 자체전을 진행합니다. 또한 타 학교와의 교류전 및 STADIUM에 참여하기도 합니다. 탁구에 관심이 있으신 여러분 모두를 환영합니다."></Club>
            <Down/>
        </div>
    );
}



export default TAKSANG;