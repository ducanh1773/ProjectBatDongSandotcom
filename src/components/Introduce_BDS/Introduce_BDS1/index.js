import React from "react";
import './index.css'
import { useState } from "react";


function Introduce_BDS1(){
    const [ShowElement , setShowElement] = useState(false)
    const [hideOpenmore , sethideOpenmore] = useState(true)
    const [hideElement , SetHideElement] = useState(false)
    const HandleClick = () =>{
        setShowElement(true)
        sethideOpenmore(false)
        SetHideElement(true)
    }

    const HideElementClick = () =>{
        setShowElement(false)
        sethideOpenmore(true)
        SetHideElement(false)
    }

   

    return(
        <div className="introduce_BDS1">
            <p>Batdongsan.com.vn là trang web bất động sản hàng đầu tại Việt Nam - Nơi tốt nhất dành cho những người đang tìm kiếm bất động sản để ở hoặc đầu tư. Chúng tôi cung cấp dữ liệu tin rao lớn với đa dạng loại hình bất động sản giúp bạn có những lựa chọn phù hợp với nhu cầu của mình.</p>
            <p>Ở phân khúc nhà đất bán, các loại hình nổi bật gồm <a href="" className="Link_BC_BDS">bán căn hộ chung cư</a>,  
            <a href="" className="Link_BC_BDS">bán nhà riêng</a>,biệt thự và liền kề, bán đất,<a href="" className="Link_BC_BDS"> đất nền dự án</a>
            và một số loại hình đang được nhà đầu tư quan tâm như<a href="" className="Link_BC_BDS">bán condotel</a> , shophouse và khu nghỉ dưỡng. Ngoài ra, người dùng quan tâm đến bất động sản cho thuê có nhiều cơ
             hội để tìm thấy nhà đất ưng ý với danh sách tin rao được cập nhật liên tục tại các danh mục    <a href="" className="Link_BC_BDS"> cho thuê nhà nguyên căn</a> ,
             <a href="" className="Link_BC_BDS"> thuê phòng trọ giá rẻ</a>,thuê văn phòng, mặt bằng kinh doanh. {hideOpenmore &&(<a className="Link_BC_BDS" onClick={HandleClick}>Xem thêm</a>)} </p>
            {ShowElement &&(<div><p>Với bộ lọc chi tiết dựa theo khoảng giá, vị trí, diện tích,... bạn có thể dễ dàng chọn lọc bất động sản phù hợp trong hàng ngàn tin rao bán và cho thuê được cập nhật liên tục mỗi ngày. Lượng tin rao chính chủ lớn đáp ứng nhu cầu của những người tìm nhà không qua môi giới. </p>
            <p>Batdongsan.com.vn cũng cung cấp thông tin toàn diện nhất về các<a href="" className="Link_BC_BDS"> dự án căn hộ chung cư,</a>những đánh giá dự án từ góc nhìn chuyên gia giúp bạn ra quyết định đúng đắn. Ở chuyên mục <a href="" className="Link_BC_BDS"> Wiki BĐS</a> có thể tìm thấy các thông tin đánh giá thị trường,
             những kiến thức, kinh nghiệm mua bán, cho thuê bất động sản để đồng hành cùng bạn trong hành trình tìm nhà. {hideElement&&(<a className="Link_BC_BDS" onClick={HideElementClick}>Thu gọn</a>)}</p></div>)}
             

        </div>
    )
}

export default Introduce_BDS1;