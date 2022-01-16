import React, {useState} from 'react';
import './Accordian.css'
import { useNavigate } from 'react-router-dom';

const Accordian3 = (props) => {
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
            <div onClick = {()=>navigate('/club')} className="accordion-title" style = {{backgroundColor: titleColor}} onMouseOver={toggle1} onMouseOut = {toggle2}>
                <div>{props.title}</div>
                <img className='toggle' src="triangle.png" alt = ""/>
            </div>
            <div className="accordion-content" aria-expanded={!isOpen} onMouseOver={toggle1} onMouseOut = {toggle2}>
                <div onClick = {()=>navigate('/club/introduce')}>동아리 소개</div>
                <div onClick = {()=>navigate('/club/board')}>동아리 게시판</div>
            </div>
        </div>
    );

};

export default Accordian3;