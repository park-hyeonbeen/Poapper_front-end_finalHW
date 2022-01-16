import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const DU = () => {
    return(
        <div>
            <Up/>
            <Club name = "생활관자치회" location = "생활관 4동" boss = "이예찬" src = "DU.png" information = "생활관자치회는 생활관에서 사는 구성원들의 창조적인 활동을 보고하고 생활관 문화를 만들어 나가기 위한 단체입니다. 본교에서 생활관은 학생들의 대학 생활 중 큰 부분을 차지하는 공간입니다. 모두의 복지 증진과 함께 생활관생활에 더 큰 의미를 부여하기 위한 단체로서 생활관자치회는 다양한 활동을 하고 있습니다."></Club>
            <Down/>
        </div>
    );
}



export default DU;