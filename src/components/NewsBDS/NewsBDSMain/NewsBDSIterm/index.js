import React from "react";
import './index.css'
import Header from "../../../Header/Main_header";
import { useState } from "react";
import { Link } from "react-router-dom";
import LastIntroduceMain from "../../../Last_Introduce_Main";
function ItermNewsBDS() {

    const [showElement, setShowElement] = useState(true)
    const [hideElement, setHideElement] = useState(false)
    const [showNews, setShowNews] = useState(false)
    const [hideButton, setHideButton] = useState(true)
    const handleClick = () => {
        setShowElement(!showElement)
        setHideElement(!hideElement);

    }
    const handleClickHideElememt = () => {
        setShowElement(!showElement)
        setHideElement(!hideElement);

    }
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div style={{ paddingTop: '20px', paddingBottom: '20px', }}>
                {showElement &&
                    <div style={{ display: 'flex' }}>
                        <a href="" style={{ textDecoration: 'none', color: 'black', display: 'flex' }}>
                            <div style={{ paddingLeft: '200px', paddingRight: '20px' }}>
                                <Link to="/"><box-icon name='home' color='#c3c0c0' ></box-icon></Link>
                            </div>
                            <div>
                                <box-icon name='chevron-right' type='solid' color='#c3c0c0' ></box-icon>
                            </div>
                            <div>
                                <p style={{ margin: '0', color: '#c3c0c0', paddingLeft: '30px' }}>Wiki BĐS</p>
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
            <div className="SubjectIterm">
                <h1>
                    Lãi suất vay ngân hàng tháng 8/2023 cập nhật
                </h1>
            </div>
            <div className="AllOfNewsOnIterm">
                <div >
                    <div className="HostOfItermNews">
                        <div>
                            <img className="HostOfItermNewsImg" src="https://cdn-assets-angel.batdongsan.com.vn/assets/images/authorDefaultPhoto.png"></img>

                        </div>
                        <div>
                            <p className="HostOfItermNewsName">Được đăng bởi Hà Linh</p>
                            <p>Cập nhật lần cuối vào 31/07/2023 08:00 - Đọc trong khoảng 12 phút</p>
                        </div>
                    </div>
                    <div className="AllOfNewsOnItermAndNews">
                        <div className="InformationIterm">
                            <h4>
                                Theo khảo sát của Batdonsan.com.vn, lãi suất vay ngân hàng tháng 8/2023 ở nhiều ngân hàng đã giảm từ 0,5-2%
                                so với đầu năm. Đây được cho là tín hiệu tích cực sau hàng loạt chỉ đạp của Chính phủ , Ngân hàng Nhà nước về việc giảm lã suất cho vay
                            </h4>
                            <h1>Lãi suất vay ngân hàng tháng 8/2023</h1>
                            <p>
                                Sau động thái quyết liệt của Ngân hàng Nhà nước về việc giảm lãi suất cho vay dối với khách hàng cũ là
                                cá nhân và doanh nghiệp,  nhiều ngân hàng đã tiếp tục điều chỉnh giảm lãi suất với mức giảm phổ biến từ 0,5%

                            </p>
                            <p>
                                Tuy nhiên,đối với các khaorn vay cũ thì mức giảm không đánh kể, các ngân hàng thương mại tư nhân vẫn còn duy trì ở mức
                                12-14% do vỗn các ngân hàng huy động cao đầu năm nay vẫn còn toofn kho.Còn nhóm Big4(Vietcombank , BIDV,Viettinbank,agribank)
                                đưa lãi suất cho vay với khách ahfng cũ về dưới 11%/năm
                            </p>
                            <p>
                                Ngoài giảm lãi suất cho vay với nhóm khách hàng hiện hữu,nhiều ngân hàng cũng tung ra các gói vay với lãi suất dưới 10%
                            </p>
                            <h2>
                                Lãi suất vay mua nhà ngân hàng nào thấp nhất?
                            </h2>
                            <p>
                                Theo khảo sast của Batdongsan.com.vn , <Link to='/ItermTinTuc' style={{ textDecoration: 'none', color: 'red' }}>lãi suất vay ngân hàng</Link> mua nhà
                                trong tháng 8 tại các ngân hàng hiện dao động từ 4,99-11,8%/năm
                            </p>
                            <p>
                                Trong đó , lãi suất vay mua nhà thấp nhất hiện nay đang thuộc về Ngân hàng TMPC Hàng Hải Việt Nam(MSB)
                                ở mức 4,99%/năm.Tuy nhiên , MSB chỉ có mức lãi suất này trong 3 tháng đầu với các khoản vay có thời hạn trên 24 tháng  , từ tháng 4 trở đi , ngân hàng sẽ áp
                                dụng lãi suất thả nổi theo lãi suất thị trường rơi vào 13,75%/năm
                            </p>
                            <h2>
                                Nhóm ngân hàng cho vay mua nhà lãi suất dưới 10%/năm
                            </h2>
                            <p>
                                Tháng 8/2023, nhiều ngân hàng đã triển khai lãi vay mua nhà ở mức tầm trung , dưới 10%/năm , trong đó phải kể đến nhóm Big 4 là BIDV , Agribank , Vietcombank , Viettinbank
                                .Ngoài ra nhiều ngân hàng thương mại tư nhân cũng áp dụng mức lãi dưới 10%/năm như
                            </p>
                            <li>Woori Bank:7,8%/năm</li>
                            <li>Shinhan Bank: 7,99%/năm</li>
                            <li>TPBank: 8%/năm</li>
                            <li>HDBank: 8,2%/năm</li>
                            <li>VIB: 8,5%/năm</li>
                            <li>Eximbank: 8,5/năm</li>
                            <li>SeABank: 9,29/năm</li>
                            <li>UOB: 9,49/năm</li>
                            <li>Sacombank: 9,5/năm</li>
                            <p>Tuy nhiên,các mức lãi suất dưới 10% chỉ áp dụng trong 3-6 tháng cao nhất là 1 năm , hết thười gian ưu đãi,
                                hầu hết các ngân hàng đều tính theo lãi suất thả nổi , phổ biến ở mức 12-13,5%.
                            </p>
                            <p>
                                Ví dụ , ngân hàng Shinhan Bank tính lãi cố định 7,99%/năm trong 6 tháng đầu và 10,5%/năm cho 54 tháng còn lại
                                .Với ngân hàng TPBank,mức 8% chỉ áp dụng cho khách vay mua nhà trong 6 tháng đầu,
                                trong 6 tháng thiếp theo sẽ áp dụng mức 12%/năm, từ tháng 13 cũng tính lãi thả nổi theo thị trường, rơi vào khoảng 13,5%/năm.
                            </p>
                            <h2>
                                Nhóm ngân hàng cho vay mua nhà lãi suất trên 10%/năm
                            </h2>
                            <p>
                                Một số ngân hàng mặc dù đã giảm lãi suất vay mua nhà nhưng vẫn duy trì ở mức trên 10%/năm như:
                                Viet Capital Bank , Hong Leong Bank , SHB , ACB Bank , ABBank , GPBank , HSBC, VPBank , với mức lãi từ 10,5-11,8%/năm
                                .
                            </p>
                            <p>
                                Trong đó,ngân hàng OCB tính lãi 10,5%/năm trong năm đầu tiên,hết thời gian ưu đãi sẽ tính ở mức 14,2%/năm.VPBank tính lãi
                                11,8%/năm trong năm đầu , và 14%/năm sau ưu đãi
                            </p>
                            <h1>
                                Bảng lãi suất vay ngân hàng Tháng 8/2023 mới nhất
                            </h1>
                            <p>
                                Ghi chú : LSTK (Lãi suất tiết kiện);LSCS(Lãi suất cơ sở);CPV(Chi phí vốn)
                            </p>
                        </div>
                        <div>

                            <Link to='/ItermTinTuc' style={{ textDecoration: 'none' }}>
                                <div className="MostViewOnNewsMain">

                                    <p>1</p>
                                    <a href="">Lãi suất vay ngân hàng tháng 8/2023 mới cập nhật</a>

                                </div>
                            </Link>

                            <div className="LineMostViewOnNewsMain">

                            </div>
                            <Link to='/ItermTinTuc' style={{ textDecoration: 'none' }}>
                                <div className="MostViewOnNewsMain">
                                    <p>2</p>
                                    <a href="">Toàn cảnh thị trường BĐS quý 2/2023 qua báo cáo của Batdongsan.com.vn</a>
                                </div>
                            </Link>
                            <div className="LineMostViewOnNewsMain">

                            </div>
                            <Link to='/ItermTinTuc' style={{ textDecoration: 'none' }}>
                                <div className="MostViewOnNewsMain">
                                    <p>3</p>
                                    <a href="">môi giới bất động sản bắt đầu quay lại với nghề khi thị trường BĐS ấm lên</a>
                                </div>
                            </Link>
                            <div className="LineMostViewOnNewsMain">

                            </div>
                            <Link to='/ItermTinTuc' style={{ textDecoration: 'none' }}>
                                <div className="MostViewOnNewsMain">
                                    <p>
                                        4
                                    </p>
                                    <a href="">Thị trạng thị trường BĐS ở việt nam hiện nay : lượng giao dịch đang tăng</a>
                                </div>
                            </Link>
                            <div className="LineMostViewOnNewsMain">

                            </div>
                            <Link to='/ItermTinTuc' style={{ textDecoration: 'none' }}>
                                <div className="MostViewOnNewsMain">
                                    <p>5</p>
                                    <a href="">Nhiều lô đấy nền quận 9 giảm giá cả tỷ đồng</a>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>

            </div >
            <div>
                <LastIntroduceMain></LastIntroduceMain>
            </div>
        </div >
    )
}

export default ItermNewsBDS;