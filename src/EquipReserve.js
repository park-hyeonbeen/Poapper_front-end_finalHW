import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Logo1 from './Logo1';
import ScuImg from './img/SCU.png'
import DuImg from './img/DU.png'
import CacImg from './img/CAC.jpg'

const EquipReserve = () => {
    return(
        <div>
            <Up/>
            <div className = "Equips">
                <Logo1 src = {ScuImg} title = "동아리연합회" eng = "Student Club Union"></Logo1>
                <Logo1 src = {DuImg} title = "생활관자치회" eng = "Dormitory Union"></Logo1>
                <Logo1 src = {CacImg} title = "생각나눔" eng = "Committee Advisory Council"></Logo1>
            </div>
            <Down/>
        </div>
    );
}



export default EquipReserve;