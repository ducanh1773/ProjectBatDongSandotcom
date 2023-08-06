import React from "react";
import './index.css'
import Introduce_BDS1 from '../Introduce_BDS/Introduce_BDS1'
import Introduce_BDS2 from "./Introduce_BDS2";
function Introduce_BDS_Main(){
    return(
        <div>
            <div className="Introduce_BDS1">
                <Introduce_BDS1></Introduce_BDS1>
            </div>
            <div>
                <Introduce_BDS2></Introduce_BDS2>
            </div>
        </div>
    )
}

export default Introduce_BDS_Main;