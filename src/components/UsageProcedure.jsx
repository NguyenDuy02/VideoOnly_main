import BigIcon_1 from "../assets/images/BigIcon_1.png";
import BigIcon_2 from "../assets/images/BigIcon_2.png";
import BigIcon_3 from "../assets/images/BigIcon_3.png";
import BigIcon_4 from "../assets/images/BigIcon_4.png";

export const UsageProcedure = () => {
    return (
        <section className="usage-procedure">
        <div className="container">
          <div className="usage-procedure-top">
            <h2>한 눈에 보는 템플릿 절차</h2>
            <p>
              비디온리가 아직 고민되시나요? <br/>비디온리는 오직 당신만을 위한
              템플릿을 통해 기다리고 있습니다.{" "}
            </p>
          </div>
           <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="card">
                <img className="card-img-top" src={BigIcon_1} alt="" />
                <div className="card-body">
                  <h5 className="card-title">이미지 찾기</h5>
                  <p className="card-text">
                    내 회사에 맞는 이미지를 찾아 정합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="card">
                <img className="card-img-top" src={BigIcon_2} alt="" />
                <div className="card-body">
                  <h5 className="card-title">만들기</h5>
                  <p className="card-text">
                    정해둔 이미지에 맞춰 템플릿을 만듭니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="card">
                <img className="card-img-top" src={BigIcon_3} alt="" />
                <div className="card-body">
                  <h5 className="card-title">정리하기</h5>
                  <p className="card-text">
                    회사와 비디온리가 소통을 통해 퀄리티를 높입니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="card">
                <img className="card-img-top" src={BigIcon_4} alt="" />
                <div className="card-body">
                  <h5 className="card-title">제작 완료</h5>
                  <p className="card-text">
                    세상에 단 하나 뿐인 영상 제작 완료!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}