import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import AssociationIntroduce from './AssociationIntroduce'
import BGM from './BGM'
import BISANG from './BISANG'
import BLUEPEANUTS from './BLUEPEANUTS'
import BREMEN from './BREMEN'
import CCC from './CCC'
import CenterExecution from './CenterExecution'
import CHAMGEUL from './CHAMGEUL'
import CHEERO from './CHEERO'
import CHORUS from './CHORUS'
import CLATAR from './CLATAR'
import CLEAR from './CLEAR'
import ClubIndividual from './Club'
import ClubIntroduce from './ClubIntroduce'
import CTRLD from './CTRL-D'
import DASOM from './DASOM'
import DORAN from './DORAN'
import Down from './Down'
import DU from './DU'
import ELEVEN from './ELEVEN'
import EPATHA from './EPATHA'
import EquipReserve from './EquipReserve'
import EUMIRANG from './EUMIRANG'
import GongGam from './GongGam'
import GPOS from './GPOS'
import GTLOVE from './GTLOVE'
import GUERBOIS from './GUERBOIS'
import GUITARHANA from './GUITARHANA'
import HANULIM from './HANULIM'
import HobbyAndExhibition from './HobbyAndExhibition'
import IVF from './IVF'
import KICKOFF from './KICKOFF'
import LIGHTSUNSET from './LIGHTSUNSET'
import Login from './Login'
import Logo1 from './Logo1'
import Logo2 from './Logo2'
import Logo3 from './Logo3'
import Logo4 from './Logo4'
import MANIA from './MANIA'
import MARCUS from './MARCUS'
import MODAM from './MODAM'
import MSSA from './MSSA'
import MUEUNJAE from './MUEUNJAE'
import NAVIGATOR from './NAVIGATOR'
import OPCA from './OPCA'
import PASSING from './PASSING'
import PBS from './PBS'
import Performance1 from './Performance1'
import Performance2 from './Performance2'
import PFUNK from './PFUNK'
import PlaceReserve from './PlaceReserve'
import PLUS from './PLUS'
import POAPPER from './POAPPER'
import POBBA from './POBBA'
import POSCAT from './POSCAT'
import POWERON from './POWERON'
import RAON from './RAON'
import RC423 from './RC423'
import SARMTUR from './SARMTUR'
import SCOPE from './SCOPE'
import SCU from './SCU'
import SFC from './SFC'
import SGNN from './SGNN'
import SocietyAndReligion from './SocietyAndReligion'
import Sports from './Sports'
import STARLOVE from './STARLOVE'
import STEELER from './STEELER'
import Study from './study'
import TACHYONS from './TACHYONS'
import TAKSANG from './TAKSANG'
import TEAMPOSTECH from './TEAMPOSTECH'
import UMCHI from './UMCHI'
import Up from './Up'
import VOCES from './VOCES'
import Home from './Home'
import ADLIB from './ADLIB'
import Board from './Board'

