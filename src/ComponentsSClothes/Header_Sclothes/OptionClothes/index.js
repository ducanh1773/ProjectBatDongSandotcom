import React from "react";
import { useState } from "react";
import { Reuse_HEADCPNCLOS } from '../Reuse_HEADCPNCLOS'
import './index.css'

function OptionClothes(props) {
    const Element = props.Element.map((t) => {
        return (
            <div className="OptioneClothesIterm">
                <a href={t.Link} className="LinkOptionClothes"><p className="ItemOptionClothes">{t.name}</p></a>
            </div>
        )
    })
    return (
        <div>
            {Element}
        </div>
    )
}

export default OptionClothes;