import React from "react";
import './index.css'
import { useState, useEffect } from "react";

function LastIntroduceMain() {

    const [showElement, setShowEmlement] = useState(false)
    const [showOption, setShowOption] = useState(true)
    const Handleclick = () => {
        setShowEmlement(true)
    }

    const HideElement = () => {
        setShowEmlement(false)

    }

    const HandleclickOption = () => {
        setShowOption(!showOption)
    }




    return (
        <div className="BackGRIntroduce">
            <div className="LastIntroduce">
                <div className="Last_Introduce">
                    <a href=""><img className="LastIntroduce1" src="https://staticfile.batdongsan.com.vn/images/logo/standard/black/logo_gray-5.svg"></img></a>
                </div>
                <div className="LastIntroduce1_2">
                    <a href="" className="LastIntroduce1">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAwtJREFUaEPtmQsuREEQRctOWAlWgpVgJVgJVsJOyJUpKTW3Pt39jEziJRLhTfc99e3qOZEjf06OXL/8A/y1Bw/pgTcD+yIiryLyLiL4ffo5JMBHoBIQTyJyN0MxAnAhIs87q81sGAGo7imQLoCKX9msAtC1EVKXXW90ALz4FYjT3Yex5rmIXCdhBQh4JX0qgEj8CoQVBCBA3BKVEH9TJXkGUInfCgLrRCCAOMtcEAFE4uFWbPbgFp1KQLdGBJHmBAPIxGvNhttHIdAHAIqfrAegnPqQQig9Mk8wAAjzyQXL+4YzCsGq0D2p/+phGNKGKQ0lBgBLabXAAky8LhxBQJi3WNbI/PvY33Zu7Ee90AEAeVbOIghvsawPsGT169KEZgDottZ9mQdgmShn/Nq2B1y5PbAOPAYr68O8sKdlFaCT8FEVZMnqBXpj7uUMA/ALs0TLLF95zAJVAn0Y7ZXUFQCf7FXCM094D1ZhtJcHnT4QdUOflGGtTjqpj3NvYf//FkAreXaNzPYLb73qHKZHCFsumbGsoVoAWLiKTZYD5bmlQzT6TnQWKpNnt5EHnQmjUc0/3o8AumHkKxa80DrHL6k2H86O0966LMYZ6EwuTPNkAOyI0D3URb3DCl2dsb/WqiYy74XobO7f06MBQNg5aosZuwXAjgrMCwglQNhTLDZgg86WM3bpAVZSo0SFMMwSHkJB9DLLD0I2rIYnuyqEWLNRQWzAyIb0bqIOQXQAsDE7OWbVhr3PAJZn7C4AG/MgKKs26g2c/VlY2VwaHU+/jdEF0FBiidopmQDAoA6hCBE2ck5BjABE+aA5sUUHHpmxW2WUxS3bRCHKm7RGJndn7GmALJy0geH2evbevztjLwEoRHSvWXXiyBHDM/ZoDviNO3Vf6zo8knllWHznLNQI2a9XojLrP69fKeFq0XboKfFbAqjQLkjHMK3bjdUQioQgN9jlVUc43mmJ/w0PsBxBeIzAtMUfAsACIbz0yhJfL2nu4G967Y4OPVR+fyuEuqGy/N4/wLIJFxc4eg98At/t9THmjsr4AAAAAElFTkSuQmCC" />
                        <div>
                            <p>hotline</p>
                            <p>1900 1881</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="" className="LastIntroduce1">
                        <div style={{ display: 'flex' }}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAv9JREFUaEPtmuGREzEMhXWVAJUAlRxUAlQCVMJRCVAJzJtbMb49yZbk55Al65lM8sNr+9OTtLKdO7mxdndjvHIC/++KnwovUviliLwTkdcigt/4/Nzmwvd3EXnYPouW8DjsaoUB9mGDjYB8EZFPjTEiz6T6rASGop9Tq3nsDMW/isjHwrPDR1YBAxTAMw1K06FXAGORcGNGo0Ozgd+IyDeHVF1Vk5MmL41zfFvtvYggtimNDfxjy8D7xQHybWfFmsUtz4ChXlFoyVnaS1IZt/TCgaYyU2FL3ZGye+GgNBIeQqNtNJWZwL8Nt4MbAzrTAA3j7RvcWouVzHhP+rKAPXeujm95S8V4zwxTXdB+IAsYmRWxV2nI9Hu3psQxC9hKNplktTcKe7y/47OALYWzCauFtiq1q1LYKjhmMqsVw1cF7GXWSqLxqrWrytJwRyvRVFS2xplJgEteSxj05iotr0qCMUYb+96zFS9xX4WsLK0T9Db93m4JMdvbTlbywMWAMdFN7YcB3NvqZaouWqJqJ2W7dDv2jNIzVVrXqCuBK2qjOkOBMb0r8qhXA+u8cHMkp/vOuTRceBmoLuRSwJnYXdr3BCaZtz2R9E4jrana6xf8prs4U2F9HWmcMmwHYCQy3ERkj4rM+RnAvbKQAa1jAB4ZfAp8FphxpZI1ylRBUgW+lKqeMaA2aux0jFeAe9cp7QI1/n4lJHyx9dX3du/Rkotngb2TjTbOWFedCo2dlJfp00pnga3TCMCuvNNVcO+uObVfzgD3YEvxlHB1rcuxBkvtcCKLAntxm7JuEtDq3kuWoYOCKLCnbmgSAmg7hJdHQufgEWBPXco5cdEY3lHSUIAIsFVchKxZhIk85rn28OAgArzsFiBC1ulTuu2IAFv3vpRbgEng0m3HCNiy4r9259ZOVjLtxvEImH3vOynqs8fTt4xHB07fI4+A0wOyJRyMl17fCbyzKJLW/r8WF/mbb9BT0usbKRyc9zjdTuDjaFVb6alwzW7HeepU+Dha1Vb6BzE3sz1F93D2AAAAAElFTkSuQmCC" />
                            <box-icon name='question-mark' ></box-icon>
                        </div>
                        <div>
                            <p>Hỗ trợ khách hàng</p>
                            <p>trogiup.batdongsan.com.vn</p>
                        </div>
                    </a>
                </div>

                <div >
                    <a href="" className="LastIntroduce1">
                        <div>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAm5JREFUaEPtmo1NxDAMhX2bwCTAJMAkwCRwk8AmsAnoSTWqyksaO+mRtI5UVSflGn9+tvPTnuRg7XQwXgngvSseCm+k8IOI3IjI1ez6msbS+1lEPkREf29iypYKA/JeRG6NlgN6M/gtgAH6NClpZP3T/bG16i2BoSRArYqWOOVuAi/pm+3TChiQ79XW5B/wIiLPtWO0AEYIv64YonmJblqYUMDQcIfD5kUt9bg3EQG4u7DVAq/BWg0EvKaFOmQJX6V0DXAujKEiDMPd0xQcDmXNDe0FhkGfCWMAiSLToiFnMbUxtV3QXmAUKFaNEcKYSlo2QCPMlw15DMea8tkDnFK3pbJLuBS0WWUPMFMXXr5uKSt5FmYCltMYt1hlK3CqUCGMEc5bNkQWnL3MZ5PKVmAWWpdQVx3JxjelkhX4m0h4CXXnw2J2WKpcHNYWYFasLqmuQjPgYqdbgFk4mfKnUYIzO4qnQwswq87/AcwKZ3Ee1wI327YZ1K9KLQtwVbEwAJV0ZcWziKWo02SBe5ASAmMfty0BnPG026tG9Uq6u20JhY+uMOY8PVtmm3CNkNaLkrXnsZDGqg9X9qQlF9Jr51UIhp6A58GZXBClgEuPXXsFBjzdUKSAU0c4yxTvGZiur1PALEdYPesZmO7k9gw8rzG/YgVwZt08WkiHwtQDoXB+Kd9zlY6QjpCeRe8eFh4R0rmQZgd2o83DpqVl6k3dSJsHela95+0hPTPPHQCkXkLPVe51Hk6+a1o7xNOPzfQbyd5DGntg/WyRLpnWgEuOTIfqE8BDyeUwNhR2OG2ov4TCQ8nlMDYUdjhtqL8cTuEf3krgPXkTCA0AAAAASUVORK5CYII=" />
                        </div>
                        <div>

                            <p>Chăm sóc khách hàng</p>
                            <p>hotro@batdongsan.com.vn</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="LastIntroduce2">
                <div className="LastIntroduce2_1">
                    <h4 className="CTCP">CÔNG TY CỔ PHẦN PROPERTYGURU VIỆT NAM</h4>
                    <div className=" LastIntroduce2_1_1">
                        <box-icon name='location-plus' size='40px'></box-icon>
                        <p>Tầng 31, Keangnam Hanoi Landmark, Phạm Hùng, Nam Từ Liêm, Hà Nội</p>
                    </div>
                    <div className=" LastIntroduce2_1_1">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAqVJREFUWEflmI1t3DAMRplNmkmSTtJ0kjSTpJmk7SRtJ0nwADP4TFMUdXWAAyrggAMsS08ff+Ubu/Jxc+V89t8C3pvZl806v8zsj5n9vMRaH6Xgg5k9ByAgX8zs+wbc4u0AooZv9rWpRAboQA76rUM4AwTuhyzE4h1I3nvc3uN/Nljr80zNCjDCqQIdSJ//ycz4KXR7rRHgCK698EA1QDG/q8u0UskMMIPDsf8mC68oqYpmkLfZoTLA1zAROEAYOHY8fQbpAKjDj1TDOjriWrrP+7wI2HmpA5lFMQBPEhSYm+zgQZSaOgLyAou7b6SyD5TUuaM0EyGA/C2yHlSsFCTzkwZGg4XZwAeAADA8au82hXRehChFqQDZbKQguVHzW3WYLHI5uJe+GJT67NAsxMlZEK3AaeTyniuJL3oliWbWZwfAOHl3ms0/tcbO3GAUtfE9PfQS4G7ypoA6dTxA4bK7FBXdRwF3PjozYeaHutiKgh44fgjNi7iWm3/XmnUqSWXmbvNQKVs+ywBnuSk+X1FxGXTULKgZMzPHahJ9NQPhYJ4n26DdbiYm16xM0S2PmlA/8LJLVP1gVDE2l9HUqIK5aR5UqZg3lyArwI6vRVO76QBFUS5OWUfdhpy1/Fon2TzzNQ6iVWLkX0BpTW5BzgCzzUeQsQlVUI/0Tqu2O+AM0DsTrR7VrcyTsZo2ZoElyA4gkFl/N0stflnKLuxtyC4gkFlAtK6OA6fMIA/t3Qog+2QXqqWLuMDGAEwr0iqg+2QWtSufNiIc66ad0SWADllFrcOiSvTBNhwbXQqonTLXUL9oVTmQZ4DHxF32lP8KqKB6hew2A9OG9yxABUUhbnOVqq0qcoaJK6W8rHk+BJrBJ5TWp7ePBuyauZx3tolPgdJFrh7wDbf01Cl2cuSqAAAAAElFTkSuQmCC" />
                        <p>(024) 3562 5939 - (024) 3562 5940    </p>
                    </div>
                    <div className="IconAppAll">
                        <a href=""><img className="Icon_App" src="https://staticfile.batdongsan.com.vn/images/mobile/footer/google-play.png"></img></a>
                        <a href=""><img className="Icon_App" src="https://staticfile.batdongsan.com.vn/images/mobile/footer/app_store.png"></img></a>
                    </div>
                </div>
                <div className="LastIntroduce3">
                    <h3>Hướng dẫn</h3>
                    <a href="" className="Link_Introduce_LastMain">Về chúng tôi</a><br></br>
                    <a href="" className="Link_Introduce_LastMain">Báo giá & hỗ trợ</a><br></br>
                    <a href="" className="Link_Introduce_LastMain">Câu hỏi thường gặp</a><br></br>
                    <a href="" className="Link_Introduce_LastMain">Góp ý báo lỗi</a><br></br>
                    <a href="" className="Link_Introduce_LastMain">Sitemap</a>
                </div>
                <div className="LastIntroduce3  LastIntroduce4">
                    <h3>QUY ĐỊNH</h3>
                    <a href="" className="Link_Introduce_LastMain">Quy định đăng tin</a><br></br>
                    <a href="" className="Link_Introduce_LastMain">Quy chế hoạt động</a><br></br>
                    <a href="" className="Link_Introduce_LastMain">Điều khoản thỏa thuận</a><br></br>
                    <a href="" className="Link_Introduce_LastMain">Chính sách bảo mật</a><br></br>
                    <a href="" className="Link_Introduce_LastMain">Giải quyết khiếu nại</a>
                </div>
                <div>
                    <h3>ĐĂNG KÝ NHẬN TIN</h3>
                    <div className="InputEmailLast">
                        <input className="SendEmail" type="text" placeholder="Nhập email của bạn"></input>
                        <button className="ButtonSendEmail"><box-icon name='navigation' color='white'></box-icon></button>
                    </div>
                    <div onMouseLeave={HideElement} >
                        <h3>QUỐC GIA & NGÔN NGỮ</h3>
                        <div className="ChoseCountry" onClick={Handleclick} >
                            <div className="IconCountry"><box-icon name='globe'></box-icon></div>
                            <p className="Country">Việt Nam</p>
                            <div className="IconCountry2"><box-icon name='chevron-down' color='#6b6464' ></box-icon></div>
                        </div>
                        <div className="AllChoseTranslateBackGR1">
                            {showElement && (
                                <div className="AllChoseTranslateBackGR">
                                    <div className="ChoseTranslate">
                                        <div> <img className='IconCountry_2' src="https://s.yimg.com/fz/api/res/1.2/2s1awXEO2lYNG5wYJ5LFqg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTMzMA--/https://s.yimg.com/zb/imgv1/04f86a4d-f714-3339-b2b0-174e6be3a431/t_500x300"></img></div>
                                        <p className="LetterCountry">Việt Nam</p>
                                    </div>
                                    <div className="ChoseTranslate">
                                        <div> <img className='IconCountry_2' src="https://s.yimg.com/fz/api/res/1.2/IYBsyDOdg0it8vWEnN05kw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTMzMA--/https://s.yimg.com/zb/imgv1/ff1b457d-2bcb-3f15-a67d-4f3ca0d79699/t_500x300"></img></div>
                                        <p className="LetterCountry">Singapore</p>
                                    </div>
                                    <div className="ChoseTranslate">
                                        <div> <img className='IconCountry_2' src="https://s.yimg.com/fz/api/res/1.2/AMyYuBPySrnfo.3BTdUx_Q--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTQ0MA--/https://s.yimg.com/zb/imgv1/08a8ec5d-f4ac-305b-a84e-04db5553a1c1/t_500x300"></img></div>
                                        <p className="LetterCountry">Malaisya</p>
                                    </div>
                                    <div className="ChoseTranslate">
                                        <div> <img className='IconCountry_2' src="https://s.yimg.com/fz/api/res/1.2/TO3Pk1QRBkFSjUcH4RTdbA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTMzMA--/https://s.yimg.com/zb/imgv1/3621a9b1-f53b-3d92-9afc-90e58a687b39/t_500x300"></img></div>
                                        <p className="LetterCountry">ThaiLand</p>
                                    </div>
                                    <div className="ChoseTranslate">
                                        <div> <img className='IconCountry_2' src="https://s.yimg.com/fz/api/res/1.2/NLppvEmwfFj2Lzbe2k_XzQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTMzMA--/https://s.yimg.com/zb/imgv1/a24d861b-269f-3753-9609-ab28ec087575/t_500x300"></img></div>
                                        <p className="LetterCountry">Indonesia</p>
                                    </div>
                                    <div className="ChoseTranslate">
                                        <div> <img className='IconCountry_2' src="https://s.yimg.com/fz/api/res/1.2/HFald34SD39EVpsDZBXoBQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTQ0MA--/https://s.yimg.com/zb/imgv1/c4611c00-d0f1-3c89-bcc7-b42f18c93195/t_500x300"></img></div>
                                        <p className="LetterCountry">Australia</p>
                                    </div>


                                </div>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="AllOptionBranch" onClick={HandleclickOption}>
                <div className="OptionBranch">
                    <box-icon type='solid' name='chevron-down'></box-icon>
                    <p>Xem chi nhánh của Batdongsan.com</p>
                </div>
                {showOption && <div className="AllBranch">
                    <div className="BranchBDS1">
                        <div>
                            <h4>Chi nhánh TP. Hồ Chí Minh</h4>
                            <p>
                                Tầng 3, Tháp B tòa nhà Viettel Complex, 285 Cách Mạng Tháng Tám, Phường 12, Quận 10, TP. Hồ Chí Minh

                            </p>
                            <p> Điện thoại: 0904 893 279 - 0904 946 163</p>
                        </div>
                        <div>
                            <h4>Chi nhánh Đà Nẵng</h4>
                            <p>
                                Tầng 9, tòa nhà Vĩnh Trung Plaza, số 255 – 257 Hùng Vương, phường Vĩnh Trung, quận Thanh Khê, TP. Đà Nẵng

                            </p>
                            <p> Điện thoại: (0236) 3 666 968 - Mobile: 0904 907 279</p>
                        </div>
                        <div>
                            <h4>Chi nhánh Nha Trang</h4>
                            <p>
                                Tầng 6, Tòa nhà CTCP Điện Lực Khánh Hòa, 11 Lý Thánh Tôn, Phường Vạn Thạnh, TP Nha Trang, Khánh Hòa

                            </p>
                            <p>Điện thoại: (0258) 3 818 886 - Mobile: 0902 169 295</p>
                        </div>
                    </div>

                    <div className="BranchBDS1">
                        <div>
                            <h4>Chi nhánh Hải Phòng</h4>
                            <p>
                                Phòng 502, TD Business Center, lô 20A Lê Hồng Phong, quận Ngô Quyền, TP. Hải Phòng
                                Điện thoại: (0225) 3 246 848 - Mobile: 0903 456 322
                            </p>
                        </div>
                        <div>
                            <h4>Chi nhánh Cần Thơ</h4>
                            <p>
                                Phòng 502, TD Business Center, lô 20A Lê Hồng Phong, quận Ngô Quyền, TP. Hải Phòng
                                Điện thoại: (0225) 3 246 848 - Mobile: 0903 456 322
                            </p>
                        </div>
                        <div>
                            <h4>Chi nhánh Vũng Tàu</h4>
                            <p>
                                Tầng 4, tòa nhà ACB, số 111 Hoàng Hoa Thám, phường 2, TP. Vũng Tàu, tỉnh Bà Rịa - Vũng Tàu
                            </p>
                            <p>Điện thoại: (0254) 3 511 339 - Mobile: 0904 509 293</p>
                        </div>
                    </div>

                    <div className="BranchBDS1">
                        <div>
                            <div>
                                <h4>Chi nhánh Bình Dương</h4>
                                <p>
                                    Phòng 10, tầng 16, Becamex Tower, số 230 Đại lộ Bình Dương, P.Phú Hòa, TP.Thủ Dầu Một, tỉnh Bình Dương
                                </p>
                                <p>Điện thoại: (0274) 22 21 201, Mobile: 0919 255 580</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>Chi nhánh Đồng Nai</h4>
                                <p>
                                    Lầu 18, tòa Pegasus, số 53-55 đường Võ Thị Sáu, phường Quyết Thắng, TP. Biên Hoà, tỉnh Đồng Nai
                                </p>
                                <p>Điện thoại: 0906 282 428</p>
                            </div>
                        </div>

                    </div>
                </div>
                }
            </div>
            <div className="LicenseAll">
                <div className="LicenseAll1">
                    <p>Copyright © 2007 - 2023 Batdongsan.com.vn</p>
                    <p>Giấy ĐKKD số 0104630479 do Sở KHĐT TP Hà Nội cấp lần đầu ngày 02/06/2010</p>
                    <p>Giấy phép ICP số 2399/GP-STTTT do Sở TTTT Hà Nội cấp ngày 4/9/2014</p>
                    <p>Giấy phép GH ICP số 3832/GP-TTĐT do Sở TTTT Hà Nội cấp ngày 8/8/2019</p>
                    <p>Giấy phép SĐ, BS GP ICP số 3833/GP-TTĐT do Sở TTTT Hà Nội cấp ngày 8/8/2019</p>
                    <p>Giấy xác nhận số 1728/GXN-TTĐT do Sở TTTT Hà Nội cấp ngày 23/6/2020</p>
                    <p>Giấy phép GH ICP số 2886/GP-TTĐT do Sở TTTT Hà Nội cấp ngày 09/08/2021</p>
                </div>
                <div>
                    <p>Chịu trách nhiệm nội dung GP ICP: Bà Đặng Thị Hường</p>
                    <p>Chịu trách nhiệm sàn GDTMĐT: Ông Nguyễn Đức Thắng</p>
                    <p>Quy chế, quy định giao dịch có hiệu lực từ 01/06/2023</p>
                    <p>Ghi rõ nguồn "Batdongsan.com.vn" khi phát hành lại thông tin từ website này.</p>
                </div>
                <div className="LicenseAll2">
                    <a href=""><img className='IconLecenseTrade'src="https://staticfile.batdongsan.com.vn/images/newhome/da-dang-ki-bct.svg"></img></a>
                    <div className="IconLicense">
                        <div className="IconLicense1"><box-icon name='facebook-square' type='logo' color='#0035bd' size='40px'></box-icon></div>
                        <div className="IconLicense1"><box-icon name='youtube' type='logo' color='#bd0000' size='40px' ></box-icon></div>
                        <div className="IconLicense1"><img className="IconLicense3" src="https://tse4.mm.bing.net/th?id=OIP.C-29LF-zahyz7WkOKowOJQHaHa&pid=Api&P=0&h=220"></img></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastIntroduceMain;