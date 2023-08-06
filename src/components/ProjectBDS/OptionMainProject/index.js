import React from "react";
import './index.css'
import { ReuseNDB } from '../../NhaDatBan_Chothue/NhaDatBan/ReuseNDB'
function OptionMainProject(props) {
    const ImgElement = props.ImgElement.map((t) => {
        return (
            <div className="AllOptionMainProject">
                <a href={t.link} className="LinkProject">
                    <div style={{ display: 'flex' }}>
                        <div>
                            <div>
                                <img src={t.imgUrl} className="ImgProject1"></img>
                            </div>
                            <div>
                                <div>
                                    <img src={t.imgUrl2} className="ImgProject2"></img>
                                    <img src={t.imgUrl3} className="ImgProject3"></img>
                                </div>
                            </div>
                        </div>
                        <div  style={{width:'510px' , height:'246px', paddingLeft:'27px'}}>
                            <p className="TimeNewsProject">{t.TimeNews}</p>
                            <h3 className="NameProject">{t.name}</h3>
                            <h4 className="acreageProject">{t.acreage}</h4>
                            <p className="LocationProject">{t.location}</p>
                            <p className="describeProject">{t.describe}</p>
                        </div>
                    </div>
                </a>
            </div>
        )
    })
    return (
        <div>{ImgElement}</div>
    )
}

export default OptionMainProject;