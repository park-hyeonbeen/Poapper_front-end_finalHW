import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
const STARLOVE = () => {
    return(
        <div>
            <Up/>
            <Club name = "별사랑" genre = "천체관측" location = "학생회관 214-3호" boss = "김이제" src = "STARLOVE.png" information = "별사랑은 천체관측 동아리로서 달, 행성, 유성, 성운, 별자리 등의 천체를 관측 및 촬영하는 활동을 하고 있습니다. 관측 활동에 초점을 두며 촬영 교육, 망원경 사용 및 천문 교육 등의 활동을 진행합니다! 별을 좋아한다면 별사랑과 함께 외부 관측도 나가고 다양한 관측 장비도 이용하며 밤하늘의 아름다움을 향유해보아요!"></Club>
            <Down/>
        </div>
    );
}



export default STARLOVE;