import React from 'react';
import Up from "./Up"
import { useNavigate } from 'react-router-dom';
import './main.css'
import Down from "./Down"
import Logo4 from './Logo4';
import ChamgeulImg from './img/CHAMGEUL.png'
import EumirangImg from './img/EUMIRANG.png'
import LightsunsetImg from './img/LIGHTSUNSET.jpg'
import StarloveImg from './img/STARLOVE.png'
import GuerboisImg from './img/GUERBOIS.jpg'
import ManiaImg from './img/MANIA.jpg'
import BgmImg from './img/BGM.png'

const HobbyAndExhibition = () => {
    let navigate = useNavigate();
    return(
        <div>
            <Up/>
            <div className = "Performance1s">
                <div onClick = {()=>navigate('/club/introduce/hobbyAndExhibition/CHAMGEUL')}><Logo4 src = {ChamgeulImg} title = "참글" eng = "서예 및 캘리그라피"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/hobbyAndExhibition/EUMIRANG')}><Logo4 src = {EumirangImg} title = "음이랑" eng = "음악 감상/칵테일"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/hobbyAndExhibition/LIGHTSUNSET')}><Logo4 src = {LightsunsetImg} title = "빛노을" eng = "사진"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/hobbyAndExhibition/STARLOVE')}><Logo4 src = {StarloveImg} title = "별사랑" eng = "천체관측"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/hobbyAndExhibition/GUERBOIS')}><Logo4 src = {GuerboisImg} title = "게르브와" eng = "그림예술"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/hobbyAndExhibition/MANIA')}><Logo4 src = {ManiaImg} title = "MANIA" eng = "만화·애니메이션"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/hobbyAndExhibition/BGM')}><Logo4 src = {BgmImg} title = "BGM(Board Game Master)" eng = "보드게임"></Logo4></div>
            </div>
            <Down/>
        </div>
    );
}



export default HobbyAndExhibition;