import { Outstanding } from "../../Outstanding/Outstanding1";
import React from "react";
import './index.css'

function BaoChiNoiVeBDS_Reuse(props){
    const Imgelement  = props.Imgelement.map((t) =>{
        return(
            
            <div className="TinTucMain">
                <a href={t.link} className="TinTuclink">
                    <div className="TinTuc_img">
                        <img className="TinTuc_img1" src={t.ImgURL}></img>
                    </div>
                </a>
                <div className="TinTuc1">
                    <div className="ImgBC_1"><img src={t.number} className="ImgBC"></img></div>
                    <a href={t.link} className="TinTuclink"><p className="TinTuc3">{t.name}</p></a>
                </div>


            </div>
        )
        
    })
    return(
        <div>
            {Imgelement}
        </div>
    )
} 

export default BaoChiNoiVeBDS_Reuse;
