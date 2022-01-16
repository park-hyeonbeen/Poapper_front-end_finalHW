import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import OpcaImg from './img/OPCA.png'
const OPCA = () => {
    return(
        <div>
            <Up/>
            <Club name = "OPCA(Original Postech Cast)" genre = "뮤지컬" location = "학생회관 409호" boss = "김기현" src = {OpcaImg} information = "OPCA는 뮤지컬 동아리입니다. 해마다 뮤지컬 정기공연 1회를 기획하며, 연기와 노래를 하는 배우 외에도 연출, 기획, 무대, 음향, 조명, 의상, 소품, 분장 등 다양한 분야를 배우고, 재능을 펼쳐볼 수 있습니다. 자신이 원하는 넘버만을 연기하는 갈라쇼를 하기도하며 친목활동으로 동아리원들과 함께 뮤지컬 관람 등의 활동도 진행합니다."></Club>
            <Down/>
        </div>
    );
}



export default OPCA;