function App(){
    return(
        <BrowserRouter basename = {process.env.PUBLIC_URL}>
        <Routes>
            <Route path = "/" element ={<Home/>}/>
            <Route path = "/login" element ={<Login/>}/>
            <Route path = "/reservation/place" element ={<PlaceReserve/>}/>
            <Route path = "/reservation" element ={<PlaceReserve/>}/>
            <Route path = "/reservation/equip" element ={<EquipReserve/>}/>
            <Route path = "/association/introduce" element ={<AssociationIntroduce/>}/>
            <Route path = "/association" element ={<AssociationIntroduce/>}/>
            <Route path = "/association/board" element ={<Board/>}/>
            <Route path = "/club/introduce" element ={<ClubIntroduce/>}/>
            <Route path = "/club" element ={<ClubIntroduce/>}/>
            <Route path = "/club/board" element ={<Board/>}/>
            <Route path = "/association/introduce/SCU" element ={<SCU/>}/>
            <Route path = "/association/introduce/BISANG" element ={<BISANG/>}/>
            <Route path = "/association/introduce/DU" element ={<DU/>}/>
            <Route path = "/association/introduce/CenterExecution" element ={<CenterExecution/>}/>
            <Route path = "/association/introduce/GongGam" element ={<GongGam/>}/>
            <Route path = "/association/introduce/SCOPE" element ={<SCOPE/>}/>
            <Route path = "/association/introduce/PBS" element ={<PBS/>}/>
            <Route path = "/association/introduce/MODAM" element ={<MODAM/>}/>
            <Route path = "/association/introduce/RAON" element ={<RAON/>}/>
            <Route path = "/association/introduce/MUEUNJAE" element ={<MUEUNJAE/>}/>
            <Route path = "/association/introduce/SGNN" element ={<SGNN/>}/>
            <Route path = "/club/introduce/performance1" element ={<Performance1/>}/>
            <Route path = "/club/introduce/performance2" element ={<Performance2/>}/>
            <Route path = "/club/introduce/sports" element ={<Sports/>}/>
            <Route path = "/club/introduce/hobbyAndExhibition" element ={<HobbyAndExhibition/>}/>
            <Route path = "/club/introduce/study" element ={<Study/>}/>
            <Route path = "/club/introduce/societyAndReligion" element ={<SocietyAndReligion/>}/>
            <Route path = "/club/introduce/performance1/CTRL-D" element ={<CTRLD/>}/>
            <Route path = "/club/introduce/performance1/HANULIM" element ={<HANULIM/>}/>
            <Route path = "/club/introduce/performance1/CHORUS" element ={<CHORUS/>}/>
            <Route path = "/club/introduce/performance1/SARMTUR" element ={<SARMTUR/>}/>
            <Route path = "/club/introduce/performance1/STEELER" element ={<STEELER/>}/>
            <Route path = "/club/introduce/performance1/OPCA" element ={<OPCA/>}/>
            <Route path = "/club/introduce/performance1/Cheero" element ={<CHEERO/>}/>
            <Route path = "/club/introduce/performance1/ADLIB" element ={<ADLIB/>}/>
            <Route path = "/club/introduce/performance2/UMCHI" element ={<UMCHI/>}/>
            <Route path = "/club/introduce/performance2/GUITARHANA" element ={<GUITARHANA/>}/>
            <Route path = "/club/introduce/performance2/VOCES" element ={<VOCES/>}/>
            <Route path = "/club/introduce/performance2/P-FUNK" element ={<PFUNK/>}/>
            <Route path = "/club/introduce/performance2/GTLOVE" element ={<GTLOVE/>}/>
            <Route path = "/club/introduce/performance2/CLATAR" element ={<CLATAR/>}/>
            <Route path = "/club/introduce/performance2/BLUEPEANUTS" element ={<BLUEPEANUTS/>}/>
            <Route path = "/club/introduce/performance2/BREMEN" element ={<BREMEN/>}/>
            <Route path = "/club/introduce/sports/TAKSANG" element ={<TAKSANG/>}/> 
            <Route path = "/club/introduce/sports/TeamPOSTECH" element ={<TEAMPOSTECH/>}/>
            <Route path = "/club/introduce/sports/TACHYONS" element ={<TACHYONS/>}/>
            <Route path = "/club/introduce/sports/POBBA" element ={<POBBA/>}/>
            <Route path = "/club/introduce/sports/PASSING" element ={<PASSING/>}/>
            <Route path = "/club/introduce/sports/KICKOFF" element ={<KICKOFF/>}/>
            <Route path = "/club/introduce/sports/ELEVEN" element ={<ELEVEN/>}/>
            <Route path = "/club/introduce/sports/CLEAR" element ={<CLEAR/>}/>
            <Route path = "/club/introduce/hobbyAndExhibition/CHAMGEUL" element ={<CHAMGEUL/>}/>
            <Route path = "/club/introduce/hobbyAndExhibition/EUMIRANG" element ={<EUMIRANG/>}/>
            <Route path = "/club/introduce/hobbyAndExhibition/LIGHTSUNSET" element ={<LIGHTSUNSET/>}/>
            <Route path = "/club/introduce/hobbyAndExhibition/STARLOVE" element ={<STARLOVE/>}/>
            <Route path = "/club/introduce/hobbyAndExhibition/GUERBOIS" element ={<GUERBOIS/>}/>
            <Route path = "/club/introduce/hobbyAndExhibition/MANIA" element ={<MANIA/>}/>
            <Route path = "/club/introduce/hobbyAndExhibition/BGM" element ={<BGM/>}/>
            <Route path = "/club/introduce/study/PoApper" element ={<POAPPER/>}/>
            <Route path = "/club/introduce/study/G-POS" element ={<GPOS/>}/>
            <Route path = "/club/introduce/study/DORAN" element ={<DORAN/>}/>
            <Route path = "/club/introduce/study/MARCUS" element ={<MARCUS/>}/>
            <Route path = "/club/introduce/study/RC423" element ={<RC423/>}/>
            <Route path = "/club/introduce/study/POWER-ON" element ={<POWERON/>}/>
            <Route path = "/club/introduce/study/POSCAT" element ={<POSCAT/>}/>
            <Route path = "/club/introduce/study/PLUS" element ={<PLUS/>}/>
            <Route path = "/club/introduce/study/MSSA" element ={<MSSA/>}/>
            <Route path = "/club/introduce/societyAndReligion/CCC" element ={<CCC/>}/>
            <Route path = "/club/introduce/societyAndReligion/EPATHA" element ={<EPATHA/>}/>
            <Route path = "/club/introduce/societyAndReligion/DASOM" element ={<DASOM/>}/>
            <Route path = "/club/introduce/societyAndReligion/SFC" element ={<SFC/>}/>
            <Route path = "/club/introduce/societyAndReligion/NAVIGATOR" element ={<NAVIGATOR/>}/>
            <Route path = "/club/introduce/societyAndReligion/IVF" element ={<IVF/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;