import React from 'react';
import { useNavigate } from 'react-router-dom';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Logo2 from './Logo2';
const ClubIntroduce = () => {
    let navigate = useNavigate();
    return(
        <div>
            <Up/>
            <div className = "Clubs">
                <div onClick = {()=>navigate('/club/introduce/performance1')}><Logo2 src = "Performance1.jpg" title = "공연1"></Logo2></div>
                <div onClick = {()=>navigate('/club/introduce/performance2')}><Logo2 src = "Performance2.png" title = "공연2"></Logo2></div>
                <div onClick = {()=>navigate('/club/introduce/sports')}><Logo2 src = "Sports.png" title = "체육"></Logo2></div>
                <div onClick = {()=>navigate('/club/introduce/hobbyAndExhibition')}><Logo2 src = "HAE.png" title = "취미전시"></Logo2></div>
                <div onClick = {()=>navigate('/club/introduce/study')}><Logo2 src = "Study.png" title = "학술"></Logo2></div>
                <div onClick = {()=>navigate('/club/introduce/societyAndReligion')}><Logo2 src = "SAR.png" title = "사회종교"></Logo2></div>
            </div>
            <Down/>
        </div>
    );
}



export default ClubIntroduce;