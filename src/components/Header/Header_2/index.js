import React from "react";
import './index.css'
import { Reuse } from "../../Reuse";
import { Link } from "react-router-dom";
function Header_2(props) {

    const Navi_Bar = props.NVB.map((t) => {
        return (
            <Link className = 'link' to={t.link}> <div><p className="NaviBar1">{t.name}</p></div></Link>
        )
    })

   
   


    return (
        <div className="nvBar2">
            <div>
                <p className="nvbar4"> {props.name} </p>
                <div className="nvBar3">
                    <div className="dropdown">{Navi_Bar}</div>
                </div>
            </div>
        </div>
    )
}

export default Header_2;