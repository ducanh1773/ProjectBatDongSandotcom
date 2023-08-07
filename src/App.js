import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Reuse } from './components/Reuse';
import { useState, useEffect } from 'react';
import { Range, getTrackBackground } from 'react-range';
import Main_Page_BDS from './components/Main_BDS';
import HeaderNhaDatBan from './components/NhaDatBan_Chothue/NhaDatBan/NhaDatBanHeader';
import ProjectBDSMain from './components/ProjectBDS/MainProjectBDS';
import NewsBDSMain from './components/NewsBDS/NewsBDSMain';
import WikiBDSMain from './components/WikiBDS/WikiBDSMain';
import EvaluteProjectMain from './components/EvaluteProject';
import ItermNDB from './components/NhaDatBan_Chothue/ItermNDB';
import Dangnhap from '../src/dangnhap'
import DangKy from '../src/dangky'
import { Routes, Route, Outlet, Link } from "react-router-dom";


function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main_Page_BDS></Main_Page_BDS>}></Route>
        <Route path='/wiki' element={<WikiBDSMain></WikiBDSMain>}></Route>
        <Route path='/nha_dat_ban' element={<HeaderNhaDatBan></HeaderNhaDatBan>}></Route>
        <Route path='/duan' element={<ProjectBDSMain></ProjectBDSMain>}></Route>
        <Route path="*" element={<Main_Page_BDS></Main_Page_BDS>} />
        <Route path='/tintucbds' element={<NewsBDSMain></NewsBDSMain>}></Route>
        <Route path='/phantichdanhgia'element={<EvaluteProjectMain></EvaluteProjectMain>}></Route>
        <Route path='/ban-nha-o-pho-thi-sach-phuong-thang-tam' element = {<ItermNDB></ItermNDB>}></Route>
        <Route path='/dang-nhap-bds' element={<Dangnhap></Dangnhap>}></Route>
        <Route path='/dang-ky-bds' element = {<DangKy></DangKy>}></Route>
      </Routes>

    </div>
  )
}

export default App;