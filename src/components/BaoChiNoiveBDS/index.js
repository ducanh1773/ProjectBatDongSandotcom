import React from "react";
import Representative from "../Representative_Enterprise/Reprenettative_Enterperrise_1";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import TinTuc from "../Tin_Tuc_bds/tintuc_bds1";
import './index.css'
import BaoChiNoiVeBDS_Reuse from "../BaoChiNoiveBDS/BaoChiNoiVeBDSR_Reuse"

function BaoChiNoiVeBDS() {
    const BC1 = [{ number: 'https://tse3.mm.bing.net/th?id=OIP.4AVguLDQUTbskbJD_6FeKwHaD4&pid=Api&P=0&h=220', name: 'Batdongsan.com.vn thay đổi nhận diện thương hiệu và ra mắt chuyên trang dự án', ImgURL: 'https://cdn.tuoitre.vn/thumb_w/730/2021/11/2/photo-1-16358248334981150224565.jpg', link: 'https://tuoitre.vn/batdongsan-com-vn-thay-doi-nhan-dien-thuong-hieu-va-ra-mat-chuyen-trang-du-an-20211102110334939.htm' }]
    const BC2 = [{ number: '/img/baochibds/th.png', name: 'CEO Batdongsan.com.vn: "Nâng cao trải nghiệm người dùng là điều quan trọng nhất"', ImgURL: 'https://cdn.tuoitre.vn/thumb_w/730/2021/11/2/photo-1-16358248334981150224565.jpg', link: 'https://tuoitre.vn/batdongsan-com-vn-thay-doi-nhan-dien-thuong-hieu-va-ra-mat-chuyen-trang-du-an-20211102110334939.htm' }]
    const BC3 = [{ number: '/img/baochibds/vne.png', name: 'VRES 2021 đi tìm "vaccine" cho thị trường bất động sản', ImgURL: 'https://cafefcdn.com/thumb_w/640/pr/2021/photo-1-16358198266671679209647-52-0-946-1430-crop-1635819844206-63771529626294.jpg', link: '' }]
    const BC4 = [{ number: '/img/baochibds/th.png', name: 'Mua bán nhà đất ở tỉnh : 4 lưu ý quan trọng ', ImgURL: 'https://cdn.tuoitre.vn/thumb_w/730/2021/11/2/photo-1-16358248334981150224565.jpg', link: '' }]
    const BC5 = [{ number: 'https://tse4.mm.bing.net/th?id=OIP.sEVA9pAzpkYSzpGCercg3AHaFO&pid=Api&P=0&h=220', name: 'Bất chấp nhu cầu sụt giảm , nhà đất vẫn tăng', ImgURL: 'https://cdn.tuoitre.vn/thumb_w/730/2021/11/2/photo-1-16358248334981150224565.jpg', link: '' }]
    const BC6 = [{ number: 'https://tse2.mm.bing.net/th?id=OIP._FUsOk8_HqYllKPusXTx0AHaDt&pid=Api&P=0&h=220', name: 'Lời giải cho bài toán mua bất động sản ở tỉnh', ImgURL: 'https://cdn.tuoitre.vn/thumb_w/730/2021/11/2/photo-1-16358248334981150224565.jpg', link: '' }]


    return (
        <div>
            <div className="SubjectBC1">
                <h1 className="SubjectBC">Báo chí nói gì về Batdongsan.com.vn</h1>
                <p className="SubjectBC2">Triệu lựa chọn nhà , một kênh tìm kiếm</p>
            </div>
            <div >
                <Splide options={{ move: 'true', padding: '', type: 'loop', width: '1300px', rewind: 'true', focus: 'center', fixedWidth: '390px', perPage: '4' }}>
                    <SplideSlide>
                        <BaoChiNoiVeBDS_Reuse Imgelement={BC1}></BaoChiNoiVeBDS_Reuse>
                    </SplideSlide>
                    <SplideSlide>
                        <BaoChiNoiVeBDS_Reuse Imgelement={BC2}></BaoChiNoiVeBDS_Reuse>
                    </SplideSlide>
                    <SplideSlide>
                        <BaoChiNoiVeBDS_Reuse Imgelement={BC3}></BaoChiNoiVeBDS_Reuse>
                    </SplideSlide>
                    <SplideSlide>
                        <BaoChiNoiVeBDS_Reuse Imgelement={BC4}></BaoChiNoiVeBDS_Reuse>
                    </SplideSlide>
                    <SplideSlide>
                        <BaoChiNoiVeBDS_Reuse Imgelement={BC5}></BaoChiNoiVeBDS_Reuse>
                    </SplideSlide>
                    <SplideSlide>
                        <BaoChiNoiVeBDS_Reuse Imgelement={BC6}></BaoChiNoiVeBDS_Reuse>
                    </SplideSlide>
                </Splide>
            </div>
            <div className="Option_BaoChinoiveBDS">
                <div>
                    <div className="Option_BaoChinoiveBDS1">
                        <a href=""><img src="https://staticfile.batdongsan.com.vn/images/box-link-footer/ForSale.svg"></img></a>
                        <h3>Bất động sản bán</h3>
                        <p className="TextBC">
                            Bạn có thể tìm thấy ngôi nhà mơ ước hoặc cơ hội đầu tư hấp
                            dẫn thông qua lượng tin rao lớn, uy tín về các loại hình
                            <a href="" className="Link_BC_BDS">bất động sản bán</a>
                            tại Việt Nam, bao gồm bán nhà riêng,
                            <a href="" className="Link_BC_BDS">bán nhà mặt tiền</a>
                            bán căn hộ chung cư, bán biệt thự, bán đất,
                            <a href="" className="Link_BC_BDS"> bán shophouse</a>
                            và các loại hình BĐS khác.</p>
                    </div>
                </div>
                <div className="Option_BaoChinoiveBDS2">
                    <div className="Option_BaoChinoiveBDS1">
                        <a href=""><img src="https://staticfile.batdongsan.com.vn/images/box-link-footer/ForRent.svg"></img></a>
                        <h3>Bất động sản cho thuê</h3>
                        <p>Cập nhật thường xuyên và đầy đủ các loại hình <a href="" className="Link_BC_BDS">bất động sản cho thuê</a> như: thuê phòng trọ, nhà riêng, <a href="" className="Link_BC_BDS">thuê biệt thự</a>, văn phòng, kho xưởng hay thuê mặt bằng kinh doanh giúp bạn nhanh chóng tìm được bất động sản ưng ý.</p>
                    </div>
                </div>
                <div className="Option_BaoChinoiveBDS2">
                    <div className="Option_BaoChinoiveBDS1">
                        <a href=""><img src="https://staticfile.batdongsan.com.vn/images/box-link-footer/Projects.svg"></img></a>
                        <h3>Đánh giá dự án</h3>
                        <p>Các <a href="" className="Link_BC_BDS">video đánh giá</a> tổng quan dự án cung cấp góc nhìn khách quan của các chuyên gia về những dự án nổi bật tại Việt Nam, giúp bạn đưa ra quyết định đúng đắn cho nơi an cư lý tưởng hoặc cơ hội đầu tư sinh lời.</p>
                    </div>
                </div>
                <div className="Option_BaoChinoiveBDS2">
                    <div className="Option_BaoChinoiveBDS1">
                        <a href=""><img src="https://staticfile.batdongsan.com.vn/images/box-link-footer/Wiki.svg"></img></a>
                        <h3>Wiki BĐS</h3>
                        <p>Ngoài cập nhật những biến động thị trường, chúng tôi còn cung cấp kiến ​​thức, kinh nghiệm về mua bán, cho thuê, đầu tư, vay mua nhà, <a href="" className="Link_BC_BDS">phong thủy</a>, thiết kế nhà, mọi thông tin cần thiết để dẫn lối người tìm nhà tìm thấy căn nhà mơ ước.</p>
                    </div>
                </div>
            </div>
            
        </div >

    )
}

export default BaoChiNoiVeBDS;