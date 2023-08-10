import React from "react";
import Header from "../../../Header/Main_header"
import { useState, useEffect } from "react";
import './index.css'
import Option1 from '../../../SearchEngine/SearchEgine_2/option/Option_1'
import Option_3 from '../../../SearchEngine/SearchEgine_2/option/Option_3'
import Option_4 from "../../../SearchEngine/SearchEgine_2/option/Option_4";
import Tippy from "@tippyjs/react";
import NhaDatBanMain from "../NhaDatBanMain";
import LastIntroduceMain from "../../../Last_Introduce_Main";
function HeaderNhaDatBan() {

    const ElementNDB1 = [{
        imgUrl: 'https://file4.batdongsan.com.vn/resize/1275x717/2023/07/29/20230729162038-29a2_wm.jpg', imgUrl2: 'https://file4.batdongsan.com.vn/resize/200x200/2023/07/28/20230728105619-a8b4_wm.jpg', imgUrl3: 'https://file4.batdongsan.com.vn/resize/200x200/2023/07/28/20230728110026-c5fb_wm.jpg', imgUrl4: 'https://file4.batdongsan.com.vn/resize/200x200/2023/07/28/20230728110036-8d2f_wm.jpg', name: 'bán gấp biệt thự ngọc trai vinhoomes ocean park-310 m2-Đã có sổ đỏ-47 tỷ',
        price: '47 tỷ -  ', acreage: '310 m  ', priceOnMeter: '- 151,61 tr/m', location: 'Gia Lâm , Hà Nội', describe: 'Cần thanh lý gấp nên chủ nhà bán cắt lỗ 13 tỷ căn biệt thự Ngọc Trai Vinhomes Ocean Park 1 Gia Lâm. Đây là 1 trong số ít những căn Biệt Thự đảo Ngọc Trai có diện tích rộng nhất cả dự án, cách 2 bước chân là đến công viên ven sông và vườn nướng BBQ.',
        ImgHost: 'https://tse1.mm.bing.net/th?id=OIP.f3DM2upCo-p_NPRwBAwbKQHaHa&pid=Api&rs=1&c=1&qlt=95&w=114&h=114', host: 'Chủ nhà', phoneHide: '0981 1707 ***', phone: '0981170703', numberImg: '20', link: '', TimeNews: 'Đăng hôm nay'
    }
    ]


    const [showElement, setShowElement] = useState(false)
    const [showElement2, setShowElemen2] = useState(false)
    const [showElement3, setShowElement3] = useState(false)
    const [showElement4, setShowElement4] = useState(false)
    const [showElement5, setShowElement5] = useState(false)
    const [showElement6, setShowElement6] = useState(false)
    const [showlocationNDB, setShowlocationNDB] = useState(false)
    const [showButton, setShowButton] = useState(true)
    const [hideButton, setHideButton] = useState(false)
    const handleClickShowlocationNDB = () => {
        setShowlocationNDB(true)
        setShowButton(false)
        setHideButton(true)

    }

    const handleClickHideOptionButton = () => {
        setShowlocationNDB(false)
        setHideButton(false)
        setShowButton(true)

    }



    const handleClick = () => {
        setShowElement(!showElement)
        setShowElemen2(false)
        setShowElement3(false)
        setShowElement4(false)
        setShowElement5(false)
        setShowElement6(false)
    }

    const handleClick2 = () => {
        setShowElement(false)
        setShowElemen2(!showElement2)
        setShowElement4(false)
        setShowElement3(false)
        setShowElement5(false)
        setShowElement6(false)
    }

    const handleClick3 = () => {
        setShowElement(false)
        setShowElemen2(false)
        setShowElement3(!showElement3)
        setShowElement4(false)
        setShowElement5(false)
        setShowElement6(false)
    }

    const handleClick4 = () => {
        setShowElement(false)
        setShowElemen2(false)
        setShowElement3(false)
        setShowElement4(!showElement4)
        setShowElement5(false)
        setShowElement6(false)
    }

    const handleClick5 = () => {
        setShowElement(false)
        setShowElemen2(false)
        setShowElement3(false)
        setShowElement4(false)
        setShowElement5(!showElement5)
        setShowElement6(false)
    }

    const handleClick6 = () => {
        setShowElement(false)
        setShowElemen2(false)
        setShowElement3(false)
        setShowElement4(false)
        setShowElement5(false)
        setShowElement6(!showElement6)
    }




    const [BackgroundColor, setBackgroundColor] = useState(true)
    const [BackgroundColor2, setBackgroundColor2] = useState(false)


    const ClickChangeBackgr = () => {
        setBackgroundColor(true)
        setBackgroundColor2(false)
    }

    const ClickChangeBackgr2 = () => {
        setBackgroundColor(false)
        setBackgroundColor2(true)
    }

    const [placeholder, setplaceholder] = [["Quận Hải Châu",
        "Dự án Ecopark",
        "Đường Võ Văn Kiệt",
        "Quận Cầu Giấy"]]



    const [showOptionNDB, setShowOptionNDB] = useState(false)

    const handleClickShowOption = () => {
        setShowOptionNDB(true)
    }

    const handleClickHideOption = () => {
        setShowOptionNDB(false)
        setShowElement(false)
        setShowElemen2(false)
        setShowElement3(false)
        setShowElement4(false)
        setShowElement5(false)
        setShowElement6(false)
    }

    const [LetterNow, setLetterNow] = useState("")
    const [number, setNumber] = useState(0)
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < placeholder.length - 1) {
                setIndex(prevIndex => prevIndex + 1);
                setLetterNow('')
            } else if (index === placeholder.length - 1) {
                setIndex(prevIndex => prevIndex - prevIndex)
                setLetterNow('')

            }
            else {
                clearInterval(interval);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [placeholder, index]);

    useEffect(() => {
        const fullStr = placeholder[index];
        const delayTime = 2000 / Math.max(fullStr.length, 1)

        const interval = setTimeout(() => {
            const newLength = Math.min(LetterNow.length + 1, fullStr.length);
            setLetterNow(fullStr.slice(0, newLength));

        }, delayTime);

        return () => clearTimeout(interval);
    }, [index, LetterNow])

    // const MyComponent = () => {
    //     const [array, setArray] = useState([1, 2, 3, 4, 5]);
    //     const [index, setIndex] = useState(0);

    //     useEffect(() => {
    //       const interval = setInterval(() => {
    //         if (index < array.length - 1) {
    //           setIndex(prevIndex => prevIndex + 1);
    //         } else {
    //           clearInterval(interval);
    //         }
    //       }, 4000);

    //       return () => clearInterval(interval);
    //     }, [array, index]);

    //     return (
    //       <div>
    //         {array[index]}
    //       </div>
    //     );
    //   }

    //   export default MyComponent;






    return (
        <div>
            <div style={{position:'sticky' , top:'0'}} className="HeaderMainNDB">
                <div><Header></Header></div>
                <div className="HeaderNDB2" >
                    <div className="OptionNDB" style={{ display: 'flex' }}>
                        <button onClick={ClickChangeBackgr} className={"OptionNDB1" && BackgroundColor ? "ChangeBackgr" : "OptionNDB1"} >Bán</button>
                        <button onClick={ClickChangeBackgr2} className={"OptionNDB1" && BackgroundColor2 ? "ChangeBackgr1" : "OptionNDB2"}>Cho thuê</button>
                    </div>
                    <div className="SearchNhaDatBanMain">
                        <div className="SearchNhaDatBan">
                            <div className="IconSearchNDB"><box-icon name='search' size='20px'></box-icon></div>
                            <input type="text" placeholder={LetterNow} className="SearchNhaDatBan1"></input>
                        </div>
                    </div>
                    <div className="AllOptionNDBMain" >
                        <div className="AllOptionSearchNDB" onClick={handleClick} >
                            <div className="LineOption">

                            </div>
                            <div className="AllOptionSearchNDB1" >
                                <div className="AllOptionSearchNDB2">
                                    <div>
                                        <div className="OptionSearchNDB">
                                            <p className="OptionNDBLetter">Loại nhà đất</p>
                                            <div className="IconOptionSearchNDB" ><box-icon name='chevron-down' color='#736d6d' ></box-icon></div>
                                        </div>
                                    </div>
                                    <p className="OptionNDBLetter1">Tất cả</p>
                                </div>
                            </div>
                        </div>

                        <div className="AllOptionSearchNDB" onClick={handleClick2}>
                            <div className="LineOption">

                            </div>
                            <div className="AllOptionSearchNDB1" >
                                <div className="AllOptionSearchNDB2">
                                    <div>
                                        <div className="OptionSearchNDB">
                                            <p className="OptionNDBLetter">Khu vực & dự án </p>
                                            <div className="IconOptionSearchNDB" ><box-icon name='chevron-down' color='#736d6d' ></box-icon></div>
                                        </div>
                                    </div>
                                    <p className="OptionNDBLetter1">Toàn quốc</p>
                                </div>
                            </div>
                        </div>
                        <div className="AllOptionSearchNDB" onClick={handleClick3}>
                            <div className="LineOption">

                            </div>
                            <div className="AllOptionSearchNDB1">
                                <div className="AllOptionSearchNDB2">
                                    <div>
                                        <div className="OptionSearchNDB">
                                            <p className="OptionNDBLetter">Mức giá</p>
                                            <div className="IconOptionSearchNDB" ><box-icon name='chevron-down' color='#736d6d' ></box-icon></div>
                                        </div>
                                    </div>
                                    <p className="OptionNDBLetter1">Tất cả</p>
                                </div>
                            </div>
                        </div>
                        <div className="AllOptionSearchNDB" onClick={handleClick4} >
                            <div className="LineOption">

                            </div>
                            <div className="AllOptionSearchNDB1">
                                <div className="AllOptionSearchNDB2">
                                    <div>
                                        <div className="OptionSearchNDB">
                                            <p className="OptionNDBLetter">Diện tích</p>
                                            <div className="IconOptionSearchNDB" ><box-icon name='chevron-down' color='#736d6d' ></box-icon></div>
                                        </div>
                                    </div>
                                    <p className="OptionNDBLetter1">Tất cả</p>
                                </div>
                            </div>
                        </div>

                        <div className="AllOptionSearchNDB" onClick={handleClick5}>
                            <div className="LineOption">

                            </div>
                            <div className="AllOptionSearchNDB1">
                                <div className="AllOptionSearchNDB2">
                                    <div className="MoreOptioneNDB">
                                        <box-icon name='bar-chart-alt-2' ></box-icon>
                                        <p>Lọc thêm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="AllOptionSearchNDB">
                            <div className="LineOption">

                            </div>
                            <a href="http://localhost:3000/" style={{ textDecoration: 'none', color: 'black' }}>
                                <div className="AllOptionSearchNDB1">
                                    <div className="AllOptionSearchNDB2">
                                        <div className="MoreOptioneNDB">
                                            <box-icon name='refresh' ></box-icon>
                                            <p>Đặt lại</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
                <div style={{paddingTop:'10px'}}>
                    <div className="LineHeaderNDB">

                    </div>
                </div>
                <div className="AllOptionNDB">

                    {showElement &&
                        <div className="OptionNDBSearch1">
                            <Option1></Option1>
                        </div>}
                    {showElement2 &&
                        < div className="OptionNDBSearch2">
                            <Option_3></Option_3>
                        </div>
                    }

                    {showElement3 &&
                        <div className="OptionNDBSearch3">
                            <Option_3></Option_3>
                        </div >
                    }
                    {showElement4 &&
                        <div className="OptionNDBSearch4">
                            <Option_4></Option_4>
                        </div>}
                    {showElement5 &&
                        <div className="OptionNDBSearch5">
                            <Option_4></Option_4>
                        </div>}


                </div>
            </div>
            <div className="MainSearchNDB">
                <div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <p>Bán / </p><p> Tất cả BĐS trên toàn quốc </p>
                        </div>
                        <div>
                            <h2 className="SubjectNDB">Mua bán nhà đất trên toàn quốc</h2>
                        </div>

                    </div>
                    <div className="NumberNDB">
                        <div className="NumberNDB1">
                            <p>Hiện có 144.762 bất động sản</p>
                        </div>

                        <div className="ButtonIconNDBMain">
                            <Tippy content="Danh sách">
                                <div className="ButtonIconNDB"><box-icon name='list-ul'></box-icon></div>
                            </Tippy>
                            <Tippy content="Xem trên bản đồ">
                                <div className="ButtonIconNDB2"><box-icon name='map-alt' ></box-icon></div>
                            </Tippy>
                            <div>
                                <div style={{ paddingLeft: '20px' }}>
                                    <div className="OptionNDBOnMain" onClick={handleClickShowOption}  >
                                        <p className="LetterOptionNDB2">Thông thường</p>
                                        <box-icon name='chevron-down' type='solid' color='#8d8686' ></box-icon>

                                    </div>
                                    {showOptionNDB && <div className="OptionMainNDB">
                                        <p>Thông thường</p>
                                        <p>Tin xác thực xếp trước</p>
                                        <p>Tin mới nhất</p>
                                        <p>Gía thấp đến cao</p>
                                        <p>Gía cao đến thấp</p>
                                        <p>Gía trên m<sup>2</sup> thấp đến cao</p>
                                        <p>Gía trên m<sup>2</sup> cao đến thấp</p>
                                        <p>Diện tích bé đến lớn</p>
                                        <p>Diện tích lớn đến bé</p>

                                    </div>}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="MainNDB">
                    <div>
                        <div className="MainNDB1">
                            <NhaDatBanMain ElementNDB={ElementNDB1}></NhaDatBanMain>
                        </div>
                        <div className="MainNDB1">
                            <NhaDatBanMain ElementNDB={ElementNDB1}></NhaDatBanMain>
                        </div>
                        <div className="MainNDB1">
                            <NhaDatBanMain ElementNDB={ElementNDB1}></NhaDatBanMain>
                        </div>
                        <div className="MainNDB1">
                            <NhaDatBanMain ElementNDB={ElementNDB1}></NhaDatBanMain>
                        </div>
                        <div className="MainNDB1">
                            <NhaDatBanMain ElementNDB={ElementNDB1}></NhaDatBanMain>
                        </div>
                        <div className="MainNDB1">
                            <NhaDatBanMain ElementNDB={ElementNDB1}></NhaDatBanMain>
                        </div>
                        <div className="MainNDB1">
                            <NhaDatBanMain ElementNDB={ElementNDB1}></NhaDatBanMain>
                        </div>
                        <div className="MainNDB1">
                            <NhaDatBanMain ElementNDB={ElementNDB1}></NhaDatBanMain>
                        </div>
                        <div className="MainNDB1">
                            <NhaDatBanMain ElementNDB={ElementNDB1}></NhaDatBanMain>
                        </div>
                        <div className="MainNDB1">
                            <NhaDatBanMain ElementNDB={ElementNDB1}></NhaDatBanMain>
                        </div>
                        <div className="MainNDB1">
                            <NhaDatBanMain ElementNDB={ElementNDB1}></NhaDatBanMain>
                        </div>
                    </div>
                    <div style={{ paddingLeft: '30px' }}>

                        <div className="OptionNDBpRICE">
                            <h4>Lọc theo khoảng giá</h4>
                            <p>Thỏa thuận</p>
                            <p>Dưới 500 triệu</p>
                            <p>500 - 800 triệu</p>
                            <p>1 - 2 tỷ</p>
                            <p>2 - 3 tỷ </p>
                            <p>3 - 5 tỷ</p>
                            <p>5 - 7 tỷ</p>
                            <p>7 - 10 tỷ</p>
                            <p>10 - 20 tỷ</p>
                            <p>10 - 20 tỷ</p>
                            <p>20 - 30 tỷ</p>
                            <p>30 - 40 tỷ</p>
                            <p>40 - 60 tỷ</p>
                            <p>Trên 60 tỷ</p>

                        </div>
                        <div style={{ paddingTop: '20px' }}>
                            <div className="OptionNDBOnMeter">
                                <h4>Lọc theo diện tích</h4>
                                <p>Dưới 30m<sup>2</sup></p>
                                <p>30 - 50m<sup>2</sup></p>
                                <p>50 - 80m<sup>2</sup></p>
                                <p>80 - 100m <sup>2</sup></p>
                                <p>100 - 150m<sup>2</sup></p>
                                <p>150 - 200m<sup>2</sup></p>
                                <p>200 - 250m<sup>2</sup></p>
                                <p>250 - 300m<sup>2</sup></p>
                                <p>300 - 500m<sup>2</sup></p>
                                <p>Trên 500m<sup>2</sup></p>
                            </div>
                        </div>
                        <div style={{ paddingTop: '20px' }}>
                            <div className="LocationNDB">
                                <h4>Mua bán đất</h4>
                                <p>Hồ Chí Minh (51.506)</p>
                                <p>Hà Nội (49.542)</p>
                                <p>Đà Nẵng (5.138)</p>
                                <p>Bình Dương (4.924)</p>
                                <p>Hà Nội (49.542)</p>
                                <p>Hà Nội (49.542)</p>
                                <p>Hà Nội (49.542)</p>
                                <p>Hà Nội (49.542)</p>
                                <p>Hà Nội (49.542)</p>
                                <p>Hà Nội (49.542)</p>
                                {showButton && <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px' }} onClick={handleClickShowlocationNDB}>
                                    <p style={{ color: 'red', margin: '0', }}>Xem thêm</p>
                                    <box-icon name='chevron-down' color='red'></box-icon>
                                </div>}
                                {showlocationNDB && <div><p>Hà Nội (49.542)</p>
                                    <p>Hà Nội (49.542)</p>
                                    <p>Hà Nội (49.542)</p>
                                    <p>Hà Nội (49.542)</p>
                                    <p>Hà Nội (49.542)</p>
                                    <p>Hà Nội (49.542)</p>
                                    <p>Hà Nội (49.542)</p>
                                    <p>Hà Nội (49.542)</p>
                                    {hideButton && <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px' }} onClick={handleClickHideOptionButton}>
                                        <p style={{ color: 'red', margin: '0', }}>Thu gọn</p>
                                        <box-icon name='chevron-up' color='red' ></box-icon>
                                    </div>}</div>}

                            </div>
                        </div>
                        <div style={{ paddingTop: '20px' }}>
                            <div className="SupportClient">
                                <h4>Hỗ trợ tiện ích</h4>
                                <p>Tư vấn phong thủy</p>
                                <p>Dự tính chi phí làm nhà</p>
                                <p>Tính lãi suất</p>
                                <p>Quy trình xây nhà</p>
                                <p>Xem tuổi làm nhà</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="LastIntroduceOnNhaDatBan">
                        <LastIntroduceMain></LastIntroduceMain>
            </div>
        </div>

    )
}

export default HeaderNhaDatBan;