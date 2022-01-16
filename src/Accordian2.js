import React, {useState} from 'react';
import './Accordian.css'
import { useNavigate } from 'react-router-dom';

const Accordian2 = (props) => {
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
            <div onClick = {()=>navigate('/association')}className="accordion-title" style = {{backgroundColor: titleColor}} onMouseOver={toggle1} onMouseOut = {toggle2}>
                <div>{props.title}</div>
                <img className='toggle' src="triangle.png" alt = ""/>
            </div>
            <div className="accordion-content" aria-expanded={!isOpen} onMouseOver={toggle1} onMouseOut = {toggle2}>
                <div onClick = {()=>navigate('/association/introduce')}>자치단체 소개</div>
                <div onClick = {()=>navigate('/association/board')}>총학생회 게시판</div>
                <a href = "https://drive.google.com/drive/u/0/folders/1vHexwLSdD92maoKNlvw9zQ0q0J59k5FD"><div>총학생회 기록물관리기관</div></a>
            </div>
        </div>
    );

};

export default Accordian2;