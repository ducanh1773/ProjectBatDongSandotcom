import React from "react";
import './index.css'
import Header from "../../Header/Main_header";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";
import Option_2 from "../../SearchEngine/SearchEgine_2/option/Option_2";
import Option_3 from "../../SearchEngine/SearchEgine_2/option/Option_3";
import Option_4 from "../../SearchEngine/SearchEgine_2/option/Option_4";
import Option1 from '../../SearchEngine/SearchEgine_2/option/Option_1'
import Tippy from "@tippyjs/react";
import OptionMainProject from '../OptionMainProject'
import LastIntroduceMain from '../../Last_Introduce_Main'
import Introduce_BDS_Main from '../../Introduce_BDS'
import ToggleElementChild from "../../Introduce_BDS/ShowElement_2";
import ToggleElement from "../../Introduce_BDS/Introduce_BDS2/ShowElement";
function ProjectBDSMain() {
    const ImgElement1 = [{
        link: '', imgUrl: 'https://file4.batdongsan.com.vn/crop/240x180/2023/07/28/20230728090248-d2a0_wm.jpg'
        , imgUrl2: 'https://file4.batdongsan.com.vn/2023/07/28/20230728090240-4b41_wm.jpg', imgUrl3: 'https://file4.batdongsan.com.vn/2023/07/28/20230728085646-b799_wm.jpg',
        name: 'Sapa Heritage', TimeNews: 'Đang mở bán', acreage: '1,15ha', location: 'Đường điện biên phủ , phường Sa Pa , Thị xã Sa pa , lào cai',
        describe: ' là tổ hợp 97 căn shophouse, boutique hotel và serviced apartment (căn hộ dịch vụ) được chủ đầu tư Tổng Công ty 36 – CTCP triển khai tại Sa Pa, Lào Cai. Dự án được phát triển với định hướng trở thành "Tổ hợp giải trí tương lai" - một biểu tượng mới của xứ sở sương mù, mang đến những trải nghiệm nghỉ dưỡng đặc sắc và hứa hẹn những cơ hội đầu tư, kinh doanh sinh lời hấp dẫn tại thủ phủ du lịch Sa Pa.'
    }]


    const [showElement, setShowElement] = useState(false)
    const [showElement2, setShowElemen2] = useState(false)
    const [showElement3, setShowElement3] = useState(false)
    const [showElement4, setShowElement4] = useState(false)
    const [showElement5, setShowElement5] = useState(false)
    const LinkElement1 = [{ name: 'Mua bất động sản', link: '' },
    { name: 'Bán bất động sản', link: '' },
    { name: 'Thuê bất động sản', link: '' },
    { name: 'Quy hoạch - Pháp lý', link: '' },
    { name: 'Tài chính', link: '' },
    { name: 'Video đánh giá', link: '' }]
    const LinkElementChild1 = [{ name: 'Bán căn hộ chung cư Đà Nẵng ', link: '' },
    { name: 'Bán căn hộ chung cư Bình Dương', link: '' },
    { name: 'Bán căn hộ chung cư  Hải Phòng ', link: '' },
    { name: 'Bán căn hộ chung cư Long An', link: '' },
    { name: 'Bán căn hộ chung cư Đồng Nai', link: '' },
    { name: 'Bán căn hộ chung cư Vũng Tàu', link: '' },
    { name: 'Bán căn hộ chung cư Vũng Tàu', link: '' },
    { name: 'Bán căn hộ chung cư Quảng Ninh', link: '' },
    { name: 'Bán căn hộ chung cư Quảng Nam', link: '' },
    { name: 'Bán căn hộ chung cư Khánh Hòa', link: '' },]
    const LinkElementChild2 = [
        { name: 'Bán nhà riêng Đà Nẵng ', link: '' },
        { name: 'Bán nhà riêng Bình Dương', link: '' },
        { name: 'Bán nhà riêng  Hải Phòng ', link: '' },
        { name: 'Bán nhà riêng Long An', link: '' },
        { name: 'Bán nhà riêng Đồng Nai', link: '' },
        { name: 'Bán nhà riêng Vũng Tàu', link: '' },
        { name: 'Bán nhà riêng Vũng Tàu', link: '' },
        { name: 'Bán nhà riêng Quảng Ninh', link: '' },
        { name: 'Bán nhà riêng Quảng Nam', link: '' },
        { name: 'Bán nhà riêng Khánh Hòa', link: '' },]

    const handleClick = () => {
        setShowElement(!showElement)
        setShowElemen2(false)
        setShowElement3(false)
        setShowElement4(false)
        setShowElement5(false)

    }

    const handleClick2 = () => {
        setShowElement(false)
        setShowElemen2(!showElement2)
        setShowElement4(false)
        setShowElement3(false)
        setShowElement5(false)

    }

    const handleClick3 = () => {
        setShowElement(false)
        setShowElemen2(false)
        setShowElement4(false)
        setShowElement3(!showElement3)
        setShowElement5(false)
    }

    const handleClick4 = () => {
        setShowElement(false)
        setShowElemen2(false)
        setShowElement3(false)
        setShowElement4(!showElement4)
        setShowElement5(false)

    }

    const handleClick5 = () => {
        setShowElement5(!showElement5)
        setShowElement(false)
        setShowElemen2(false)
        setShowElement3(false)
        setShowElement4(false)
    }
    return (
        <div>
            <div className="HeaderProjectMain">
                <Header></Header>
            </div>
            <div>

                <Splide options={{ type: 'loop', width: '100%', rewind: true }}>
                    <SplideSlide>
                        <div className="ImgOnProjectMain">
                            <img className="ImgOnProject" src='https://file4.batdongsan.com.vn/2023/06/28/20230628205548-3198_wm.jpg'></img>
                        </div>
                        <div style={{ paddingLeft: '40px', position: 'absolute' }}>
                            <div className="TimeSellProjectMain">
                                <p className="TimeSellProject">Sắp mở bán - </p>
                                <p className="TimeSellProject2">Dự kiến tháng 7/2023 mở bán</p>

                            </div>
                            <div className="NameProjectHeader">
                                <h1>Imperial Oasis Quy Nhơn</h1>
                                <p>Xã Cát Tiến , Huyện Phù Cát, Bình Định</p>
                            </div>
                        </div>
                    </SplideSlide>


                    <SplideSlide>
                        <div className="ImgOnProjectMain">
                            <img className="ImgOnProject" src='https://file4.batdongsan.com.vn/2022/01/24/20220124150132-9e19.jpg'></img>
                        </div>
                        <div style={{ paddingLeft: '40px', position: 'absolute' }}>
                            <div className="TimeSellProjectMain">
                                <p className="TimeSellProject">Đã bàn giao</p>

                            </div>
                            <div className="NameProjectHeader">
                                <h1>Imperial Oasis Quy Nhơn</h1>
                                <p>Số 90 Nguyễn Hữu Cảnh,phường 22, quận Bình Thạnh , Tp.HCM </p>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="ImgOnProjectMain">
                            <img className="ImgOnProject" src='https://file4.batdongsan.com.vn/2022/08/16/20220816165457-f173_wm.jpg'></img>
                        </div>
                        <div style={{ paddingLeft: '40px' }}>
                            <div className="TimeSellProjectMain" style={{ position: 'absolute' }}>
                                <p className="TimeSellProject">Đang mở bán - 23/7/2023 mở bán tiếp GĐ2</p>

                            </div>
                            <div className="NameProjectHeader" style={{ paddingTop: '20px' }}>
                                <h1>Zeit River Thủ Thiêm</h1>
                                <p>Phường An Khánh , Quận 2, Hồ Chí Minh</p>
                            </div>
                        </div>
                    </SplideSlide>

                </Splide>
            </div>
            <div>
                <div className="SearchAndOptionProjectMain1">
                    <div className="SearchAndOptionProject" >
                        <div className="SearchAndOptionProject1">
                            <div className="SearchAndOptionProjectMain">
                                <div style={{ paddingLeft: '20px' }}>
                                    <div className="SearchOnProject" >
                                        <box-icon name='search-alt-2'></box-icon>
                                        <input type="search" className="SearchProject" placeholder="Tìm kiếm dự án..."></input>
                                    </div>
                                </div>
                                <div className="MainAllOptionProject">
                                    <div className="LineOptionProject"></div>
                                    <div className="AllOptionProject" onClick={handleClick}>
                                        <div className="OptionProject">
                                            <p>Khu vực</p>
                                            <div><box-icon type='solid' name='chevron-down'></box-icon></div>
                                        </div>
                                        <p>Toàn quốc</p>
                                    </div>
                                </div>
                                <div className="MainAllOptionProject">
                                    <div className="LineOptionProject" style={{ margin: '0' }}></div>
                                    <div className="AllOptionProject" onClick={handleClick2}>
                                        <div className="OptionProject">
                                            <p>Loại hình</p>
                                            <div><box-icon type='solid' name='chevron-down'></box-icon></div>
                                        </div>
                                        <p>Tất cả</p>
                                    </div>
                                </div>
                                <div className="MainAllOptionProject">
                                    <div className="LineOptionProject" style={{ margin: '0' }}></div>
                                    <div className="AllOptionProject" onClick={handleClick3}>
                                        <div className="OptionProject">
                                            <p>Mức giá</p>
                                            <div><box-icon type='solid' name='chevron-down'></box-icon></div>
                                        </div>
                                        <p>Tất cả</p>
                                    </div>
                                </div>
                                <div className="MainAllOptionProject">
                                    <div className="LineOptionProject" style={{ margin: '0' }}></div>
                                    <div className="AllOptionProject" onClick={handleClick4}>
                                        <div className="OptionProject">
                                            <p>Trạng thái</p>
                                            <div><box-icon type='solid' name='chevron-down'></box-icon></div>
                                        </div>
                                        <p>Tất cả</p>
                                    </div>
                                </div>
                                <div>

                                    <div className=" RefreshOptionOnProject" style={{ margin: '0' }}>
                                        <div className="LineOptionProject" style={{ margin: '0', marginRight: '18px' }}></div>
                                        <a href="http://localhost:3000/">
                                            <Tippy content="Xóa tiêu chí lọc">
                                                <box-icon name='refresh' ></box-icon>
                                            </Tippy>
                                        </a>
                                    </div>

                                </div>

                            </div>

                            <div className="AllOptionProjectInButton">
                                <div>
                                    {showElement &&
                                        <div className="LocationOptionProject">
                                            <input type="search" placeholder="Tìm tỉnh/Thành phố"></input>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>



                                        </div>}
                                </div>
                                {showElement2 &&
                                    <div className="OptionHouseProject">
                                        <a href="">
                                            <div className="OptioneHouseOnProjectMain" >

                                                <box-icon name='building-house' ></box-icon>
                                                <p>Tất cả các loại hình</p>

                                            </div>
                                        </a>
                                        <a href="">
                                            <div >

                                                <box-icon name='building-house' ></box-icon>
                                                <p>Tất cả các loại hình</p>

                                            </div>
                                        </a>
                                        <a href="">
                                            <div style={{ display: 'flex', paddingBottom: '15px', paddingTop: '15px', borderTop: '1px solid rgb(231 231 231)' }}>

                                                <box-icon name='building-house' ></box-icon>
                                                <p>Tất cả các loại hình</p>

                                            </div>
                                        </a>
                                        <a href="">
                                            <div style={{ display: 'flex', paddingBottom: '15px', paddingTop: '15px', borderTop: '1px solid rgb(231 231 231)' }}>

                                                <box-icon name='building-house' ></box-icon>
                                                <p>Tất cả các loại hình</p>

                                            </div>
                                        </a>
                                        <a href="">
                                            <div style={{ display: 'flex', paddingBottom: '15px', paddingTop: '15px', borderTop: '1px solid rgb(231 231 231)' }}>

                                                <box-icon name='building-house' ></box-icon>
                                                <p>Tất cả các loại hình</p>

                                            </div>
                                        </a>
                                        <a href="">
                                            <div style={{ display: 'flex', paddingBottom: '15px', paddingTop: '15px', borderTop: '1px solid rgb(231 231 231)' }}>

                                                <box-icon name='building-house' ></box-icon>
                                                <p>Tất cả các loại hình</p>

                                            </div>
                                        </a>
                                        <a href="">
                                            <div style={{ display: 'flex', paddingBottom: '15px', paddingTop: '15px', borderTop: '1px solid rgb(231 231 231)' }}>

                                                <box-icon name='building-house' ></box-icon>
                                                <p>Tất cả các loại hình</p>

                                            </div>
                                        </a>
                                        <a href="">
                                            <div style={{ display: 'flex', paddingBottom: '15px', paddingTop: '15px', borderTop: '1px solid rgb(231 231 231)' }}>

                                                <box-icon name='building-house' ></box-icon>
                                                <p>Tất cả các loại hình</p>

                                            </div>
                                        </a>
                                    </div>}
                                <div>
                                    {showElement3 &&
                                        <div className="OptionPriceProject">
                                            <input type="search" placeholder="Tìm tỉnh/Thành phố"></input>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>
                                            <a href=""><p>Hà Nội</p></a>
                                            <a href=""><p>Thành Phố Hồ Chí Minh</p></a>
                                            <a href=""><p>Thái Bình</p></a>
                                            <a href=""><p>Lạng Sơn</p></a>



                                        </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div  className="SubjectOnProject2">
                <div style={{ display: 'flex' }}>
                    <p style={{ color: 'rgb(117 115 115);' }}>Dự án/</p>
                    <p >Dự án BĐS toàn quốc</p>
                </div>
                <div>
                    <h2 style={{ fontWeight: '600', margin: '0' }}>Dự án toàn quốc</h2>

                </div>
                <div style={{ display: 'flex' }} onClick={handleClick5}>
                    <p className="NumberOfProjectInBDS">Hiện đang có 5.421 dự án</p>
                    <div className="OptionNewsProject">
                        <p style={{ paddingLeft: '10px', paddingRight: '30px' }}>Mới nhất</p>
                        <box-icon name='chevron-down' type='solid' ></box-icon>
                    </div>
                </div>
            </div>
            {showElement5 && <div className="OptionNewsProjectMain">
                <p>Mới nhất</p>
                <p>Mới cập nhật</p>
                <p>Gía cao nhất</p>
                <p>Gía thấp nhất</p>
            </div>}
            <div  className="AllOptionProjectShow">
                <div>
                    <div className="OptioneProjectMain">
                        <OptionMainProject ImgElement={ImgElement1}></OptionMainProject>
                    </div>
                    <div className="OptioneProjectMain">
                        <OptionMainProject ImgElement={ImgElement1}></OptionMainProject>
                    </div>
                    <div className="OptioneProjectMain">
                        <OptionMainProject ImgElement={ImgElement1}></OptionMainProject>
                    </div>
                    <div className="OptioneProjectMain">
                        <OptionMainProject ImgElement={ImgElement1}></OptionMainProject>
                    </div>
                    <div className="OptioneProjectMain">
                        <OptionMainProject ImgElement={ImgElement1}></OptionMainProject>
                    </div>
                    <div className="OptioneProjectMain">
                        <OptionMainProject ImgElement={ImgElement1}></OptionMainProject>
                    </div>
                    <div className="OptioneProjectMain">
                        <OptionMainProject ImgElement={ImgElement1}></OptionMainProject>
                    </div>
                    <div className="OptioneProjectMain">
                        <OptionMainProject ImgElement={ImgElement1}></OptionMainProject>
                    </div>
                    <div className="OptioneProjectMain">
                        <OptionMainProject ImgElement={ImgElement1}></OptionMainProject>
                    </div>

                </div>
                <div className="AllEvaluteProject">
                    <div className="EvaluteProject">
                        <h4>Đánh giá dự án</h4>

                        <a href="" className="">
                            <p>Xem tất cả </p>
                            <box-icon name='right-arrow-alt' size='18px' color='red'></box-icon>
                        </a>
                    </div>
                    <div className="EvaluteImage">
                        <Splide options={{ type: 'loop', width: '360px', rewind: 'true' }}>
                            <SplideSlide>
                                <a href="" style={{ textDecoration: 'none' }}>
                                    <div>
                                        <div className="ImgProjectExtraMain">
                                            <img src="https://file4.batdongsan.com.vn/crop/360x240/2023/02/02/eCGLjNi5/20230202141255-6e8f.jpg" className="ImgProjectExtra"></img>
                                        </div>
                                        <div className="SubJectProjectExtra">
                                            <h4>Những dự án view sông sài gòn tại thủ thiêm</h4>
                                            <p>
                                                6 tháng trưỡc
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </SplideSlide>
                            <SplideSlide>
                                <a href="" style={{ textDecoration: 'none' }}>
                                    <div>
                                        <div className="ImgProjectExtraMain">
                                            <img src="https://file4.batdongsan.com.vn/crop/360x240/2022/09/28/YSUn3oGJ/20220928185742-20ab.jpg" className="ImgProjectExtra"></img>
                                        </div>
                                        <div className="SubJectProjectExtra">
                                            <h4>BRG Diamond Residence - viên kim cương xanh phía Tây Hà Nội</h4>
                                            <p>
                                                10 tháng trưỡc
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </SplideSlide>
                            <SplideSlide style={{ textDecoration: 'none' }}>
                                <a href="">
                                    <div>
                                        <div className="ImgProjectExtraMain">
                                            <img src="https://file4.batdongsan.com.vn/crop/360x240/2023/02/02/eCGLjNi5/20230202141255-6e8f.jpg" className="ImgProjectExtra"></img>
                                        </div>
                                        <div className="SubJectProjectExtra">
                                            <h4>Những dự án view sông sài gòn tại thủ thiêm</h4>
                                            <p>
                                                6 tháng trưỡc
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </SplideSlide>
                        </Splide>
                    </div>
                    <div className="NewsOnProject">
                        <div  className="NewsOnProject1">
                            <h4>Tin tức</h4>

                            <a href="" className="" style={{ textDecoration: 'none' }}>
                                <p style={{ color: 'red' }}>Xem tất cả </p>
                                <box-icon name='right-arrow-alt' size='18px' color='red'></box-icon>
                            </a>
                        </div>

                        <div>
                            <a href="" style={{ textDecoration: 'none' }}>
                                <div style={{ display: 'flex' }} className="NewsOnProjectMainExtra">
                                    <div>
                                        <img src="https://img.iproperty.com.my/angel/118x84-crop/wp-content/uploads/sites/7/2023/08/ak2-scaled.jpg"></img>
                                    </div>
                                    <div className="NewsOnProjectExtra">
                                        <h5>Nhiều dự án căn hộ chung cư đã có giao dịch trở lại</h5>
                                        <p>Hôm nay</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="" style={{ textDecoration: 'none' }}>
                                <div style={{ display: 'flex' }} className="NewsOnProjectMainExtra">
                                    <div>
                                        <img src="https://img.iproperty.com.my/angel/118x84-crop/wp-content/uploads/sites/7/2023/08/20230504150305-89fe_wm.jpg"></img>
                                    </div>
                                    <div className="NewsOnProjectExtra">
                                        <h5>Biến động giá nhà quận 10 trong 5 năm qua ra sao ?</h5>
                                        <p>Hôm nay</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="" style={{ textDecoration: 'none' }}>
                                <div style={{ display: 'flex' }} className="NewsOnProjectMainExtra">
                                    <div>
                                        <img src="https://img.iproperty.com.my/angel/118x84-crop/wp-content/uploads/sites/7/2023/08/ak2-scaled.jpg"></img>
                                    </div>
                                    <div className="NewsOnProjectExtra">
                                        <h5>Nhiều dự án căn hộ chung cư đã có giao dịch trở lại</h5>
                                        <p>Hôm nay</p>
                                    </div>
                                </div>
                            </a>
                        </div>


                    </div>
                </div>

            </div>
            <div className="IntroduceProjectMain">
                <div>
                    <div className="AllOption_Introduce3">
                        <h3 className="Subject_Introduce">Chủ đề nổi bật</h3>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Tin tức bất động sản</p></a>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Bất động sản Hà Nội</p></a>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Bất động sản Hồ Chí Minh</p></a>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Báo cáo thị trường</p></a>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Mua bất động sản</p></a>
                        <ToggleElement LinkElement={LinkElement1}></ToggleElement>
                    </div>
                </div>
                <div>
                    <div className="AllOption_Introduce3">
                        <h3 className="Subject_Introduce">Chủ đề nổi bật</h3>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Tin tức bất động sản</p></a>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Bất động sản Hà Nội</p></a>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Bất động sản Hồ Chí Minh</p></a>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Báo cáo thị trường</p></a>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Mua bất động sản</p></a>
                        <ToggleElement LinkElement={LinkElement1}></ToggleElement>
                    </div>
                </div>
                <div>
                    <div className="AllOption_Introduce3">
                        <h3 className="Subject_Introduce">Chủ đề nổi bật</h3>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Tin tức bất động sản</p></a>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Bất động sản Hà Nội</p></a>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Bất động sản Hồ Chí Minh</p></a>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Báo cáo thị trường</p></a>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Mua bất động sản</p></a>
                        <ToggleElement LinkElement={LinkElement1}></ToggleElement>
                    </div>
                </div>
                <div>
                    <div className="AllOption_Introduce3">
                        <h3 className="Subject_Introduce">Chủ đề nổi bật</h3>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Tin tức bất động sản</p></a>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Bất động sản Hà Nội</p></a>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Bất động sản Hồ Chí Minh</p></a>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Báo cáo thị trường</p></a>
                        <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Mua bất động sản</p></a>
                        <ToggleElement LinkElement={LinkElement1}></ToggleElement>
                    </div>
                </div>
            </div>

            <div>
                <LastIntroduceMain></LastIntroduceMain>
            </div>

        </div>
    )
}

export default ProjectBDSMain