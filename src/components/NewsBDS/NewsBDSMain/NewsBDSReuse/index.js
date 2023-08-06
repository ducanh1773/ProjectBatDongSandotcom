import React from "react";
import './index.css'
import { ReuseNDB } from '../../../NhaDatBan_Chothue/NhaDatBan/ReuseNDB'

function NewsBDSOnMain(props) {
    const ImgElement = props.ImgElement.map((t) => {
        return (
            <div>
                <div style={{display:'flex' , marginTop:'20px'}}>
                    <div>
                        <a href={t.link} style={{textDecoration:'none'}}>
                            <img src={t.imgUrl} className="ImgNewsOnMain"></img>
                        </a>
                    </div>
                    <div style={{width:'464px' , height:'161px' , paddingLeft:'20px'}}>
                        <p style={{margin:'0' , fontSize:'12px' , color:'#9b9999'}}>{t.TimeNews}</p>
                        <a href=""  style={{textDecoration:'none'}}><h4 className="SubJectNewsOnMain">{t.name}</h4></a>
                        <p style={{margin:'0' , fontSize:'16px' , color:'#9b9999' , paddingTop:'5px' , height:'161px'}}>{t.describe}</p>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <a href=""  style={{textDecoration:'none'}}><p className="NewsAnotherOnNewsMain1">{t.News1}</p></a>
                    <a href=""  style={{textDecoration:'none'}}> <p className="NewsAnotherOnNewsMain2">{t.News2}</p></a>
                </div>
                <div style={{height:'1px' , width : '750px' , backgroundColor:'rgb(223 221 221)' , marginTop:'0px'}}>

                </div>
            </div>
        )
    })
    return (
        <div>{ImgElement}</div>
    )
    
}




export default NewsBDSOnMain