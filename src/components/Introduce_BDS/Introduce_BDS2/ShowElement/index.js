import React, { useState } from 'react';
import {Reuse} from '../../../Reuse'
import './index.css'
const ToggleElement = (props) => {
  const LinkElement  = props.LinkElement.map((t)=>{
    return (
      <a className='Link_Introduce1' href={t.link}><p className='Letter_Introduce1'>{t.name}</p></a>
    )
  })
  const [showElement, setShowElement] = useState(false);
  const [showButton , setShowButton] = useState(true)
  const [hideButton , setHideButton] = useState(false)
  const [hideElement , setHideElement] = useState(false)

  const handleClick = () => {
    setShowElement(!showElement);
    setShowButton(!showButton)
    setHideElement(!hideElement)
  };

  const hideElementFunction =()=>{
    setShowElement(!showElement);
    setShowButton(!showButton)
    setHideElement(!hideElement)
  }

  return (
    <div>
     {showButton && (<a onClick={handleClick} className='MoreOptioneIntroduce'>Xem thêm</a>)}
    {showElement && <div>{LinkElement}</div>}
    {hideElement&&(<a onClick={hideElementFunction} className='MoreOptioneIntroduce'>Thu gọn</a>)}
    </div>
  );
};

export default ToggleElement;