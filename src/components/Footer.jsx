export const Footer = () => {
    return (
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="footer-left">
                <div className="service">
                  <h6>이용약관</h6>
                  <h6>개인정보처리방침</h6>
                  <h6>고객센터</h6>
                </div>
              <ul className="company-info">
                <li className="info-item line">비디온리</li>
                <li className="info-item line">대표자 : 홍길동</li>
                <li className="info-item"> 사업자 등록번호 : 356-00-00000</li>
              </ul>
              <ul className="company-info">
                <li className="info-item line">이메일 : test0101@vidionly.co.kr</li>
                <li className="info-item">FAX : 070-0000-0000</li>
              </ul>
              <ul className="company-info">
                <li className="info-item">
                  서울특별시 강남구 도산대로 8길 17 3층{" "}
                </li>
              </ul>
              <p className="copy-right">Copyright© VIDIONLY All rights reserved.</p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <ul className="social-network">
                <li className="social-network__item">
                  <i className="fas fa-bold"></i>
                </li>
                <li className="social-network__item">
                  <i className="fab fa-instagram"></i>
                </li>
                <li className="social-network__item">
                  <i className="fab fa-facebook-f"></i>
                </li>
                <li className="social-network__item">
                  <i className="fab fa-youtube"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}