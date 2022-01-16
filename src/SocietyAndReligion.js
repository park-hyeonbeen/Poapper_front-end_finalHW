import React from 'react';
import Up from "./Up"
import { useNavigate } from 'react-router-dom';
import './main.css'
import Down from "./Down"
import Logo4 from './Logo4';
const SocietyAndReligion = () => {
    let navigate = useNavigate();
    return(
        <div>
            <Up/>
            <div className = "Performance1s">
                <div onClick = {()=>navigate('/club/introduce/societyAndReligion/CCC')}><Logo4 src = "CCC.png" title = "CCC" eng = "한국 대학생 선교회"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/societyAndReligion/EPATHA')}><Logo4 src = "EPATHA.png" title = "에파타" eng = "카톨릭"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/societyAndReligion/DASOM')}><Logo4 src = "DASOM.png" title = "다솜" eng = "봉사동아리"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/societyAndReligion/SFC')}><Logo4 src = "SFC.jpg" title = "SFC" eng = "기독교 동아리"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/societyAndReligion/NAVIGATOR')}><Logo4 src = "NAVIGATOR.jpg" title = "NAVIGATOR" eng = "종교동아리"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/societyAndReligion/IVF')}><Logo4 src = "IVF.png" title = "IVF" eng = "한국기독학생회"></Logo4></div>
            </div>
            <Down/>
        </div>
    );
}



export default SocietyAndReligion;