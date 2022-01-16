import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
const Board = () => {
    return(
        <div>
            <Up/>
            <div style = {{paddingTop: '300px', width: '60vw;', marginLeft: '35vw', paddingBottom:'400px' }}>
            <div>서비스 준비중입니다 🤩</div>
            <div>POPO에 추가할 좋은 아이디어가 있다면 제안해주세요!</div>
            </div>
            <Down/>
        </div>
    );
}



export default Board;