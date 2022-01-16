import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const BLUEPEANUTS = () => {
    return(
        <div>
            <Up/>
            <Club name = "Blue Peanuts(블루피너츠)" genre = "Jazz&POP" location = "학생회관 206호" boss = "윤건" src = "BLUEPEANUTS.png" information = "Blue Peanuts는 POSTECH POP&JAZZ Band로 함께 모여 합주와 즉흥 연주로 Jazz를 즐기는 동아리입니다. Clazz, Jam DAY, Halloween Party, 새터 및 축제, 정기 공연 등 다양한 공연을 진행하며, 악기와 상관없이 상시 모집합니다."></Club>
            <Down/>
        </div>
    );
}



export default BLUEPEANUTS;  