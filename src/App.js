import "./assets/css/styles.scss";
import "./assets/css/responsive.scss";
import "./App.scss";
import "./assets/fonts/AdobeGothicStd-Bold.otf";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Header} from './components/Header';

import { OwlCarousel } from "./components/OwlCarousel";
import { Footer } from "./components/Footer";
import { UsageProcedure } from "./components/UsageProcedure";
import { TutorialGuide } from "./components/TutorialGuide";
import { ExprienceTemplate } from "./components/ExperienceTemplate";
import { VideoTutorial } from "./components/VideoTutorial";
import { Recommend } from "./components/Recommend";

function App() {
  return (
    <div className="wrap">
      <Header />

      <OwlCarousel />
      
      <TutorialGuide />
      <section className="banner-one banner">
        <div className="banner-content">
          <h2>퀄리티있는 브랜딩, 비디온리 하세요</h2>
          <p>나에게 맞는 템플릿,망설이지 말고 지금 직접 체험해보세요! </p>
          <button className="button">시작하기</button>
        </div>
      </section>
      
      <Recommend />
      
      <VideoTutorial />

      <section className="banner-two banner">
        <div className="banner-content">
          <h2>팀원들과 함께 공유하며 작업하세요</h2>
          <p>
            작업량이 많을 때, 마감으로 정신없을 때 <br/>바쁠 때 주고받는 파일이
            말썽이라면? 비디온리 하세요!{" "}
          </p>
        </div>
      </section>

      <ExprienceTemplate />

      <UsageProcedure />
      
      <Footer />
    </div>
  );
}

export default App;
