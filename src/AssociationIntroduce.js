import React from 'react';
import { useNavigate } from 'react-router-dom';
import Up from "./Up"
import './main.css'
import Down from "./Down"
import Logo3 from './Logo3';
const AssociationIntroduce = () => {
    let navigate = useNavigate();
    return(
        <div>
            <Up/>
            <div className = "Associations">
                <div onClick = {()=>navigate('/association/introduce/SCU')}><Logo3 src = "SCU.png" title = "동아리연합회"></Logo3></div>
                <div onClick = {()=>navigate('/association/introduce/BISANG')}><Logo3 src = "Performance2.png" title = "총여학생회<비상>"></Logo3></div>
                <div onClick = {()=>navigate('/association/introduce/DU')}><Logo3   src = "DU.png" title = "생활관자치회"></Logo3></div>
                <div  onClick = {()=>navigate('/association/introduce/CenterExecution')}><Logo3 src = "CenterExecution.png" title = "중앙집행위원회"></Logo3></div>
                <div onClick = {()=>navigate('/association/introduce/GongGam')}><Logo3 src = "Gonggam.jpg" title = "교지편집위원회<공감>"></Logo3></div>
                <div onClick = {()=>navigate('/association/introduce/SCOPE')}><Logo3  src = "Scope.jpg" title = "학생교육위원회<SCOPE>"></Logo3></div>
                <div onClick = {()=>navigate('/association/introduce/PBS')}><Logo3  src = "PBS.jpg" title = "방송국<PBS>"></Logo3></div>
                <div onClick = {()=>navigate('/association/introduce/MODAM')}><Logo3  src = "Modam.png" title = "학생·소수자인권위원회<모담>"></Logo3></div>
                <div onClick = {()=>navigate('/association/introduce/RAON')}><Logo3 src = "Raon.png" title = "도서관자치위원회<라온>"></Logo3></div>
                <div onClick = {()=>navigate('/association/introduce/MUEUNJAE')}><Logo3  src = "Mueunjae.jpg" title = "무은재학생회 비상대책위원회"></Logo3></div>
                <div onClick = {()=>navigate('/association/introduce/SGNN')}><Logo3 src = "CAC.jpg" title = "행사지원위원회<생각나눔>"></Logo3> </div>
            </div>
            <Down/>
        </div>
    );
}



export default AssociationIntroduce;