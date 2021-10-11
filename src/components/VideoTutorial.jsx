import image_2 from "../assets/images/image_2.png";

export const VideoTutorial = () => {
    return (
        <section className="video-tutorial">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="text-content">
                <span>How do I make a video</span>
                <h2>영상제작은 어떻게하나요?</h2>
                <p>
                  직 단 하나의 영상 템플릿을 만들기 때문에 절차가 어려울
                  것이라고 생각합니다. 하지만 우리는 특정 회사에서 원하는
                  템플릿을 만들고, 해당 템플릿을 사용해서 직접 더 나은 비디오를
                  만들 수 있도록 컨설팅을 합니다. 세계에서 단 하나뿐인 템플릿,
                  어렵게 생각하지 마세요. 비디 온리와 함께라면 쉽고 간편하게
                  만들 수 있습니다.
                </p>
                <button className="button">시작하기</button>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="content-img">
                <img src={image_2} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}