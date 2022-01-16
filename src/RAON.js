import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club'
import RaonImg from './img/Raon.png'
const RAON = () => {
    return(
        <div>
            <Up/>
            <Club name = "도서관자치위원회<라온>" location = "박태준학술정보관 5층" boss = "김동형" src = {RaonImg} information = "도서관 자치위원회 '라온‘은 ‘즐거운’이란 뜻의 순우리말입니다. 라온은 도서관과 학생을 잇는 다리가 되어 서로의 소통을 도우며, 학생이 주체가 되어 도서관을 개선하고, 우리 학교만의 우수한 도서관 문화를 형성해 모두가 즐거운 도서관을 만드는데 목적을 두고 있습니다."></Club>
            <Down/>
        </div>
    );
}



export default RAON;