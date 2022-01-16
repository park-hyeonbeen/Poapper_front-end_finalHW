import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import LightsunsetImg from './img/LIGHTSUNSET.jpg'
const LIGHTSUNSET = () => {
    return(
        <div>
            <Up/>
            <Club name = "빛노을" genre = "사진" location = "학생회관 203호" boss = "박태우" src = {LightsunsetImg} information = "빛노을은 사진동아리로, 함께 사진을 찍고 감상, 전시하는 활동을 합니다. 주1회 정기모임을 하고 있으며, 한학기에 한번 이상의 전시회를 열고, 포항 근처로 출사를 갑니다. 카메라가 없어도 사진에 관심만 있다면 누구든지 환영합니다!"></Club>
            <Down/>
        </div>
    );
}



export default LIGHTSUNSET;