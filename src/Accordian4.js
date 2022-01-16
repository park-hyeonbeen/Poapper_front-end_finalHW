import React, {useState} from 'react';
import './Accordian.css'

const Accordian4 = (props) => {

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
            <div className="accordion-title" style = {{backgroundColor: titleColor}} onMouseOver={toggle1} onMouseOut = {toggle2}>
                <div>{props.title}</div>
                <img className='toggle' src="triangle.png" alt = ""/>
            </div>
            <div className="accordion-content" aria-expanded={!isOpen} onMouseOver={toggle1} onMouseOut = {toggle2}>
                <a href = "https://dorm.postech.ac.kr/"><div>생활관 자치회</div></a>
                <a href = "https://delivery.postech.ac.kr/"><div>배달업체</div></a>
            </div>
        </div>
    );

};

export default Accordian4;