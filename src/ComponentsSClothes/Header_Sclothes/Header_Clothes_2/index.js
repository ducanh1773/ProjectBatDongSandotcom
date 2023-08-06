import React from "react";
import { useState } from "react";
import {Reuse_HEADCPNCLOS} from '../Reuse_HEADCPNCLOS'
import './index.css'
function Header_Sclothes2(props){
    const NiceImage  = props.NiceImage.map((t) => {
        return(
            <div className="OptionClothes">
                <a href={t.Link} className="Link_Header"><p className="OptionHeaderClothes">{t.name}</p></a>
            </div>
        )
    })

    return(
        <div>
            {NiceImage}
        </div>
    )
    
}
export default Header_Sclothes2;