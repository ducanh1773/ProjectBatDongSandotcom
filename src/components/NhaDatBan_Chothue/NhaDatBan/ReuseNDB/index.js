import React from "react";
export const Image_link = (props)=>{
    const {imgUrl , imgUrl2 , imgUrl3 , imgUrl4 , name , price  , acreage , priceOnMeter , location , describe ,ImgHost ,  host , phone , phoneHide , numberImg , TimeNews , News1 , News2} = props
    return(
        {imgUrl} - {imgUrl2} - {imgUrl3} - {imgUrl4} -{name}-{price} -{acreage} - {priceOnMeter} - {location} - {location} -{describe}-{host}-{phone}-{phoneHide}-{numberImg}-{TimeNews}-{News1}-{News2}
    )
}