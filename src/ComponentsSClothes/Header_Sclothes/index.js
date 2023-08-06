import React from "react";
import './index.css'
import Header_Sclothes2 from '../Header_Sclothes/Header_Clothes_2'
import { useState } from "react";
import OptionClothes from './OptionClothes'
function HeaderClothes() {
    const OptioneClothes1 = [{ name: 'Pants', link: '' }]
    const OptioneClothes2 = [{ name: 'Shirt', link: '' }]
    const OptioneClothes3 = [{ name: 'SNEAKER', link: '' }]
    const OptioneClothes4 = [{ name: 'Hat', link: '' }]
    const OptioneClothes5 = [{ name: 'Turban', link: '' }]

    const OptionPants = [{ name: 'short', link: '' },
    { name: 'Jeans', link: '' },
    { name: 'Trousers', link: '' },
    { name: 'short', link: '' }]

    return (
        <div className="BackGroundHeader">
            <div className="HeaderClothes">
                <div>
                <Header_Sclothes2 name='Pants' NiceImage={OptioneClothes1}></Header_Sclothes2>
                <div>
                    <div>
                        <OptionClothes Element = {OptionPants}></OptionClothes>
                    </div>
                </div>
                </div>
               
                <Header_Sclothes2 NiceImage={OptioneClothes2}></Header_Sclothes2>
                <Header_Sclothes2 NiceImage={OptioneClothes3}></Header_Sclothes2>
                <Header_Sclothes2 NiceImage={OptioneClothes4}></Header_Sclothes2>
                <Header_Sclothes2 NiceImage={OptioneClothes5}></Header_Sclothes2>

            </div>
           
            <div><a href=""><img className='imgLogoClothes ' src="/img/Clothes/ImgHeader/hn1.png"></img></a></div>
            <div>  <a href=""><img className='imgLogoClothes' src="/img/Clothes/ImgHeader/Stephen.png"></img></a></div>

            <div className="BoughtAndLocationStore">
                <p className="OptionHeaderClothes2">LookBook</p>
                <p className="OptionHeaderClothes2">Store</p>

                <form className="Form-Clothes">
                    <input type="text" placeholder="Find Your" className="Input-Clothes" required ></input>
                    <button className="SearchBtnCl"><box-icon name='search' color='white'></box-icon></button>
                </form>

                <div className='icon_cart'><box-icon name='cart' color='white' width='100px' cursor='pointer'> </box-icon></div>
            </div>
        </div>

    )
}

export default HeaderClothes;