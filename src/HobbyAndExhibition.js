import React from 'react';
import Up from "./Up"
import { useNavigate } from 'react-router-dom';
import './main.css'
import Down from "./Down"
import Logo4 from './Logo4';
const HobbyAndExhibition = () => {
    let navigate = useNavigate();
    return(
        <div>
            <Up/>
            <div className = "Performance1s">
                <div onClick = {()=>navigate('/club/introduce/hobbyAndExhibition/CHAMGEUL')}><Logo4 src = "CHAMGEUL.png" title = "참글" eng = "서예 및 캘리그라피"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/hobbyAndExhibition/EUMIRANG')}><Logo4 src = "EUMIRANG.png" title = "음이랑" eng = "음악 감상/칵테일"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/hobbyAndExhibition/LIGHTSUNSET')}><Logo4 src = "LIGHTSUNSET.jpg" title = "빛노을" eng = "사진"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/hobbyAndExhibition/STARLOVE')}><Logo4 src = "STARLOVE.png" title = "별사랑" eng = "천체관측"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/hobbyAndExhibition/GUERBOIS')}><Logo4 src = "GUERBOIS.jpg" title = "게르브와" eng = "그림예술"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/hobbyAndExhibition/MANIA')}><Logo4 src = "MANIA.jpg" title = "MANIA" eng = "만화·애니메이션"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/hobbyAndExhibition/BGM')}><Logo4 src = "BGM.png" title = "BGM(Board Game Master)" eng = "보드게임"></Logo4></div>
            </div>
            <Down/>
        </div>
    );
}



export default HobbyAndExhibition;