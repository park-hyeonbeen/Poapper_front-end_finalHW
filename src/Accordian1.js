import React, {useState} from 'react';
import {useNavigate } from 'react-router-dom';
import './Accordian.css'

const Accordian1 = (props) => {
    let navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [titleColor, SetTitleColor] = useState("white");

    function toggle1(){
        setIsOpen(true);
        SetTitleColor("#D8D5DB");
    }

    function toggle2(){
        setIsOpen(false);
        SetTitleColor("white");
    }

    return (
        <div className="accordion">
            <div onClick = {()=>navigate('/reservation')} className="accordion-title" style = {{backgroundColor: titleColor}} onMouseOver={toggle1} onMouseOut = {toggle2}>
                <div>{props.title}</div>
                <img className='toggle' src="triangle.png" alt = ""/>
            </div>
            <div className="accordion-content" aria-expanded={!isOpen} onMouseOver={toggle1} onMouseOut = {toggle2}>
                <div onClick = {()=>navigate('/reservation/place')}>장소 예약</div>
                <div onClick = {()=>navigate('/reservation/equip')}>장비 예약</div>
            </div>
        </div>
    );

};

export default Accordian1;