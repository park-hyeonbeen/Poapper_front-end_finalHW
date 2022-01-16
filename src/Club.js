import React from 'react';
import './main.css'

const ClubIndividual = (props) =>{
    return(
        <div>
        <div className = "ClubThing">
        <div>
        <div className = "ClubName">{props.name}</div>
        <div className = "Genre">{props.genre}</div>
        <div className = "ClubInformation">{props.information}</div>
        <br></br>
        <span className = "ClubLocation">동방 위치: </span>
        <span>{props.location}</span>
        <br></br>
        <span className = "ClubBoss">대표자: </span>
        <span>{props.boss}</span>
        </div>
        <img src = {props.src} className = "ClubImg" alt = ""></img>
        </div>
        </div>
    );
}



export default ClubIndividual;