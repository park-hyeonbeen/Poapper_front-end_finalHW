import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
const Home = () => {
    return(
        <div>
            <Up/>
            <div style = {{paddingTop: '100px', width: '60vw;', marginLeft: '25vw', paddingBottom:'500px' }}>
            <div>POPO,Postechian's POrtal</div>
            <div><br></br>이곳에서 학생회관, 지곡회관 등의 장소를 예약하고, 총학생회에서 보유한 장비들을 대여할 수 있습니다! 📋</div>
            <div><br></br>총학생회를 구성하는 자치단체에 대해 살펴볼 수 있습니다! 👀</div>
            <div><br></br>교내 동아리 역시 POPO에서 확인할 수 있습니다! 🎨</div>
            </div>
            <Down/>
        </div>
    );
}



export default Home;