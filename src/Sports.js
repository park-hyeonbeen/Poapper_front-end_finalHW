import React from 'react';
import Up from "./Up"
import { useNavigate } from 'react-router-dom';
import './main.css'
import Down from "./Down"
import Logo4 from './Logo4';
import TaksangImg from './img/TAKSANG.png'
import TeampostechImg from './img/TEAMPOSTECH.jpg'
import TachyonsImg from './img/TACHYONS.png'
import PobbaImg from './img/POBBA.png'
import PassingImg from './img/PASSING.png'
import KickoffImg from './img/KICKOFF.jpg'
import ElevenImg from './img/ELEVEN.png'
import ClearImg from './img/CLEAR.png'

const Sports = () => {
    let navigate = useNavigate();
    return(
        <div>
            <Up/>
            <div className = "Performance1s">
                <div onClick = {()=>navigate('/club/introduce/sports/TAKSANG')}><Logo4 src = {TaksangImg} title = "탁상공론" eng = "탁구"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/sports/TEAMPOSTECH')}><Logo4 src = {TeampostechImg} title = "Team POSTECH" eng = "주짓수"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/sports/TACHYONS')}><Logo4 src = {TachyonsImg} title = "TACHYONS" eng = "야구"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/sports/POBBA')}><Logo4 src = {PobbaImg} title = "POBBA" eng = "농구"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/sports/PASSING')}><Logo4 src = {PassingImg} title = "PASSING" eng = "테니스"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/sports/KICKOFF')}><Logo4 src = {KickoffImg} title = "KICKOFF" eng = "풋살"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/sports/ELEVEN')}><Logo4 src = {ElevenImg} title = "ELEVEN" eng = "축구"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/sports/CLEAR')}><Logo4 src = {ClearImg} title = "Clear(클리어)" eng = "배드민턴"></Logo4></div>
            </div>
            <Down/>
        </div>
    );
}



export default Sports;