import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const GUITARHANA = () => {
    return(
        <div>
            <Up/>
            <Club name = "기타하나" genre = "어쿠스틱 통기타" location = "학생회관 407호" boss = "이경민" src = "GUITARHANA.png" information = "기타하나는 어쿠스틱 통기타 동아리입니다. 주로 정기공연, 버스킹 등의 행사를 진행하고 기타 뿐만 아니라 키보드, 드럼, 일렉, 베이스 등 여러가지 악기를 다루며 자신이 하고 싶은 곡으로 공연을 꾸며나갈 수 있습니다. 또한 신입생들을 위해 동아리 내부에서 기타교실을 운영하기 때문에 기타에 자신이 없어도 동아리에 들어와서 배워나갈 수 있습니다."></Club>
            <Down/>
        </div>
    );
}



export default GUITARHANA;