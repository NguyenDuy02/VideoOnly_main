export const Header = () => {
    return (
        <header>
        <div className="container">
          <div className="header-top">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="navbar-brand">videoonly</div>
              <label htmlFor="nav-mobile-input" className="nav__bars-btn">
                <span><i className="fas fa-bars"></i></span>
              </label>
              <input type="checkbox" hidden className="nav-input" id="nav-mobile-input"/>
              <label htmlFor="nav-mobile-input" className="nav__overlay"></label>
              <nav className="nav__mobile">
                <label htmlFor="nav-mobile-input" className="nav__mobile-close">
                <i className="fas fa-times"></i>
                </label>
                <ul className="nav__mobile-list">
                    <li className="nav__mobile-item">login</li>
                    <li className="nav__mobile-item">join</li>
                  </ul>
              </nav>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">login</li>
                  <li className="nav-item active">join</li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="header-content">
            <h1>
              비디온리는 <br /> 오직 당신의 브랜드만를 위해 <br />
              템플릿을 만듭니다
            </h1>
            <p>나만의 브랜드를 위한 영상 템플릿을 직접 경험해보세요.</p>
            <button className="button">시작하기</button>
          </div>
        </div>
      </header>
    );
}