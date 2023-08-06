import './dangnhap.css';
<link href='https://fonts.googleapis.com/css?family=Lexend' rel='stylesheet'></link>
function dangnhap() {
  return (
    <div className='page'>
      <div className='Main_signin'>
        <div className='img_page'>
          <br></br>
          <img src='https://batdongsan.com.vn/sellernet/static/media/header-logo-sisu.4b76e0ce.svg' className='img_logo'></img><br></br>
          <img src='https://batdongsan.com.vn/sellernet/static/media/cover.800e56db.png'></img>
          <div className='last_left'>
            <p className='find'>Tìm nhà đất </p>
            <p className='last'>Batdongsan.com.vn dẫn lối</p>
          </div>
        </div>
        <div className='right'>
          <div>
            <p className='first_right'>Xin chào bạn</p>
            <p className='next_right'>Đăng nhập để tiếp tục</p>
          </div>
          <form className='form_123123'>
            <div className='input_sdt'>
            <i className="fa fa-user icon_user"></i>
            <input className='input_first' placeholder='SĐT chính hoặc email' ></input><br></br>
            </div>
            <br></br>
            <div className='input_pass'>
            <i class="fa fa-lock icon_lock"></i>
            <input className='input_second' placeholder='Mật khẩu' type='password'></input>
            </div>
          </form>
          <br></br>
          <a className='insign_1' href='https://batdongsan.com.vn/'><button className='insign'>Đăng nhập</button></a>
          <br></br>
          <div className='remember'>
            <div>
              <form>
                <input type='checkbox' value='password'></input>
                <label className='ntk'>Nhớ mật khẩu</label>
              </form>
            </div>
            <div className='qmk'>
              <a className='qmk_2' href='https://search.yahoo.com/search?fr=mcafee&type=E210US91215G0&p=gg+dich'>Quên mật khẩu?</a>
            </div>
          </div>

          <div>
            <div className='or'>
              <div className='line'>

              </div>

              <div className='or_2'>
                <p>Hoặc</p>
              </div>
              <div className='line_2'>

              </div>

            </div>
          </div>
          <div className='dif_insign'>
          <div className='fb'>
          <a className='dif_insign_2' href='https://vi-vn.facebook.com/'><button  className='facebook'><img src='/img/fb.png' className='logo_fb'></img>Facebook</button></a>
          </div>
          <div >
          <a className='dif_insign_2' href='https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser'><button className='gmail'><img src='/img/gg.png' className='logo_gg'></img>Google</button></a>
          </div>
          </div>
          <div className='last_12'>
            <p>Chưa là thành viên? <a href='https://batdongsan.com.vn/sellernet/internal-sign-up' className='dang_ky'>Đăng ký</a> tại đây</p>
          </div>
        </div>
      </div>
      <br></br>


    </div>
  )
}
export default dangnhap;

