import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const NAVIGATOR = () => {
    return(
        <div>
            <Up/>
            <Club name = "NAVIGATOR" genre = "종교동아리" location = "학생회관 221호" boss = "김우현" src = "NAVIGATOR.png" information = "NAVIGATOR는 항해자라는 뜻입니다. 예수 그리스도라는 목표 아래 인생을 항해하는 사람들의 모임입니다. 성경말씀과 기도, 그리스도인의 교제, 증거의 삶을 바탕으로 건전하고 성경적인 가치관을 갖고 예수님을 닮아가는 것을 목표로 합니다. 성경에 대해 알고 싶은 사람, 인생의 의미와 목표를 찾고자 하는 사람, 누구나 환영합니다!"></Club>
            <Down/>
        </div>
    );
}



export default NAVIGATOR;