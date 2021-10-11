import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RollingBanner_1 from "../assets/images/RollingBanner_1.png";
import RollingBanner_2 from "../assets/images/RollingBanner_2.png";
import RollingBanner_3 from "../assets/images/RollingBanner_3.png";
import RollingBanner_4 from "../assets/images/RollingBanner_4.png";
import RollingBanner_5 from "../assets/images/RollingBanner_5.png";
import RollingBanner_6 from "../assets/images/RollingBanner_6.png";

export const OwlCarousel = () => {
  // const ref = useRef({});

  // const next = () => {
  //   ref.current.slickNext();
  // };

  // const previous = () => {
  //   ref.current.slickPrev();
  // };

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // };

  const settings = {
    className: "section-outstanding__slider",
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <section className="sample-template">
      <div className="container">
        <p className="create-teampates">
          기업들의 템플릿 제작
          <span className="more">
            more <i className="fas fa-chevron-right"></i>
          </span>
        </p>
      </div>
      <ul className="teamplate-list">
        <Slider {...settings}>
          <li className="teamplate-list__item">
            <div className="bg-image1"></div>
          </li>
          <li className="teamplate-list__item">
          <div className="bg-image2"></div>
          </li>
          <li className="teamplate-list__item">
          <div className="bg-image3"></div>
          </li>
          <li className="teamplate-list__item">
          <div className="bg-image4"></div>
          </li>
          <li className="teamplate-list__item">
          <div className="bg-image5"></div>
          </li>
          <li className="teamplate-list__item">
          <div className="bg-image6"></div>
          </li>
        </Slider>
      </ul>
    </section>
  );
};
