import React from 'react';


const Logo2 = (props) =>{
    return(
        <div className = "Logo2">
        <img className = "Logo2Img" src = {props.src} alt = "" ></img>
        <div className = "Logo2Content">{props.title}</div>
        </div>
    );
}



export default Logo2;