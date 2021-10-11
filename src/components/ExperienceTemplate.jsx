import icon_1 from "../assets/images/icon_1.png";
import icon_2 from "../assets/images/icon_2.png";
import icon_3 from "../assets/images/icon_3.png";

export const ExprienceTemplate = () => {
    return (
        <section className="experience-template">
        <div className="container">
          <h2>체험 가능한 템플릿</h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="experience">
                <img src={icon_1} />
                <p>사용중인 기업</p>
                <p className="number">41</p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="experience">
                <img src={icon_2} />
                <p>완료한 템플릿</p>
                <p className="number">164</p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="experience">
                <img src={icon_3} />
                <p>체험가능한 템플릿</p>
                <p className="number">82</p>
              </div>
            </div>
          </div>
        </div>
        <div className="suitable-model">
          <p>나에게 맞는 템플릿, 망설이지 말고 지금 직접 체험해보세요!</p>
          <button className="button">시작하기</button>
        </div>
      </section>
    );
}