import React from "react";
import './index.css';
import TinTuc from "../tintuc_bds1";
import { useState } from "react";
import Carousel from '../carousel'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Tintucmain = () => {
    const TT1 = [{ number: '01', name: 'Những điểm sáng của thị trường bất động sản hà nội', ImgURL: 'https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/07/Ong-Nguyen-Quoc-Anh_Pho-TGD-Batdongsan.com_.vn-trinh-bay-ve-Tong-quan-kinh-te-vi-mo-va-Thi-truong-BDS-scaled.jpg', link: 'https://batdongsan.com.vn/tin-tuc/nhung-diem-sang-an-tuong-cua-thi-truong-bds-ha-noi-cd-hn-772420' }]
    const TT2 = [{ number: '02', name: 'nhiều dự án BĐS vùng ven thắng khi ưu tiên đánh bắt sân nhà', ImgURL: 'https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/07/Ong-Nguyen-Quoc-Anh_Pho-TGD-Batdongsan.com_.vn-trinh-bay-ve-Tong-quan-kinh-te-vi-mo-va-Thi-truong-BDS-scaled.jpg', link: 'https://batdongsan.com.vn/tin-tuc/nhung-diem-sang-an-tuong-cua-thi-truong-bds-ha-noi-cd-hn-772420', link: '' }]
    const TT3 = [{ number: '03', name: 'chật vật thoát hàng vì lỡ mua căn hộ bình dương thời "Đỉnh giá"', ImgURL: 'https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/07/Ong-Nguyen-Quoc-Anh_Pho-TGD-Batdongsan.com_.vn-trinh-bay-ve-Tong-quan-kinh-te-vi-mo-va-Thi-truong-BDS-scaled.jpg', link: 'https://batdongsan.com.vn/tin-tuc/nhung-diem-sang-an-tuong-cua-thi-truong-bds-ha-noi-cd-hn-772420', link: '' }]

    return (
        <div>
            <Splide options={{ width: '1250px',fixedWidth:'390px', perPage: '3', gap: '-5px' , position:'absolute'}} aria-label="React Splide Example">
                <SplideSlide options={{width: '500px'}}>
                    <TinTuc Imgelement={TT1}></TinTuc>
                </SplideSlide>
                <SplideSlide options={{width: '500px'}}>
                    <TinTuc Imgelement={TT2}></TinTuc>
                </SplideSlide>
                <SplideSlide options={{width: '500px'}}>
                    <TinTuc Imgelement={TT3}></TinTuc>
                </SplideSlide>
                <SplideSlide options={{width: '500px'}}>
                    <TinTuc Imgelement={TT1}></TinTuc>
                </SplideSlide>
                <SplideSlide options={{width: '500px'}}>
                    <TinTuc Imgelement={TT2}></TinTuc>
                </SplideSlide>
                <SplideSlide options={{width: '500px'}}>
                    <TinTuc Imgelement={TT2}></TinTuc>
                </SplideSlide>

            </Splide>

            
        </div>
    );
};

export default Tintucmain;