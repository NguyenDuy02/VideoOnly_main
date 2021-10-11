import image_1 from "../assets/images/image_1.png";

export const Recommend = () => {
    return (
        <section className="recommend">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="content-img">
                <img src={image_1} />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="text-content">
                <span>What is the videonly</span>
                <h2>비디온리는 무엇인가요?</h2>
                <p>
                  세상에는 수많은 회사들이 존재합니다. 비디온리에서는 그
                  중에서도 오직 단 하나의 영상 템플릿을 만듭니다. 우리는 특정
                  회사에서 원하는 템플릿을 만들고, 해당 템플릿을 사용해서 직접
                  더 나은 비디오를 만들 수 있도록 컨설팅을 해줄 수 있습니다.
                  세계에서 하나 뿐인 템플릿, 직접 경험해보세요.
                </p>
                <button className="button">시작하기</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}