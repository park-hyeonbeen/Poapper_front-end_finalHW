import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Logo1 from './Logo1';
const PlaceReserve = () => {
    return(
        <div>
            <Up/>
            <div className = "Places">
                <Logo1 src = "StuHall.jpg" title = "학생회관" eng = "Student Hall"></Logo1>
                <Logo1 src = "JigokHall.jpg" title = "지곡회관" eng = "Ji-gok Community Center"></Logo1>
                <Logo1 src = "Dormitory.jpg" title = "생활관 외" eng = "Dormitory,etc."></Logo1>
            </div>
            <Down/>
        </div>
    );
}



export default PlaceReserve;