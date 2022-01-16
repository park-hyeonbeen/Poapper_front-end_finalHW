import React from 'react';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Club from './Club';
import DoranImg from './img/DORAN.png'
const DORAN = () => {
    return(
        <div>
            <Up/>
            <Club name = "도란도란" genre = "독서,토론,문예 창작" location = "학생회관 219호" boss = "심미석" src = {DoranImg} information = "낭만 감성 퐁퐁 풍기는 공대 속 문예 창작 동아리 도란도란입니다!!! 매주 아늑한(엄청나게 아늑함) 동아리방에 모여 쓰고 싶은 글을 쓰거나, 쓴 글을 발표하고 회원들과 함께 이야기할 수도 있죠. 나만의 글을 써보고 싶지만 용기가 안 나서 미뤄온 당신! 직접 쓴 글을 자랑하고 싶지만 주변에 마땅한 사람이 없는 당신! ☆도란도란이 기다리고 있습니다☆"></Club>
            <Down/>
        </div>
    );
}



export default DORAN;