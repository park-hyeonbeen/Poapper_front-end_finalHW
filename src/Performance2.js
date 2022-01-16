import React from 'react';
import Up from "./Up"
import { useNavigate } from 'react-router-dom';
import './main.css'
import Down from "./Down"
import Logo4 from './Logo4';
const Performance2 = () => {
    let navigate = useNavigate();
    return(
        <div>
            <Up/>
            <div className = "Performance1s">
                <div onClick = {()=>navigate('/club/introduce/performance2/UMCHI')}><Logo4 src = "UMCHI.png" title = "음치" eng = "아카펠라"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/performance2/GUITARHANA')}><Logo4 src = "GUITARHANA.png" title = "기타하나" eng = "어쿠스틱 통기타"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/performance2/VOCES')}><Logo4 src = "VOCES.jpg" title = "VOCES" eng = "발라드, R&B"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/performance2/P-FUNK')}><Logo4 src = "P-FUNK.jpg" title = "P-FUNK" eng = "힙합"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/performance2/GTLOVE')}><Logo4 src = "GTLOVE.jpg" title = "GT LOVE" eng = "버스킹"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/performance2/CLATAR')}><Logo4 src = "CLATAR.jpg" title = "CLATAR" eng = "클래식 기타"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/performance2/BLUEPEANUTS')}><Logo4 src = "BLUEPEANUTS.jpg" title = "Blue Peanuts(블루피너츠)" eng = "Jazz & POP"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/performance2/BREMEN')}><Logo4 src = "BREMEN.png" title = "BREMEN" eng = "밴드"></Logo4></div>
            </div>
            <Down/>
        </div>
    );
}



export default Performance2;