import React, { useState } from 'react';
import { Reuse } from '../../Reuse'
import './index.css'

function ToggleElementChild(props) {
    const LinkElement = props.LinkElement.map((t) => {
        return (
            <a className='Link_IntroduceChild Link_Introduce1' href={t.link}><p className='Letter_IntroduceChild Letter_Introduce1'>{t.name}</p></a>
        )
    })

    const [showElement, setShowElement] = useState(false)
    const [ChangeIcon, setChangeIcon] = useState(true)
    const [IconChange, setIcon] = useState(false)

    const handleClick = () => {
        setShowElement(!showElement)
        setChangeIcon(!ChangeIcon)
        setIcon(!IconChange)
    }

    return (
        <div>
            <div onClick={handleClick} style={{display:'flex'}}><a>{props.name}</a>{ChangeIcon&&(<box-icon name='chevron-down' type='solid' color='#706c6c' ></box-icon>)}{IconChange && (<box-icon name='chevron-up' type='solid' color='#706c6c' ></box-icon>)}</div>
            {showElement &&
                <div className='IntroduceChild'>
                    {LinkElement}
                </div>
            }

        </div>
    )

}

export default ToggleElementChild;