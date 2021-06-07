import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Slider.css";
import website from "../images/website.png";
import game from "../images/game.png";
import covid from "../images/covid-tracker.JPG";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={website} />
          </div>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
            <p>
              Creation of an e-commerce website using JavaScript, HTML5, CSS and
              a H2 database. Website included navigation bar responsive design
              for both mobile and desktop versions. Allowing users to add
              products to the basket and register with the website using
              username and password, stored and encrypted within the H2 Database
            </p>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={game} />
          </div>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={covid} />
          </div>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={website} />
          </div>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default ImageSlider;
