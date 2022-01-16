import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import CtrldImg from './img/CTRL-D.png'
const CTRLD = () => {
    return(
        <div>
            <Up/>
            <Club name = "CTRL-D" genre = "댄스" location = "학생회관 406호" boss = "조성주" src = {CtrldImg} information = "컨트롤디는 9개의 스트릿 장르가 존재하는 스트릿댄스 동아리입니다. 모든 부원은 오디션없이 선발하며, 2년간 정기연습으로 기본기를 다집니다. 봄 축제, 정기공연 등의 다양한 공연은 물론 컨트롤디 내부 및 카이스트와 댄스배틀을 진행하며 모두 자유로이 참여 가능합니다."></Club>
            <Down/>
        </div>
    );
}



export default CTRLD;