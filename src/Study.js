import React from 'react';
import Up from "./Up"
import { useNavigate } from 'react-router-dom';
import './main.css'
import Down from "./Down"
import Logo4 from './Logo4';
import PoapperImg from './img/POAPPER.png'
import GposImg from './img/G-POS.png'
import DoranImg from './img/DORAN.png'
import MarcusImg from './img/MARCUS.png'
import Rc423Img from './img/RC423.png'
import PoweronImg from './img/POWERON.png'
import PoscatImg from './img/POSCAT.png'
import PlusImg from './img/PLUS.png'
import MssaImg from './img/MSSA.png'

const Study = () => {
    let navigate = useNavigate();
    return(
        <div>
            <Up/>
            <div className = "Performance1s">
                <div onClick = {()=>navigate('/club/introduce/study/POAPPER')}><Logo4 src = {PoapperImg} title = "PoApper" eng = "개발"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/study/G-POS')}><Logo4 src = {GposImg} title = "G-POS" eng = "게임 개발"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/study/DORAN')}><Logo4 src = {DoranImg} title = "도란도란" eng = "독서,토론,문예창작"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/study/MARCUS')}><Logo4 src = {MarcusImg} title = "MARCUS" eng = "수학 세미나"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/study/RC423')}><Logo4 src = {Rc423Img} title = "RC423" eng = "항공우주"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/study/POWER-ON')}><Logo4 src = {PoweronImg} title = "POWER-ON" eng = "메이커"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/study/POSCAT')}><Logo4 src = {PoscatImg} title = "POSCAT" eng = "알고리즘 및 AI"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/study/PLUS')}><Logo4 src = {PlusImg} title = "PLUS" eng = "컴퓨터 보안"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/study/MSSA')}><Logo4 src = {MssaImg} title = "MSSA" eng = "경영전략연구회"></Logo4></div>
            </div>
            <Down/>
        </div>
    );
}



export default Study;