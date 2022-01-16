import React from 'react';


const Logo3 = (props) =>{
    return(
        <div className = "Logo3">
        <img className = "Logo3Img" src = {props.src} alt = "" ></img>
        <div className = "Logo3Content">{props.title}</div>
        </div>
    );
}



export default Logo3;