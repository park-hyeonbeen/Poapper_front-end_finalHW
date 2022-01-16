import React from 'react';
import { useNavigate } from 'react-router-dom';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Logo4 from './Logo4';
const Performance1 = () => {
    let navigate = useNavigate();
    return(
        <div>
            <Up/>
            <div className = "Performance1s">
                <div onClick = {()=>navigate('/club/introduce/performance1/CTRL-D')}><Logo4 src = "CTRL-D.png" title = "CTRL-D" eng = "댄스"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/performance1/HANULIM')}><Logo4 src = "HANULIM.png" title = "한울림" eng = "클래식"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/performance1/CHORUS')}><Logo4 src = "CHORUS.png" title = "코러스" eng = "합창"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/performance1/SARMTUR')}><Logo4 src = "SARMTUR.png" title = "삶터" eng = "사물놀이"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/performance1/STEELER')}><Logo4 src = "STEELER.jpg" title = "STEELER" eng = "밴드"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/performance1/OPCA')}><Logo4 src = "OPCA.png" title = "OPCA(Original Postech Cast)" eng = "뮤지컬"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/performance1/CHEERO')}><Logo4 src = "CHEERO.jpg" title = "Cheero" eng = "응원단"></Logo4></div>
                <div onClick = {()=>navigate('/club/introduce/performance1/ADLIB')}><Logo4 src = "ADLIB.png" title = "ADLIB" eng = "연극"></Logo4></div>
            </div>
            <Down/>
        </div>
    );
}



export default Performance1;