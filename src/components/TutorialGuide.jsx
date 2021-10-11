
import thumbnail_1 from "../assets/images/thumbnail_1.png";
import thumbnail_2 from "../assets/images/thumbnail_2.png";
import thumbnail_3 from "../assets/images/thumbnail_3.png";

export const TutorialGuide = () => {
    return (
        <section className="tutorial-guide">
        <div className="container">
          <div className="title-guide">
            <p>tutorial guide</p>
            <h2>영상 만들기, 어렵지 않아요</h2>
            <span>
              나에게 맞는 템플릿, <br />
              망설이지 말고 지금 직접 체험해보세요!
            </span>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="thumbnail">
                <div className="thumbnail-img">
                  <img src={thumbnail_1} />
                </div>
                <div className="thumbnail-body">
                  <div className="thumbnail-text">
                    <span>첫번째</span>
                    <h3>내 브랜드에 맞는 영상 만들기</h3>
                  </div>
                  <span className="arrow-icon">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="thumbnail">
                <div className="thumbnail-img">
                  <img src={thumbnail_2} />
                </div>
                <div className="thumbnail-body">
                  <div className="thumbnail-text">
                    <span>두번째</span>
                    <h3>작업자들이 소통하며 템플릿 영상 작업</h3>
                  </div>
                  <span className="arrow-icon">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="thumbnail">
                <div className="thumbnail-img">
                  <img src={thumbnail_3} />
                </div>
                <div className="thumbnail-body">
                  <div className="thumbnail-text">
                    <span>세번째</span>
                    <h3>단 하나 뿐인 내 브랜드 영상 제작 완료</h3>
                  </div>
                  <span className="arrow-icon">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}