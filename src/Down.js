import React from 'react';
import './main.css';

const Down = () => {
    return(
        <div>
            <div className = "Bottom">
                <div className = "Bottom1">
                    <div style = {{fontWeight : 'bold'}}>POSTECH 총학생회 비상대책위원회</div>
                    <div className = "Info" style = {{width: '260px', marginTop: '10px'}}>77 cheongam-Ro. Nam-gu. Pohang. Gyeongbuk. Korea 790-784 </div>
                    <div className = "Telephone">
                    <div className = "Info">TEL+82-54-279-2621, 2637</div>
                    <div className = "Info">FAX +82-54-279-2626</div>
                    </div>
                    <div className = "Email">
                    <div className = "Info">E-mail: stu-35@postech.ac.kr</div>
                    <div className = "Info">POPO 관련 문의: jeong314@postech.ac.kr</div>
                    </div>
                </div>
                <div className = "Bottom2">
                    <a href = "https://club.poapper.com/">
                    <div style = {{fontSIze: '17px', fontWeight: 'bold', textAlign: 'center'}}>Developed by</div>
                    <div style = {{fontSize: '30px', fontWeight: 'bold', textAlign: 'center'}}>PoApper</div>
                    </a>
                    <a href = "https://popo.poapper.com/recruit-developer"><div className= "Link" style = {{marginTop : '15px'}}>개발자 모집</div></a>
                    <a href = "https://docs.google.com/forms/d/1J23um5RDRTdKC9bscZnixPhEeon6qz4DQRTJYMtFJTU/viewform?edit_requested=true"><div className= "Link" style = {{marginTop : '10px' ,width: '150px'}}>오류 신고 및 피드백</div></a>
                </div>
                <div className = "Bottom3">
                    <div style = {{fontWeight: 'bold', textAlign: 'center'}}>POSTECH</div>
                    <div className = "Address">
                    <a href = "https://www.postech.ac.kr/"><div className= "Link">포항공대 홈페이지</div></a>
                    <a href = "https://sso.postech.ac.kr/sso/usr/postech/login/view"><div className= "Link">POVIS</div></a>
                    <a href = "https://hemos.postech.ac.kr/"><div className= "Link">HEMOS</div></a>
                    <a href = "https://library.postech.ac.kr/"><div className= "Link" style = {{width: '150px'}}>박태준 학술정보관</div></a>
                    </div>
                </div>
            </div>
            <div className = "Tail">
            <div className = "Link" style = {{marginTop: '10px', paddingRight: '10px', borderRight: '1px solid #D8D5DB'}}>contact us</div>
            <div className = "Link" style = {{marginTop: '10px', paddingLeft: '10px'}}>Privacy Policy</div>
            </div>
        </div>
    )
}


export default Down;