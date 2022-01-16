import React from 'react';


const Logo4 = (props) =>{
    return(
        <div className = "Logo4">
        <img className = "Logo4Img" src = {props.src} alt = "" ></img>
        <div>
        <div className = "Logo4Title">{props.title}</div>
        <div className = "Logo4Eng" style = {{color: 'grey'}}>{props.eng}</div>
        </div>
        </div>
    );
}



export default Logo4;