import React from "react";
import './index.css'
import ToggleElement from "./ShowElement";
import ToggleElementChild from "../ShowElement_2";
import { useState } from "react";
function Introduce_BDS2() {
    const [showElement, setShowElement] = useState(false);
    const [showButton, setShowButton] = useState(true)
    const [hideButton, setHideButton] = useState(false)
    const [hideElement, setHideElement] = useState(false)

    const [showElement2, setShowElement2] = useState(false);
    const [showButton2, setShowButton2] = useState(true)
    const [hideButton2, setHideButton2] = useState(false)
    const [hideElement2, setHideElement2] = useState(false)

    const [showElement3, setShowElement3] = useState(false);
    const [showButton3, setShowButton3] = useState(true)
    const [hideButton3, setHideButton3] = useState(false)
    const [hideElement3, setHideElement3] = useState(false)

    const [showElement4, setShowElement4] = useState(false);
    const [showButton4, setShowButton4] = useState(true)
    const [hideButton4, setHideButton4] = useState(false)
    const [hideElement4, setHideElement4] = useState(false)

    const [showElement5, setShowElement5] = useState(false);
    const [showButton5, setShowButton5] = useState(true)
    const [hideButton5, setHideButton5] = useState(false)
    const [hideElement5, setHideElement5] = useState(false)

    const [showElement6, setShowElement6] = useState(false);
    const [showButton6, setShowButton6] = useState(true)
    const [hideButton6, setHideButton6] = useState(false)
    const [hideElement6, setHideElement6] = useState(false)


    const handleClick = () => {
        setShowElement(!showElement);
        setShowButton(!showButton);
        setHideElement(!hideElement);
    };

    const handleClick2 = () => {
        setShowElement2(!showElement2);
        setShowButton2(!showButton2);
        setHideElement2(!hideElement2);
    };

    const handleClick3 = () => {
        setShowElement3(!showElement3);
        setShowButton3(!showButton3);
        setHideElement3(!hideElement3);
    };

    const handleClick4 = () => {
        setShowElement4(!showElement4);
        setShowButton4(!showButton4);
        setHideElement4(!hideElement4);
    };

    const handleClick5 = () => {
        setShowElement5(!showElement5);
        setShowButton5(!showButton5);
        setHideElement5(!hideElement5);
    };

    const handleClick6 = () => {
        setShowElement6(!showElement6);
        setShowButton6(!showButton6);
        setHideElement6(!hideElement6);
    };


    const hideElementFunction = () => {
        setShowElement(!showElement);
        setShowButton(!showButton);
        setHideElement(!hideElement);
    }



    const hideElementFunction2 = () => {
        setShowElement2(!showElement2);
        setShowButton2(!showButton2);
        setHideElement2(!hideElement2);
    }

    const hideElementFunction3 = () => {
        setShowElement3(!showElement3);
        setShowButton3(!showButton3);
        setHideElement3(!hideElement3);
    }

    const hideElementFunction4 = () => {
        setShowElement4(!showElement4);
        setShowButton4(!showButton4);
        setHideElement4(!hideElement4);
    }

    const hideElementFunction5 = () => {
        setShowElement5(!showElement5);
        setShowButton5(!showButton5);
        setHideElement5(!hideElement5);
    }

    const hideElementFunction6 = () => {
        setShowElement6(!showElement6);
        setShowButton6(!showButton6);
        setHideElement6(!hideElement6);
    }







    const LinkElement1 = [{ name: 'Mua bất động sản', link: '' },
    { name: 'Bán bất động sản', link: '' },
    { name: 'Thuê bất động sản', link: '' },
    { name: 'Quy hoạch - Pháp lý', link: '' },
    { name: 'Tài chính', link: '' },
    { name: 'Video đánh giá', link: '' }]



    const LinkElementChild1 = [{ name: 'Bán căn hộ chung cư Đà Nẵng ', link: '' },
    { name: 'Bán căn hộ chung cư Bình Dương', link: '' },
    { name: 'Bán căn hộ chung cư  Hải Phòng ', link: '' },
    { name: 'Bán căn hộ chung cư Long An', link: '' },
    { name: 'Bán căn hộ chung cư Đồng Nai', link: '' },
    { name: 'Bán căn hộ chung cư Vũng Tàu', link: '' },
    { name: 'Bán căn hộ chung cư Vũng Tàu', link: '' },
    { name: 'Bán căn hộ chung cư Quảng Ninh', link: '' },
    { name: 'Bán căn hộ chung cư Quảng Nam', link: '' },
    { name: 'Bán căn hộ chung cư Khánh Hòa', link: '' },]

    const LinkElementChild2 = [
        { name: 'Bán nhà riêng Đà Nẵng ', link: '' },
        { name: 'Bán nhà riêng Bình Dương', link: '' },
        { name: 'Bán nhà riêng  Hải Phòng ', link: '' },
        { name: 'Bán nhà riêng Long An', link: '' },
        { name: 'Bán nhà riêng Đồng Nai', link: '' },
        { name: 'Bán nhà riêng Vũng Tàu', link: '' },
        { name: 'Bán nhà riêng Vũng Tàu', link: '' },
        { name: 'Bán nhà riêng Quảng Ninh', link: '' },
        { name: 'Bán nhà riêng Quảng Nam', link: '' },
        { name: 'Bán nhà riêng Khánh Hòa', link: '' },]

    const LinkElementChild3 = [
        { name: 'Bán biệt thự, liền kề Đà Nẵng ', link: '' },
        { name: 'Bán biệt thự, liền kề Bình Dương', link: '' },
        { name: 'Bán biệt thự, liền kề  Hải Phòng ', link: '' },
        { name: 'Bán biệt thự, liền kề Long An', link: '' },
        { name: 'Bán biệt thự, liền kề Đồng Nai', link: '' },
        { name: 'Bán biệt thự, liền kề Vũng Tàu', link: '' },
        { name: 'Bán biệt thự, liền kề Vũng Tàu', link: '' },
        { name: 'Bán biệt thự, liền kề Quảng Ninh', link: '' },
        { name: 'Bán biệt thự, liền kề Quảng Nam', link: '' },
        { name: 'Bán biệt thự, liền kề Khánh Hòa', link: '' },]

    const LinkElementChild4 = [
        { name: 'Bán nhà mặt phố , mặt tiền Đà Nẵng ', link: '' },
        { name: 'Bán nhà mặt phố , mặt tiền Bình Dương', link: '' },
        { name: 'Bán nhà mặt phố , mặt tiền  Hải Phòng ', link: '' },
        { name: 'Bán nhà mặt phố , mặt tiền Long An', link: '' },
        { name: 'Bán nhà mặt phố , mặt tiền Đồng Nai', link: '' },
        { name: 'Bán nhà mặt phố , mặt tiền Vũng Tàu', link: '' },
        { name: 'Bán nhà mặt phố , mặt tiền Vũng Tàu', link: '' },
        { name: 'Bán nhà mặt phố , mặt tiền Quảng Ninh', link: '' },
        { name: 'Bán nhà mặt phố , mặt tiền Quảng Nam', link: '' },
        { name: 'Bán nhà mặt phố , mặt tiền Khánh Hòa', link: '' },]

    const LinkElementChild5 = [
        { name: 'Bán shophouse, nhà phố Đà Nẵng ', link: '' },
        { name: 'Bán shophouse, nhà phố Bình Dương', link: '' },
        { name: 'Bán shophouse, nhà phố  Hải Phòng ', link: '' },
        { name: 'Bán shophouse, nhà phố Long An', link: '' },
        { name: 'Bán shophouse, nhà phố Đồng Nai', link: '' },
        { name: 'Bán shophouse, nhà phố Vũng Tàu', link: '' },
        { name: 'Bán shophouse, nhà phố Vũng Tàu', link: '' },
        { name: 'Bán shophouse, nhà phố Quảng Ninh', link: '' },
        { name: 'Bán shophouse, nhà phố Quảng Nam', link: '' },
        { name: 'Bán shophouse, nhà phố Khánh Hòa', link: '' },]

    const LinkElementChild6 = [
        { name: 'Bán đất nền Đà Nẵng ', link: '' },
        { name: 'Bán đất nền Bình Dương', link: '' },
        { name: 'Bán đất nền  Hải Phòng ', link: '' },
        { name: 'Bán đất nền Long An', link: '' },
        { name: 'Bán đất nền Đồng Nai', link: '' },
        { name: 'Bán đất nền Vũng Tàu', link: '' },
        { name: 'Bán đất nền Vũng Tàu', link: '' },
        { name: 'Bán đất nền Quảng Ninh', link: '' },
        { name: 'Bán đất nền Quảng Nam', link: '' },
        { name: 'Bán đất nền Khánh Hòa', link: '' },]

    const LinkElementChild7 = [
        { name: 'Bán đất Đà Nẵng ', link: '' },
        { name: 'Bán đất Bình Dương', link: '' },
        { name: 'Bán đất  Hải Phòng ', link: '' },
        { name: 'Bán đất Long An', link: '' },
        { name: 'Bán đất Đồng Nai', link: '' },
        { name: 'Bán đất Vũng Tàu', link: '' },
        { name: 'Bán đất Vũng Tàu', link: '' },
        { name: 'Bán đất Quảng Ninh', link: '' },
        { name: 'Bán đất Quảng Nam', link: '' },
        { name: 'Bán đất Khánh Hòa', link: '' },]

    const LinkElementChild8 = [
        { name: 'Bán trang trại , khu nghỉ dưỡng Đà Nẵng ', link: '' },
        { name: 'Bán trang trại , khu nghỉ dưỡng Bình Dương', link: '' },
        { name: 'Bán trang trại , khu nghỉ dưỡng  Hải Phòng ', link: '' },
        { name: 'Bán trang trại , khu nghỉ dưỡng Long An', link: '' },
        { name: 'Bán trang trại , khu nghỉ dưỡng Đồng Nai', link: '' },
        { name: 'Bán trang trại , khu nghỉ dưỡng Vũng Tàu', link: '' },
        { name: 'Bán trang trại , khu nghỉ dưỡng Vũng Tàu', link: '' },
        { name: 'Bán trang trại , khu nghỉ dưỡng Quảng Ninh', link: '' },
        { name: 'Bán trang trại , khu nghỉ dưỡng Quảng Nam', link: '' },
        { name: 'Bán trang trại , khu nghỉ dưỡng Khánh Hòa', link: '' },]


    const LinkElementChild9 = [
        { name: 'Bán codontel Đà Nẵng ', link: '' },
        { name: 'Bán codontel Bình Dương', link: '' },
        { name: 'Bán codontel  Hải Phòng ', link: '' },
        { name: 'Bán codontel Long An', link: '' },
        { name: 'Bán codontel Đồng Nai', link: '' },
        { name: 'Bán codontel Vũng Tàu', link: '' },
        { name: 'Bán codontel Vũng Tàu', link: '' },
        { name: 'Bán codontel Quảng Ninh', link: '' },
        { name: 'Bán codontel Quảng Nam', link: '' },
        { name: 'Bán codontel Khánh Hòa', link: '' },]

    const LinkElementChild10 = [{ name: 'Bán kho, nhà xưởng Đà Nẵng ', link: '' },
    { name: 'Bán kho, nhà xưởng Bình Dương', link: '' },
    { name: 'Bán kho, nhà xưởng  Hải Phòng ', link: '' },
    { name: 'Bán kho, nhà xưởng Long An', link: '' },
    { name: 'Bán kho, nhà xưởng Đồng Nai', link: '' },
    { name: 'Bán kho, nhà xưởng Vũng Tàu', link: '' },
    { name: 'Bán kho, nhà xưởng Vũng Tàu', link: '' },
    { name: 'Bán kho, nhà xưởng Quảng Ninh', link: '' },
    { name: 'Bán kho, nhà xưởng Quảng Nam', link: '' },
    { name: 'Bán kho, nhà xưởng Khánh Hòa', link: '' },]

    const LinkElementChild11 = [{ name: 'Thuê căn hộ chung cư Đà Nẵng ', link: '' },
    { name: 'Thuê căn hộ chung cư Bình Dương', link: '' },
    { name: 'Thuê căn hộ chung cư  Hải Phòng ', link: '' },
    { name: 'Thuê căn hộ chung cư Long An', link: '' },
    { name: 'Thuê căn hộ chung cư Đồng Nai', link: '' },
    { name: 'Thuê căn hộ chung cư Vũng Tàu', link: '' },
    { name: 'Thuê căn hộ chung cư Vũng Tàu', link: '' },
    { name: 'Thuê căn hộ chung cư Quảng Ninh', link: '' },
    { name: 'Thuê căn hộ chung cư Quảng Nam', link: '' },
    { name: 'Thuê căn hộ chung cư Khánh Hòa', link: '' },]

    const LinkElementChild12 = [{ name: 'Thuê nhà riêng Đà Nẵng ', link: '' },
    { name: 'Thuê nhà riêng Bình Dương', link: '' },
    { name: 'Thuê nhà riêng  Hải Phòng ', link: '' },
    { name: 'Thuê nhà riêng Long An', link: '' },
    { name: 'Thuê nhà riêng Đồng Nai', link: '' },
    { name: 'Thuê nhà riêng Vũng Tàu', link: '' },
    { name: 'Thuê nhà riêng Vũng Tàu', link: '' },
    { name: 'Thuê nhà riêng Quảng Ninh', link: '' },
    { name: 'Thuê nhà riêng Quảng Nam', link: '' },
    { name: 'Thuê nhà riêng Khánh Hòa', link: '' },]
    const LinkElementChild13 = [{ name: 'Thuê biệt thự, liền kề Đà Nẵng ', link: '' },
    { name: 'Thuê biệt thự, liền kề Bình Dương', link: '' },
    { name: 'Thuê biệt thự, liền kề  Hải Phòng ', link: '' },
    { name: 'Thuê biệt thự, liền kề Long An', link: '' },
    { name: 'Thuê biệt thự, liền kề Đồng Nai', link: '' },
    { name: 'Thuê biệt thự, liền kề Vũng Tàu', link: '' },
    { name: 'Thuê biệt thự, liền kề Vũng Tàu', link: '' },
    { name: 'Thuê biệt thự, liền kề Quảng Ninh', link: '' },
    { name: 'Thuê biệt thự, liền kề Quảng Nam', link: '' },
    { name: 'Thuê biệt thự, liền kề Khánh Hòa', link: '' },]
    const LinkElementChild14 = [{ name: 'Thuê nhà mặt phố, mặt tiền Đà Nẵng ', link: '' },
    { name: 'Thuê nhà mặt phố, mặt tiền Bình Dương', link: '' },
    { name: 'Thuê nhà mặt phố, mặt tiền  Hải Phòng ', link: '' },
    { name: 'Thuê nhà mặt phố, mặt tiền Long An', link: '' },
    { name: 'Thuê nhà mặt phố, mặt tiền Đồng Nai', link: '' },
    { name: 'Thuê nhà mặt phố, mặt tiền Vũng Tàu', link: '' },
    { name: 'Thuê nhà mặt phố, mặt tiền Vũng Tàu', link: '' },
    { name: 'Thuê nhà mặt phố, mặt tiền Quảng Ninh', link: '' },
    { name: 'Thuê nhà mặt phố, mặt tiền Quảng Nam', link: '' },
    { name: 'Thuê nhà mặt phố, mặt tiền Khánh Hòa', link: '' },]
    const LinkElementChild15 = [{ name: 'Thuê shophouse , nhà phố Đà Nẵng ', link: '' },
    { name: 'Thuê shophouse , nhà phố Bình Dương', link: '' },
    { name: 'Thuê shophouse , nhà phố  Hải Phòng ', link: '' },
    { name: 'Thuê shophouse , nhà phố Long An', link: '' },
    { name: 'Thuê shophouse , nhà phố Đồng Nai', link: '' },
    { name: 'Thuê shophouse , nhà phố Vũng Tàu', link: '' },
    { name: 'Thuê shophouse , nhà phố Vũng Tàu', link: '' },
    { name: 'Thuê shophouse , nhà phố Quảng Ninh', link: '' },
    { name: 'Thuê shophouse , nhà phố Quảng Nam', link: '' },
    { name: 'Thuê shophouse , nhà phố Khánh Hòa', link: '' },]
    const LinkElementChild16 = [{ name: 'Thuê phòng trọ , nhà trọ Đà Nẵng ', link: '' },
    { name: 'Thuê phòng trọ , nhà trọ Bình Dương', link: '' },
    { name: 'Thuê phòng trọ , nhà trọ  Hải Phòng ', link: '' },
    { name: 'Thuê phòng trọ , nhà trọ Long An', link: '' },
    { name: 'Thuê phòng trọ , nhà trọ Đồng Nai', link: '' },
    { name: 'Thuê phòng trọ , nhà trọ Vũng Tàu', link: '' },
    { name: 'Thuê phòng trọ , nhà trọ Vũng Tàu', link: '' },
    { name: 'Thuê phòng trọ , nhà trọ Quảng Ninh', link: '' },
    { name: 'Thuê phòng trọ , nhà trọ Quảng Nam', link: '' },
    { name: 'Thuê phòng trọ , nhà trọ Khánh Hòa', link: '' },]
    const LinkElementChild17 = [{ name: 'Thuê văn phòng Đà Nẵng ', link: '' },
    { name: 'Thuê văn phòng Bình Dương', link: '' },
    { name: 'Thuê văn phòng  Hải Phòng ', link: '' },
    { name: 'Thuê văn phòng Long An', link: '' },
    { name: 'Thuê văn phòng Đồng Nai', link: '' },
    { name: 'Thuê văn phòng Vũng Tàu', link: '' },
    { name: 'Thuê văn phòng Vũng Tàu', link: '' },
    { name: 'Thuê văn phòng Quảng Ninh', link: '' },
    { name: 'Thuê văn phòng Quảng Nam', link: '' },
    { name: 'Thuê văn phòng Khánh Hòa', link: '' },]
    const LinkElementChild18 = [{ name: 'Thuê sang nhượng của hàng , kiot Đà Nẵng ', link: '' },
    { name: 'Thuê sang nhượng của hàng , kiot Bình Dương', link: '' },
    { name: 'Thuê sang nhượng của hàng , kiot  Hải Phòng ', link: '' },
    { name: 'Thuê sang nhượng của hàng , kiot Long An', link: '' },
    { name: 'Thuê sang nhượng của hàng , kiot Đồng Nai', link: '' },
    { name: 'Thuê sang nhượng của hàng , kiot Vũng Tàu', link: '' },
    { name: 'Thuê sang nhượng của hàng , kiot Vũng Tàu', link: '' },
    { name: 'Thuê sang nhượng của hàng , kiot Quảng Ninh', link: '' },
    { name: 'Thuê sang nhượng của hàng , kiot Quảng Nam', link: '' },
    { name: 'Thuê sang nhượng của hàng , kiot Khánh Hòa', link: '' },]
    const LinkElementChild19 = [{ name: 'Thuê kho , nhà xưởng,đất Đà Nẵng ', link: '' },
    { name: 'Thuê kho , nhà xưởng,đất Bình Dương', link: '' },
    { name: 'Thuê kho , nhà xưởng,đất  Hải Phòng ', link: '' },
    { name: 'Thuê kho , nhà xưởng,đất Long An', link: '' },
    { name: 'Thuê kho , nhà xưởng,đất Đồng Nai', link: '' },
    { name: 'Thuê kho , nhà xưởng,đất Vũng Tàu', link: '' },
    { name: 'Thuê kho , nhà xưởng,đất Vũng Tàu', link: '' },
    { name: 'Thuê kho , nhà xưởng,đất Quảng Ninh', link: '' },
    { name: 'Thuê kho , nhà xưởng,đất Quảng Nam', link: '' },
    { name: 'Thuê kho , nhà xưởng,đất Khánh Hòa', link: '' },]


    const LinkElementChild20 = [{ name: 'Bán căn hộ chung cư Hà Nội', link: '' },
    { name: 'Bán nhà riêng Hà Nội', link: '' },
    { name: 'Bán biệt thự, liền kề Hà Nội', link: '' },
    { name: 'Bán nhà mặt phố Hà Nội', link: '' },
    { name: 'Bán shophouse , nhà phố Hà Nội', link: '' },
    { name: 'Bán đất nền Hà Nội', link: '' },
    { name: 'Bán đất Hà Nội', link: '' },
    { name: 'Bán trang trại, khu nghỉ dưỡng Hà Nội', link: '' },
    { name: 'Bán codontel Hà Nội', link: '' },
    { name: 'Bán kho , nhà xưởng Hà Nội', link: '' },]

    const LinkElementChild21 = [{ name: 'Thuê căn hộ chung cư Hà Nội', link: '' },
    { name: 'Thuê nhà riêng Hà Nội', link: '' },
    { name: 'Thuê biệt thự, liền kề Hà Nội', link: '' },
    { name: 'Thuê nhà mặt phố Hà Nội', link: '' },
    { name: 'Thuê shophouse , nhà phố Hà Nội', link: '' },
    { name: 'Thuê phòng trọ, nhà trọ Hà Nội', link: '' },
    { name: 'Thuê văn phòng Hà Nội', link: '' },
    { name: 'Thuê sang nhượng cửa hàng ,kiot Hà Nội dưỡng Hà Nội', link: '' },
    { name: 'Thuê kho , nhà xưởng ,đất Hà Nội', link: '' },]


    const LinkElementChild22 = [{ name: 'Bán căn hộ chung cư Hồ Chí Minh', link: '' },
    { name: 'Bán nhà riêng Hồ Chí Minh', link: '' },
    { name: 'Bán biệt thự, liền kề Hồ Chí Minh', link: '' },
    { name: 'Bán nhà mặt phố Hồ Chí Minh', link: '' },
    { name: 'Bán shophouse , nhà phố Hồ Chí Minh', link: '' },
    { name: 'Bán đất nền Hồ Chí Minh', link: '' },
    { name: 'Bán đất Hồ Chí Minh', link: '' },
    { name: 'Bán trang trại, khu nghỉ dưỡng Hồ Chí Minh', link: '' },
    { name: 'Bán codontel Hồ Chí Minh', link: '' },
    { name: 'Bán kho , nhà xưởng Hồ Chí Minh', link: '' },]

    const LinkElementChild23 = [{ name: 'Thuê căn hộ chung cư Hồ Chí Minh', link: '' },
    { name: 'Thuê nhà riêng Hồ Chí Minh', link: '' },
    { name: 'Thuê biệt thự, liền kề Hồ Chí Minh', link: '' },
    { name: 'Thuê nhà mặt phố Hồ Chí Minh', link: '' },
    { name: 'Thuê shophouse , nhà phố Hồ Chí Minh', link: '' },
    { name: 'Thuê phòng trọ, nhà trọ Hồ Chí Minh', link: '' },
    { name: 'Thuê văn phòng Hồ Chí Minh', link: '' },
    { name: 'Thuê sang nhượng cửa hàng ,kiot Hồ Chí Minh', link: '' },
    { name: 'Thuê kho , nhà xưởng ,đất Hồ Chí Minh', link: '' },]


    const LinkElementChild24 = [
        { name: 'Vinhomes Ocean Park Gia Lâm', link: '' },
        { name: 'Vinhomes Times City - Park Hill', link: '' },
        { name: 'Century City', link: '' },
        { name: 'The Sun Avenue', link: '' },
        { name: 'The Zei Mỹ Đình', link: '' },
        { name: 'Topaz Elite', link: '' },
        { name: 'Aqua Bay Sky Residences', link: '' },
        { name: 'Masteri Thảo Điền', link: '' },
        { name: 'Q7 Saigon Riverside', link: '' },
        { name: 'Legacy Prime', link: '' },]


    const LinkElementChild25 = [
        { name: "Verosa Park Khang Điền", link: '' },
        { name: "An Vượng Villa", link: '' },
        { name: "HC Golden City", link: '' },
        { name: "Kiến Hưng Luxury", link: '' },
        { name: "Saigon Garden Riverside Village", link: '' },
        { name: "Eurowindow Twin Parks ", link: '' },
        { name: "An Phú Shop Villa", link: '' },
        { name: "Lavila Kiến Á - Nhà Bè", link: '' },
        { name: "One River", link: '' },
        { name: "Sun Grand City Feria Hạ Long", link: '' },

    ]

    const LinkElementChild26 = [
        { name: "Vinhomes Smart City", link: '' },
        { name: "Aqua City", link: '' },
        { name: "Khu đô thị Kim Văn - Kim Lũ (Golden Silk)", link: '' },
        { name: "Khu đô thị mới Xa La", link: '' },
        { name: "Khu đô thị Ecopark", link: '' },
        { name: "FPT City Đà Nẵng", link: '' },
        { name: "Khu đô thị Thanh Hà Mường Thanh", link: '' },
        { name: "Lavila Kiến Á - Nhà Bè", link: '' },
        { name: " Vinhomes Gardenia", link: '' },
        { name: "Khu đô thị Nam Thăng Long - Ciputra", link: '' },

    ]

    const LinkElementChild27 = [
        { name: "Goldmark City", link: '' },
        { name: "Vinhomes Grand Park", link: '' },
        { name: "Times City", link: '' },
        { name: "Celadon City", link: '' },
        { name: "Royal City", link: '' },
        { name: " Saigon Pearl", link: '' },
        { name: "Louis City Hoàng Mai", link: '' },
        { name: "Louis City Hoàng Mai", link: '' },
        { name: "The Matrix One", link: '' },
        { name: "Golden Mansion", link: '' },


    ]

    const LinkElementChild28 = [
        { name: "Ecohome 3", link: '' },
        { name: "Him Lam Hùng Vương", link: '' },
        { name: "The Ori Garden", link: '' },
        { name: "NHS Phương Canh Residence", link: '' },
        { name: "Hope Residence", link: '' },
        { name: "Lucky House Kiến Hưng", link: '' },
        { name: "Sơn An Plaza", link: '' },
        { name: "PH Nha Trang", link: '' },
        { name: "Ehome S", link: '' },
        { name: "Thăng Long Green City", link: '' },
    ]

    const LinkElementChild29 = [
        { name: "Centa Diamond", link: '' },
        { name: "Imperia Grand Plaza Đức Hòa", link: '' },
        { name: "Mega Royal City Đồng Xoài", link: '' },
        { name: "Artisan Park", link: '' },
        { name: "KVG Mozzadiso Nha Trang", link: '' },
        { name: "Regal Dragon Quy Nhơn", link: '' },
        { name: "The Sholi Bình Tân", link: '' },
        { name: "TNR Stars Yên Bái City", link: '' },
        { name: "Sơn Đồng Center", link: '' },
        { name: "Phú Xuân City", link: '' },
    ]

    const LinkElementChild30 = [
        { name: "Stella Mega City", link: '' },
        { name: "Phúc An City", link: '' },
        { name: "Khu dân cư Icon Central", link: '' },
        { name: "La Vida Residences", link: '' },
        { name: "Para Grus", link: '' },
        { name: "Regal Dragon Quy Nhơn", link: '' },
        { name: "Dự án Huy Hoàng", link: '' },
        { name: "Sun Plaza Grand World", link: '' },
        { name: "Khai Sơn Hill", link: '' },
        { name: "Sadeco Phước Kiển", link: '' },
    ]

    const LinkElementChild31 = [
        { name: 'Vinhomes Ocean Park Gia Lâm', link: '' },
        { name: 'Vinhomes Grand Park', link: '' },
        { name: 'Vinhomes Smart City', link: '' },
        { name: 'Vinhomes Times City - Park Hill', link: '' },
        { name: 'Times City', link: '' },
        { name: 'The Empire - Vinhomes Ocean Park 2', link: '' },
        { name: 'Vinhomes Gardenia', link: '' },
        { name: 'Royal City', link: '' },
        { name: 'Vinhomes Central Park', link: '' },
        { name: 'Vinhomes Riverside', link: '' },

    ]











    return (
        <div >
            <div className="AllOption_Introduce1">
                <div className="AllOption_Introduce3">
                    <h3 className="Subject_Introduce">Chủ đề nổi bật</h3>
                    <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Tin tức bất động sản</p></a>
                    <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Bất động sản Hà Nội</p></a>
                    <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Bất động sản Hồ Chí Minh</p></a>
                    <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Báo cáo thị trường</p></a>
                    <a href="" className='Link_Introduce1'><p className='Letter_Introduce1'>Mua bất động sản</p></a>
                    <ToggleElement LinkElement={LinkElement1}></ToggleElement>
                </div>
                <div className="AllOption_Introduce3">
                    <h3 className="Subject_Introduce">Bất động sản bán</h3>
                    <ToggleElementChild name='Bán căn hộ chung cư' LinkElement={LinkElementChild1}></ToggleElementChild>
                    <ToggleElementChild name='Bán nhà riêng' LinkElement={LinkElementChild2}></ToggleElementChild>
                    <ToggleElementChild name='Bán biệt thự,liền kề' LinkElement={LinkElementChild3}></ToggleElementChild>
                    <ToggleElementChild name='Bán nhà mặt phố , mặt tiền' LinkElement={LinkElementChild4}></ToggleElementChild>
                    <ToggleElementChild name='Bán shophouse , nhà phố' LinkElement={LinkElementChild5}></ToggleElementChild>
                    <div>
                        {showButton && (<a onClick={handleClick} className='MoreOptioneIntroduce'>Xem thêm</a>)}
                        {showElement && <div> <ToggleElementChild name='Bán đất nền' LinkElement={LinkElementChild6}></ToggleElementChild>
                            <ToggleElementChild name='Bán đất' LinkElement={LinkElementChild7}></ToggleElementChild>
                            <ToggleElementChild name='Bán trang trại , khu nghỉ dưỡng' LinkElement={LinkElementChild8}></ToggleElementChild>
                            <ToggleElementChild name='Bán condotel' LinkElement={LinkElementChild9}></ToggleElementChild>
                            <ToggleElementChild name='Bán kho , nhà xưởng' LinkElement={LinkElementChild10}></ToggleElementChild>
                        </div>
                        }
                        {hideElement && (<a onClick={hideElementFunction} className='MoreOptioneIntroduce'>Thu gọn</a>)}
                    </div>
                </div>
                <div className="AllOption_Introduce3">
                    <h3 className="Subject_Introduce">Bất động sản thuê</h3>
                    <ToggleElementChild name="Thuê căn hộ chung cư" LinkElement={LinkElementChild11}></ToggleElementChild>
                    <ToggleElementChild name="Thuê nhà riêng" LinkElement={LinkElementChild12}></ToggleElementChild>
                    <ToggleElementChild name="Thuê biệt thự liền kề" LinkElement={LinkElementChild13}></ToggleElementChild>
                    <ToggleElementChild name="Thuê mặt phố , mặt tiền" LinkElement={LinkElementChild14}></ToggleElementChild>
                    <ToggleElementChild name="Thuê shophouse , nhà phố" LinkElement={LinkElementChild15}></ToggleElementChild>
                    {showButton2 && (<a onClick={handleClick2} className='MoreOptioneIntroduce'>Xem thêm</a>)}
                    {showElement2 && <div>
                        <ToggleElementChild name="Thuê phòng trọ, nhà trọ" LinkElement={LinkElementChild16}></ToggleElementChild>
                        <ToggleElementChild name="Thuê văn phòng" LinkElement={LinkElementChild17}></ToggleElementChild>
                        <ToggleElementChild name="Thuê sang nhượng cửa hàng , kiot" LinkElement={LinkElementChild18}></ToggleElementChild>
                        <ToggleElementChild name="Thuê kho, nhà xưởng, đất" LinkElement={LinkElementChild19}></ToggleElementChild>
                    </div>
                    }
                    {hideElement2 && (<a onClick={hideElementFunction2} className='MoreOptioneIntroduce'>Thu gọn</a>)}

                </div>

                <div className="AllOption_Introduce3">
                    <h3 className="Subject_Introduce">Bất động sản toàn quốc </h3>
                    <ToggleElementChild name="Mua bán bất động sản Hà Nội" LinkElement={LinkElementChild20}></ToggleElementChild>
                    <ToggleElementChild name="Cho thuê bất động sản Hà Nội" LinkElement={LinkElementChild21}></ToggleElementChild>
                    <ToggleElementChild name="Mua bán bất động sản Hồ Chí Minh " LinkElement={LinkElementChild22}></ToggleElementChild>
                    <ToggleElementChild name="Cho thuê bất động sản Hồ Chí Minh" LinkElement={LinkElementChild23}></ToggleElementChild>
                </div>

            </div>
            <div className="AllOption_Introduce2">
                <div className="AllOption_Introduce3">
                    <h3 className="Subject_Introduce">Dự án nổi bật</h3>
                    <ToggleElementChild name="Căn hộ chung cư" LinkElement={LinkElementChild24}></ToggleElementChild>
                    <ToggleElementChild name="Biệt thự liền kề" LinkElement={LinkElementChild25}></ToggleElementChild>
                    <ToggleElementChild name="Khu đô thị mới" LinkElement={LinkElementChild26}></ToggleElementChild>
                    <ToggleElementChild name="Khu phức hợp" LinkElement={LinkElementChild27}></ToggleElementChild>
                    <ToggleElementChild name="Nhà ở xã hội" LinkElement={LinkElementChild28}></ToggleElementChild>
                    {showButton3 && (<a onClick={handleClick3} className='MoreOptioneIntroduce'>Xem thêm</a>)}
                    {showElement3 && <div>
                        <ToggleElementChild name="Shophouse" LinkElement={LinkElementChild29}></ToggleElementChild>
                        <ToggleElementChild name="Dự án khác" LinkElement={LinkElementChild30}></ToggleElementChild>
                    </div>
                    }
                    {hideElement3 && (<a onClick={hideElementFunction3} className='MoreOptioneIntroduce'>Thu gọn</a>)}

                </div>
                <div className="AllOption_Introduce3">
                    <h3 className="Subject_Introduce">Chủ đàu tư nổi bật</h3>
                    <ToggleElementChild name="Bất động sản Vinhomes" LinkElement={LinkElementChild24}></ToggleElementChild>
                    <ToggleElementChild name="Bất động sản Sunshine" LinkElement={LinkElementChild24}></ToggleElementChild>
                    <ToggleElementChild name="Bất động sản Phú Mỹ Hưng" LinkElement={LinkElementChild24}></ToggleElementChild>
                    <ToggleElementChild name="Bất động sản Masterise Homes" LinkElement={LinkElementChild24}></ToggleElementChild>
                    <ToggleElementChild name="Bất động sản Hưng Thịnh" LinkElement={LinkElementChild24}></ToggleElementChild>

                    {showButton4 && (<a onClick={handleClick4} className='MoreOptioneIntroduce'>Xem thêm</a>)}
                    {showElement4 && <div>
                        <ToggleElementChild name="Bất động sản Khang Điền" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Bất động sản Phát Đạt" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Bất động sản Novaland" LinkElement={LinkElementChild24}></ToggleElementChild>
                    </div>
                    }
                    {hideElement4 && (<a onClick={hideElementFunction4} className='MoreOptioneIntroduce'>Thu gọn</a>)}
                </div>
                <div className="AllOption_Introduce3">
                    <h3 className="Subject_Introduce">Bất động sản Quận/Huyện</h3>
                    <ToggleElementChild name="Căn hộ chung cư Hà Nội" LinkElement={LinkElementChild24}></ToggleElementChild>
                    <ToggleElementChild name="Nhà riêng Hà Nội" LinkElement={LinkElementChild24}></ToggleElementChild>
                    <ToggleElementChild name="Biệt thự, liền kề Hà Nội" LinkElement={LinkElementChild24}></ToggleElementChild>
                    <ToggleElementChild name="Nhà mặt phố Hà Nội" LinkElement={LinkElementChild24}></ToggleElementChild>
                    <ToggleElementChild name="Shophouse, nhà phố Hà Nội" LinkElement={LinkElementChild24}></ToggleElementChild>

                    {showButton5 && (<a onClick={handleClick5} className='MoreOptioneIntroduce'>Xem thêm</a>)}
                    {showElement5 && <div>
                        <ToggleElementChild name="Đất nền Hà Nội" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Đất Hà Nội" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Trang trại, khu nghỉ dưỡng Hà Nội" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Condotel Hà Nội" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Kho, nhà xưởng Hà Nội" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Căn hộ chung cư Hồ Chí Minh" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Nhà riêng Hồ Chí Minh" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Biệt thự, liền kề Hồ Chí Minh" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Nhà mặt tiền Hồ Chí Minh" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Shophouse, nhà phố Hồ Chí Minh" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Đất nền Hồ Chí Minh" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Đất Hồ Chí Minh" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Trang trại, khu nghỉ dưỡng Hồ Chí Minh" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Condotel Hồ Chí Minh" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Kho , nhà xưởng Hồ Chí Minh" LinkElement={LinkElementChild24}></ToggleElementChild>
                    </div>
                    }
                    {hideElement5 && (<a onClick={hideElementFunction5} className='MoreOptioneIntroduce'>Thu gọn</a>)}
                </div>
                <div className="AllOption_Introduce3">
                    <h3 className="Subject_Introduce">Gía bất động sản toàn quốc</h3>
                    <ToggleElementChild name="Gía căn hộ chung cư" LinkElement={LinkElementChild24}></ToggleElementChild>
                    <ToggleElementChild name="Gía nhà đất" LinkElement={LinkElementChild24}></ToggleElementChild>
                    <ToggleElementChild name="Gía biện thự, liền k" LinkElement={LinkElementChild24}></ToggleElementChild>
                    <ToggleElementChild name="Gía nhà mặt phố, mặt tiền" LinkElement={LinkElementChild24}></ToggleElementChild>



                    {showButton6 && (<a onClick={handleClick6} className='MoreOptioneIntroduce'>Xem thêm</a>)}
                    {showElement6 && <div>
                        <ToggleElementChild name="Gía shophouse, nhà phố" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Gía đất nền" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Gía đất" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Gía trang trại, khu nghỉ dưỡng" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Gía codontel" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Gía kho, nhà xưởng" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Gía thuê căn hộ chung cư" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Gía thuê nhà mặt phố, mặt tiền" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Gía thuê shophouse, nhà phố" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Gía thuê nhà trọ, phòng trọ" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Gía thuê văn phòng" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Gía thuê văn phòng" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Gía thuê cửa hàng, kiot" LinkElement={LinkElementChild24}></ToggleElementChild>
                        <ToggleElementChild name="Gía thuê kho, nhà xưởng" LinkElement={LinkElementChild24}></ToggleElementChild>
                    </div>
                    }
                    {hideElement6 && (<a onClick={hideElementFunction6} className='MoreOptioneIntroduce'>Thu gọn</a>)}


                </div>
            </div>
        </div>
    )
}

export default Introduce_BDS2