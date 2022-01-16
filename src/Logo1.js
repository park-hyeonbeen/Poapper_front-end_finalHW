import React from 'react';
import './main.css'


const Logo1 = (props) =>{
    return(
        <div className = "Logo1">
        <img className = "Logo1Img" src = {props.src} alt = "" ></img>
        <div className = "Logo1Content">
        <div style = {{fontWeight:'bold'}}>{props.title}</div>
        <div style = {{color: 'grey'}}>{props.eng}</div>
        </div>
        </div>
    );
}



export default Logo1;