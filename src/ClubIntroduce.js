import React from 'react';
import { useNavigate } from 'react-router-dom';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Logo2 from './Logo2';
import Performance1Img from './img/Performance1.jpg'
import Performance2Img from './img/Performance2.png'
import SportsImg from './img/Sports.png'
import HaeImg from './img/HAE.png'
import StudyImg from './img/Study.png'
import SarImg from './img/SAR.png'

const ClubIntroduce = () => {
    let navigate = useNavigate();
    return(
        <div>
            <Up/>
            <div className = "Clubs">
                <div onClick = {()=>navigate('/club/introduce/performance1')}><Logo2 src = {Performance1Img} title = "공연1"></Logo2></div>
                <div onClick = {()=>navigate('/club/introduce/performance2')}><Logo2 src = {Performance2Img} title = "공연2"></Logo2></div>
                <div onClick = {()=>navigate('/club/introduce/sports')}><Logo2 src = {SportsImg} title = "체육"></Logo2></div>
                <div onClick = {()=>navigate('/club/introduce/hobbyAndExhibition')}><Logo2 src = {HaeImg} title = "취미전시"></Logo2></div>
                <div onClick = {()=>navigate('/club/introduce/study')}><Logo2 src = {StudyImg} title = "학술"></Logo2></div>
                <div onClick = {()=>navigate('/club/introduce/societyAndReligion')}><Logo2 src = {SarImg} title = "사회종교"></Logo2></div>
            </div>
            <Down/>
        </div>
    );
}



export default ClubIntroduce;