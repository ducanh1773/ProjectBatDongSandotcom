import React, { useState } from "react";
import './index.css'
import Header from "../../Header/Main_header";
import NewsBDSOnMain from "./NewsBDSReuse";
import Introduce from "../../Introduce_BDS";
import moment from 'moment'
import LastIntroduce from '../../Last_Introduce_Main'
function NewsBDSMain() {


    const [showElement, setShowElement] = useState(true)
    const [hideElement, setHideElement] = useState(false)
    const [showNews, setShowNews] = useState(false)
    const [hideButton, setHideButton] = useState(true)

    const handleClickButton = () => {
        setShowNews(true)
        setHideButton(false)
    }

    const handleClick = () => {
        setShowElement(!showElement)
        setHideElement(!hideElement);

    }

    const handleClickHideElememt = () => {
        setShowElement(!showElement)
        setHideElement(!hideElement);

    }


    const NewsMain1 = [{
        link: '', imgUrl: 'https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/7/2023/08/MicrosoftTeams-image-39.jpg',
        TimeNews: '04/08/2023 03:59 • Đông Phong', name: 'Thị Trường BĐS Quận 10: Sức Hút Từ Trung Tâm Kinh Tế Lâu Đời Của TP.HCM',
        describe: 'Thị trường BĐS quận 10 là một trong những thị trường được người mua nhà quan tâm nhất hiện nay. Quận 10 sở hữu mạng lưới giao thông thuận tiện, nhịp sống sôi động, nhiều địa điểm vui chơi giải trí hấp dẫn, hoạt',
        News1: "Đánh giá khu vực", News2: 'Thị trường BĐS TP.HCM'
    }]

    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div style={{ paddingTop: '20px', paddingBottom: '20px', }} >
                {showElement &&
                    <div style={{ display: 'flex' }}>
                        <a href="" style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>
                            <div style={{ paddingLeft: '200px', paddingRight: '20px' }}>
                                <box-icon name='home' color='#c3c0c0' ></box-icon>
                            </div>
                            <div>
                                <box-icon name='chevron-right' type='solid' color='#c3c0c0' ></box-icon>
                            </div>
                            <div>
                                <p style={{ margin: '0', color: '#c3c0c0', paddingLeft: '30px' }}>Tin tức</p>
                            </div>
                        </a>
                        <div style={{ width: '1000px' }}>

                        </div>
                        <div style={{ display: 'flex', cursor: 'pointer' }} onClick={handleClick}>
                            <box-icon name='search-alt-2'  ></box-icon>
                            <p style={{ margin: '0', color: '#c3c0c0', paddingLeft: '30px' }}>Hướng dẫn tìm kiếm</p>
                        </div>

                    </div>}
                {hideElement && <div style={{ display: 'flex', alignItems: 'center', height: '28px' }}>
                    <div style={{ paddingLeft: '200px', display: 'flex', alignItems: 'center' }}>
                        <box-icon name='search-alt-2'  ></box-icon>
                        <input type="search" placeholder="Nhập từ khóa và nhấn Enter để tìm kiếm" className="SearchEngineFromNews"></input>
                    </div>
                    <div className="LineOnSearchEngineFromNews"></div>
                    <div style={{ cursor: 'pointer' }} onClick={handleClick}>
                        <p style={{ margin: '0', paddingLeft: '20px', color: '#c3c0c0' }}>Hủy bỏ</p>
                    </div>
                </div>}

            </div>
            <div style={{ width: '100%', height: '1px', backgroundColor: 'rgb(241 239 239)', }}>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }} className="MainPageOnPageNews">

                <div className="SubjectNewsBDS">
                    <h1>
                        Tin tức bất động sản mới nhất

                    </h1>
                    <p>
                        Thông tin mới , đầy đỉ hấp dẫn về thị trường bất động sản Việt Nam thông qua dữ liệu lớn về giá, giao dịch , nguồn cung-cầu và khảo sat thực tế của đội ngũ phóng viên , biên tập của Batdongsan.com.vn.
                    </p>
                </div>
            </div>
            <div  className="MainPageOnPageNews4">
                <div>
                    <div style={{ height: '200px', }}>
                        <a href="">
                            <img src="https://img.iproperty.com.my/angel/750x1000-fit/wp-content/uploads/sites/7/2023/08/view-HBN-nhin-ve-khu-kenh-dao.png" className="" style={{ filter: 'grayscale(60%)', width: '800px', height: ' 450px' }}></img>
                        </a>
                    </div>
                    <div style={{ height: '280px', color: 'white', paddingLeft: '20px' }}>
                        <a href="" style={{ color: 'white', textDecoration: 'none', zIndex: '5', position: 'absolute' }}>
                            <p>04/08/2023 08:00 Tin tức</p>
                            <h3>Honas Residence - Căn hộ 1.3 tỷ hâm nóng thị trường bất động sản</h3>
                            <p style={{ width: '600px', height: '100px', textOverflow: 'ellipsis', zIndex: '5' }}>Nhu cần ở thực luôn hiện hữu , những dự án có vị trí thuận lợi , chính sách bán hàng tốt , giá sát với nhu cầu của nhóm khách hàng trẻ mong muốn sở hữu tổ ấm riêng luôn có sức hút nhất định. Honas Residence - căn hộ có giá chỉ từ 1.3 tỷ có thể nối là một trong những dự án góp phần tăng nhiệt cho thị trường BĐS giữa lúc thị trường đang có dấu hiệu ấm dần.</p>
                        </a>
                    </div>
                </div>
                <div style={{ paddingLeft: '60px', width: '296px', height: '200px', display: 'grid', gridTemplateRows: 'auto auto auto' }}>
                    <div style={{ height: '48px', width: '296px', paddingBottom: '20px' }}>
                        <p style={{ textTransform: 'capitalize', marginBottom: '5px', fontSize: '12px' }}>04/08/2023 08:00 Tin tức</p>
                        <a href='' style={{ textDecoration: 'none', color: 'black' }}>  <h4 style={{ textTransform: 'capitalize', marginTop: '0' }} className="SubjectOnNewsMain">Nhà trọ Hà Nội Bắt đầu sôi nổi</h4></a>
                        <div style={{ width: '296px', height: '1px', backgroundColor: 'rgb(241, 239, 239)' }}>

                        </div>
                    </div>
                    <div style={{ height: '48px', width: '296px', paddingBottom: '50px' }}>
                        <p style={{ textTransform: 'capitalize', marginBottom: '5px', fontSize: '12px' }}>04/08/2023 08:00 Tin tức</p>
                        <a style={{ textDecoration: 'none', color: 'black' }} href=""> <h4 style={{ textTransform: 'capitalize', marginTop: '0' }} className="SubjectOnNewsMain">Định giá đất phù hợp để tăng nguồn cung dự án</h4></a>
                        <div style={{ width: '296px', height: '1px', backgroundColor: 'rgb(241, 239, 239)' }}>

                        </div>
                    </div>
                    <div style={{ height: '48px', width: '296px' }}>
                        <p style={{ textTransform: 'capitalize', fontSize: '12px' }}>04/08/2023 08:00 Tin tức</p>
                        <a style={{ textDecoration: 'none', color: 'black' }} href=""> <h4 style={{ textTransform: 'capitalize', marginTop: '0' }} className="SubjectOnNewsMain">Honas Residence - Căn hộ 1.3 tỷ hâm nóng thị trường bất động sản</h4></a>
                        <div style={{ width: '296px', height: '1px', backgroundColor: 'rgb(241, 239, 239)' }}>

                        </div>
                    </div>
                </div>

            </div>
            <div className="MainPageOnPageNews3">
                <div style={{ paddingRight: '100px' }}>
                    <div>
                        <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                    </div>
                    <div>
                        <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                    </div>
                    <div>
                        <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                    </div>
                    <div>
                        <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                    </div>
                    <div>
                        <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                    </div>
                    <div>
                        <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                    </div>
                    <div>
                        <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                    </div>
                    {hideButton &&
                        <div style={{width:'100%' , display:'flex' , justifyContent:'center' , alignItems:'center' , marginTop:'30px' , marginBottom:'30px'}}>
                           
                                <p className="MorOptionOnNewsMain" onClick={handleClickButton}>Xem thêm</p>
                            
                        </div>}
                    {showNews && (
                        <div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                            <div>
                                <NewsBDSOnMain ImgElement={NewsMain1}></NewsBDSOnMain>
                            </div>
                        </div>
                    )}

                </div>
                <div>
                    <div className="MostViewOnNews">
                        <div>
                            <h3 className="MostViewOnNewsSubject">Bài viết được xem nhiều nhất</h3>
                        </div>
                        <div className="LineMostViewOnNewsMain">

                        </div>
                        <div className="MostViewOnNewsMain">
                            <p>1</p>
                            <a href="">Lãi suất vay ngân hàng tháng 8/2023 mới cập nhật</a>

                        </div>
                        <div className="LineMostViewOnNewsMain">

                        </div>
                        <div className="MostViewOnNewsMain">
                            <p>2</p>
                            <a href="">Toàn cảnh thị trường BĐS quý 2/2023 qua báo cáo của Batdongsan.com.vn</a>
                        </div>
                        <div className="LineMostViewOnNewsMain">

                        </div>
                        <div className="MostViewOnNewsMain">
                            <p>3</p>
                            <a href="">môi giới bất động sản bắt đầu quay lại với nghề khi thị trường BĐS ấm lên</a>
                        </div>
                        <div className="LineMostViewOnNewsMain">

                        </div>
                        <div className="MostViewOnNewsMain">
                            <p>
                                4
                            </p>
                            <a href="">Thị trạng thị trường BĐS ở việt nam hiện nay : lượng giao dịch đang tăng</a>
                        </div>
                        <div className="LineMostViewOnNewsMain">

                        </div>
                        <div className="MostViewOnNewsMain">
                            <p>5</p>
                            <a href="">Nhiều lô đấy nền quận 9 giảm giá cả tỷ đồng</a>
                        </div>
                    </div>
                    <div style={{ border: '1px solid rgb(236, 234, 234)', marginTop: '30px', height: '200px', display: 'grid', justifyContent: 'center', borderRadius: '7px' }}>
                        <div>
                            <h3 className="MostViewOnNewsSubject">Thị trường BĐS tại các tỉnh / thành sôi động nhất</h3>
                        </div>
                        <div className="LineMostViewOnNewsMain" style={{ marginBottom: '20px' }}>

                        </div>
                        <div style={{ display: 'grid', paddingLeft: '20px', gridTemplateColumns: 'auto auto' }}>
                            <a href="" className="BDSHaNoiOnNews">
                                <div style={{ height: '50px' }}><img src="https://tse4.mm.bing.net/th?id=OIP.XGBUanR8qTp6KsFEawjXtgHaEK&pid=Api&P=0&h=220" className="BDSHaNoiOnNewsImg"></img></div>
                                <div>
                                    <p>Hà Nội</p>
                                </div>
                            </a>
                            <a href="" className="BDSHoChiMinhOnNews">
                                <div style={{ height: '50px' }}><img src="https://tse1.mm.bing.net/th?id=OIP.-epKe4QvbH56VWT9JDp-5AHaEK&pid=Api&P=0&h=220" className="BDSHaNoiOnNewsImg"></img></div>
                                <div>
                                    <p>Hồ Chí Minh</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="TopCityBDS">
                        <div>
                            <h3 className="MostViewOnNewsSubject">Thị trường Bđs tại 10 tỉnh / thành phố lớn</h3>
                        </div>
                        <div className="LineMostViewOnNewsMain" style={{ marginBottom: '20px' }}>

                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse1.mm.bing.net/th?id=OIP.Ht8ovmc9FeLOuAJYHdQomwHaEK&pid=Api&rs=1&c=1&qlt=95&w=211&h=118'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>Bà rịa - vũng tàu</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse3.mm.bing.net/th?id=OIP.vszm3d1P32YGtkYbqE8qhgHaEU&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>Bình dương</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse1.mm.bing.net/th?id=OIP.CaNgNpZ7ur4nGHapGutlkgHaE7&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p> Đà Nẵng</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse3.mm.bing.net/th?id=OIP.cILSAsudd6SLSd_N9msaHAHaEB&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>Đồng Nai</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse3.mm.bing.net/th?id=OIP.MxGCQzM0KDtE-nplvupigwHaE6&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>hải phòng</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse3.mm.bing.net/th?id=OIP.M8G3MwZNVCJTYV8IlohrOAHaE7&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>hưng yên</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse1.mm.bing.net/th?id=OIP.I0H7d18qMD0vE_uTdTc2oQHaEW&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>khánh hòa</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse2.mm.bing.net/th?id=OIP.6VqfF-lCDjmIFekH3dKp4AHaEe&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>long an</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse3.mm.bing.net/th?id=OIP.dTeeJfNWJl-edevUtcWEyQHaFE&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>quảng nam</p></a>
                        </div>
                        <div style={{ display: 'flex' }} className="AntherBDSOnNews">
                            <img src='https://tse2.mm.bing.net/th?id=OIP.a9RmvJF6LvcXE3WrrCq4pAHaE7&pid=Api&P=0&h=220'></img>
                            <a href="" style={{ textDecoration: 'none' }}><p>quảng ninh</p></a>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{paddingTop:'40px'}} className="IntroduceOnPageNews">
                <Introduce></Introduce>
            </div>
            <div style={{paddingTop:'60px'}}>
                <LastIntroduce></LastIntroduce>
            </div>
        </div>
    )
}

export default NewsBDSMain;