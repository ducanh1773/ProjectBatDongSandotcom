import React from "react";
import Header from "../../../Header/Main_header"
import { useState, useEffect } from "react";
import './index.css'
import Tippy from "@tippyjs/react";
function NhaDatBanMain(props) {

    const [showElement, setShowElement] = useState(false)
    const [hideElement, setHideElement] = useState(true)
    const handleClick = () => {
        setShowElement(true)
        setHideElement(false)
    }



    const ElementNDB = props.ElementNDB.map((t) => {
        return (
            <div style={{ width: '695px', height: '431px' }} className="MainNDBNews">
                <a href={t.link} className="LinkMainNDB">
                    <div className="ImgMainNDB">
                        <div>
                            <img src={t.imgUrl} className=" ImgNDB"></img>
                        </div>
                        <div>
                            <div >
                                <img src={t.imgUrl2} className='imgViewNDB'></img>
                            </div>
                            <div>
                                <img src={t.imgUrl3} className="imgLocationNDB"></img>
                                <img src={t.imgUrl4} className="ImgNDB2"></img>

                            </div>
                        </div>
                    </div>
                    <div className="IconNumberImgMain">
                        <box-icon name='image-alt' color='white' size='26px'></box-icon>
                        <p className="NumberImg">{t.numberImg}

                        </p>

                    </div>
                </a>
                <div style={{ paddingLeft: '20px' }}>
                    <div>
                        <h4 className="SubjectNDB">{t.name}</h4>
                    </div>
                    <div className="InformationNDB">
                        <h5 className="PriceNDB">{t.price}</h5>
                        <p className="SpaceBettwenInformationNDB">-</p>
                        <h5 className="acrageNDB">{t.acreage}<sup>2</sup></h5>
                        <p className="SpaceBettwenInformationNDB">-</p>
                        <div className="priceOnMeterNDB">{t.priceOnMeter}<sup>2</sup></div>
                        <p className="SpaceBettwenInformationNDB">-</p>
                        <div className="LocationNDB">{t.location}</div>
                    </div>
                    <div className="DescribeNDB">
                        <p className="DescribeNDB2">{t.describe}</p>
                    </div>

                    <div></div>
                    <div className="ImformationHostMain">
                        <div>
                            <div className="NameImg_Host">
                                <img src={t.ImgHost} className="ImgHostNDB"></img>
                                <div className="HostAndTime">
                                    <p className="NameHostNDB">{t.host}</p>
                                    <p className="TimeNews">{t.TimeNews}</p>
                                </div>
                            </div>
                        </div>
                        <div style={{display:'flex' , alignItems:'center'}}>
                            <div >

                                {hideElement && <div className="PhoneMainNDBHide" onClick={handleClick}>
                                    <box-icon name='phone-call' color='white'></box-icon>
                                    <p className="PhoneHideNDB">{t.phoneHide} .</p><p>Hiện số</p>

                                </div>}
                                {showElement && <div>
                                    <div className="PhoneMainNDB" >
                                        <box-icon name='phone-call' color='white'></box-icon>
                                        <p className="PhoneNDB">{t.phone}</p>
                                        <p>Sao chép</p>
                                    </div>
                                </div>}
                            </div>
                            <div className="SaveNewsNDB">
                                <Tippy content='Bấm để lưu tin'>
                                    <button className="ButtonSaveNewsNDB"><box-icon name='heart' size='22px' ></box-icon></button>
                                </Tippy>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    })
    return (
        <div>
            {ElementNDB}
        </div>
    )
}

export default NhaDatBanMain 