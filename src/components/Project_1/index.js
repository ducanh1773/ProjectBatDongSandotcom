import React from "react";
import Header from "../Header/Main_header";
import SearchEngine from "../SearchEngine";
import SearchEngine_2 from "../SearchEngine/SearchEgine_2";
import News_BDS_Main from "../News_BDS/News_BDS_main";
import Main_Oustanding from "../Outstanding";
import BDS_DD_Main from "../BDSđiaiem";
import Tintucmain from '../Tin_Tuc_bds/tintucmain'
import SupportClient from "../Support_client/Support_client_1";
import SupportClientMain from "../Support_client/Support_client_1/Support_client_main";
import Representative_Enterprise from "../Representative_Enterprise/Reppresen";
import NhaDatHeader from "../../Nha_Dat_Ban/Transfer/Header_NDB";
import BDSFY_2 from "../BDSFY/BDSFY2";
import { useState, useEffect } from 'react';
function Project1() {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className='SE_main'>
                <SearchEngine></SearchEngine>
            </div>
            <div className="NEWS_MAIN">
                <News_BDS_Main></News_BDS_Main>
            </div>
            <div className='BDSFY-cover'>
                <BDSFY_2></BDSFY_2>
            </div>
            <div>
                <Main_Oustanding></Main_Oustanding>
            </div>
            <div>
                <BDS_DD_Main></BDS_DD_Main>
            </div>
            <div>
                <h1 className='header_News'>Tin tức bất động sản</h1>
            </div>
            <div className='News_Main'>
                <Tintucmain></Tintucmain>
            </div>
            <div>
                <SupportClientMain></SupportClientMain>
            </div>
            <div className='Reppresentative'>
                <Representative_Enterprise></Representative_Enterprise>
            </div>
            <div className='last_page'>
                <a href='' className='Link_sub'><img src='/img/A1.svg'></img></a>
                <a href='' className='Link_sub'><img src='/img/a2.svg'></img></a>
                <a href='' className='Link_sub'><img src='/img/a3.svg'></img></a>
            </div>
        </div>
    )
}

export default Project1;