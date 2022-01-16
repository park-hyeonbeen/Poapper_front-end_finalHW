import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import ElevenImg from './img/ELEVEN.png'
const ELEVEN = () => {
    return(
        <div>
            <Up/>
            <Club name = "ELEVEN" genre = "축구" location = "대운동장" boss = "최영빈" src = {ElevenImg} information = "실력에 관계없이 열한명이 하나되는 동아리 일레븐에서 즐겁게 축구합시다!"></Club>
            <Down/>
        </div>
    );
}



export default ELEVEN;