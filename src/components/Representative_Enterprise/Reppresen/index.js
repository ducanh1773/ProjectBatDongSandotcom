import React from "react";
import { useState } from "react";
import { Outstanding } from "../../Outstanding/Outstanding1";
import './index.css'
import Representative from "../Reprenettative_Enterperrise_1";
import { Splide, SplideSlide } from '@splidejs/react-splide';

function Representative_Enterprise() {
    const RE = [{ link: '', ImgURL: 'https://file4.batdongsan.com.vn/resize/1275x717/2023/07/29/20230729162038-29a2_wm.jpg' }]
    const RE2 = [{ link: '', ImgURL: 'https://file4.batdongsan.com.vn/resize/1275x717/2023/07/29/20230729162038-29a2_wm.jpg' }]
    const RE3 = [{ link: '', ImgURL: 'https://file4.batdongsan.com.vn/resize/1275x717/2023/07/29/20230729162038-29a2_wm.jpg' }]
    const RE4 = [{ link: '', ImgURL: '/img/RE/20230314082745-8c81_wm.jpg' }]
    const RE5 = [{ link: '', ImgURL: '/img/RE/ctgroup.png' }]
    const RE6 = [{ link: '', ImgURL: '/img/RE/sadeco.jpg' }]
    const RE7 = [{ link: '', ImgURL: '/img/RE/th (1).png' }]
    const RE8 = [{ link: '', ImgURL: '/img/RE/th.png' }]

    return (
        <div>
            <div className="DNTB">
            <h1>Doanh nghiệp tiêu biểu</h1>
            <Splide options={{ type: 'loop' , width: '1500px', fixedWidth:'250px' , rewind: true }}>
                <SplideSlide>
                    <Representative Imgelement={RE}></Representative>
                </SplideSlide>
                <SplideSlide>
                    <Representative Imgelement={RE2}></Representative>
                </SplideSlide>
                <SplideSlide>
                    <Representative Imgelement={RE3}></Representative>
                </SplideSlide>
                <SplideSlide>
                    <Representative Imgelement={RE4}></Representative>
                </SplideSlide>
                <SplideSlide>
                    <Representative Imgelement={RE5}></Representative>
                </SplideSlide>
                <SplideSlide>
                    <Representative Imgelement={RE6}></Representative>
                </SplideSlide>
                <SplideSlide>
                    <Representative Imgelement={RE7}></Representative>
                </SplideSlide>
                <SplideSlide>
                    <Representative Imgelement={RE8}></Representative>
                </SplideSlide>
            </Splide>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Representative_Enterprise;