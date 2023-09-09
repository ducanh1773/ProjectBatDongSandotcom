import './dangky.css'

function dangky() {
    
    return (
        <div  className='right_dk'>
            <div>
                <div className='back_gr'>
                    <img src='https://batdongsan.com.vn/sellernet/static/media/header-logo-sisu.4b76e0ce.svg' className='logo'></img><br></br>
                    <img src='https://batdongsan.com.vn/sellernet/static/media/cover.800e56db.png' className='pic'></img>
                    <div>
                        <p className='letter'>Tìm nhà bất động sản </p>
                        <p className='letter_2'>Batdongsan.com.vn dẫn lối</p>
                    </div>
                </div>

            </div>
            <div>
                <div>
                    <p className='letter_3'>Xin chào bạn</p>
                    <p className='letter_4'>Đăng ký tài khoản mới</p>
                    <div>
                        <form className='form' action='index.php' method='get'>
                            <div className='form_dk'>
                            <i className="fa fa-user icon_user"></i>
                            <input className = 'INPUT_1' placeholder='Nhập số điện thoại'></input>
                            </div>
                        </form>
                    </div>
                    <br></br>
                    <div className='Button'>
                        <button className='Button_1'>Tiếp tục</button>
                    </div>
                    <br></br>
                    <div className='or'>
                        <div className='line_1'></div>
                        <div className='hoac'>Hoặc</div>
                        <div className='line_2'></div>
                    </div>
                </div>
                <div className='button'>
                    <a href='' className='link_fb'><button className='button_fb'><img src='/img/fb.png' className='img'></img>Facebook</button></a>
                    <a href=''><button className='button_gg'><img src='/img/gg.png' className='img'></img>Google</button></a>
                </div>
                <div className='qc'>
                    <p className='letter_7'>Bằng việc tiếp tục , bạn đồng ý với <a href='https://trogiup.batdongsan.com.vn/docs/dieu-khoan-thoa-thuan' className='link_qc'>Điều khoản sử dụng</a>, <a href='https://trogiup.batdongsan.com.vn/docs/chinh-sach-bao-mat' className='link_qc'>Chính sách bảo mật</a></p>
                    <p className='letter_7' ><a href='https://trogiup.batdongsan.com.vn/docs/quy-che-hoat-dong' className='link_qc'>Quy chế</a>, <a href='https://trogiup.batdongsan.com.vn/docs/quy-che-hoat-dong' className='link_qc'>Chính sách</a> của chúng tôi</p>
                </div>
                <div className='last'>
                    <p>Bạn đã có tài khoản? <a href='' className='last_3'>Đăng nhập</a> tại đây</p>
                </div>
            </div>
        </div>
    )
}

export default dangky;