import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Logo1 from './Logo1';
import StuhallImg from './img/StuHall.jpg'
import JigokhallImg from './img/jigokHall.jpg'
import DormitoryImg from './img/Dormitory.jpg'
const PlaceReserve = () => {
    return(
        <div>
            <Up/>
            <div className = "Places">
                <Logo1 src = {StuhallImg} title = "학생회관" eng = "Student Hall"></Logo1>
                <Logo1 src = {JigokhallImg} title = "지곡회관" eng = "Ji-gok Community Center"></Logo1>
                <Logo1 src = {DormitoryImg} title = "생활관 외" eng = "Dormitory,etc."></Logo1>
            </div>
            <Down/>
        </div>
    );
}



export default PlaceReserve;