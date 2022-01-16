import React from 'react';
import Up from "./Up"
import { useNavigate } from 'react-router-dom';
import './main.css'
import Down from "./Down"
import Logo4 from './Logo4';
import CccImg from './img/CCC.png'
import EpathaImg from './img/Epatha.png'
import DasomImg from './img/Dasom.png'
import SfcImg from './img/SFC.jpg'
import NavigatorImg from './img/NAVIGATOR.jpg'
import IvfImg from './img/IVF.png'

const SocietyAndReligion = () => {
    let navigate = useNavigate();
    return(
        <div>
            <Up/>
            <div className = "Performance1s">
                <div onClick = {()=>navigate('/club/introduce/societyAndReligion/CCC')}><Logo4 src = {CccImg} title = "CCC" eng = "한국 대학생 선교회"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/societyAndReligion/EPATHA')}><Logo4 src = {EpathaImg} title = "에파타" eng = "카톨릭"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/societyAndReligion/DASOM')}><Logo4 src = {DasomImg} title = "다솜" eng = "봉사동아리"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/societyAndReligion/SFC')}><Logo4 src = {SfcImg} title = "SFC" eng = "기독교 동아리"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/societyAndReligion/NAVIGATOR')}><Logo4 src = {NavigatorImg} title = "NAVIGATOR" eng = "종교동아리"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/societyAndReligion/IVF')}><Logo4 src = {IvfImg} title = "IVF" eng = "한국기독학생회"></Logo4></div>
            </div>
            <Down/>
        </div>
    );
}



export default SocietyAndReligion;