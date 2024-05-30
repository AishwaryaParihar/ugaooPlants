import React from "react";
import { Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import plantImage from "../../../assets/Ceramic_Pots_2.webp";
import bestPicks from "../../../assets/bestPic.webp";
import "./hero.css";
function Hero() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          {/* <ExampleCarouselImage text="First slide"   /> */}
          <div className="img"></div>
          <Carousel.Caption>
            <button
              type="button"
              className="btn btn-success text-uppercase px-3"
            >
              Shop Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <div className="img1"></div>
          <Carousel.Caption>
            <button
              type="button"
              className="btn btn-success text-uppercase px-3"
            >
              Shop Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <div className="img2"></div>
          <Carousel.Caption>
            <button
              type="button"
              className="btn btn-success text-uppercase px-3"
            >
              Gift Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <div className="img3"></div>
          <Carousel.Caption>
            <button
              type="button"
              className="btn btn-success text-uppercase px-3"
            >
              Shop Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* oofers section  */}
      <div className="bg-warning">
        <Container>
          <Row className="pt-3">
            <div className="col-md-6 d-flex justify-content-end">
              <div className="para h3">
                <p>Our very new shades of green.</p>
                <p>Check out our latest sales and offers.</p>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center justify-content-md-start align-items-center ">
              <button
                type="button"
                className="btn btn-success text-uppercase px-5"
              >
                View all offers
              </button>
            </div>
          </Row>
        </Container>
      </div>
      {/* oofers section  */}

      <Container className="plants-category">
        <Row className="my-5 d-flex justify-content-center overflow-x-auto">
          <div className="plant-img d-flex justify-content-around ">
            <div className="justify-content-center">
              <a href="">
                <img src={plantImage} alt="" className="plantImg" />
              </a>
              <p className="text-center ps-3">XL Plant</p>
            </div>
            <div className="justify-content-center">
              <a href="">
                <img src={plantImage} alt="" className="plantImg" />
              </a>
              <p className="text-center ps-3">XL Plant</p>
            </div>
            <div className="justify-content-center">
              <a href="">
                <img src={plantImage} alt="" className="plantImg" />
              </a>
              <p className="text-center ps-3">XL Plant</p>
            </div>
            <div className="justify-content-center">
              <a href="">
                <img src={plantImage} alt="" className="plantImg" />
              </a>
              <p className="text-center ps-3">XL Plant</p>
            </div>
            <div className="justify-content-center">
              <a href="">
                <img src={plantImage} alt="" className="plantImg" />
              </a>
              <p className="text-center ps-3">XL Plant</p>
            </div>
            <div className="justify-content-center">
              <a href="">
                <img src={plantImage} alt="" className="plantImg" />
              </a>
              <p className="text-center ps-3">XL Plant</p>
            </div>
          </div>
        </Row>
      </Container>

      {/* oofers section  */}
      <div className="bg-register">
        <Container>
          <Row className="py-3 ">
            <div className="col-md-6 d-flex justify-content-end">
              <div className="para h3">
                <p>
                  Spend a day immersed in nature with <br /> Ugaoo Farm Tours!!!
                </p>
                <p> Registration is now open</p>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center justify-content-md-start align-items-center ">
              <button
                type="button"
                className="btn btn-success text-uppercase px-5"
              >
                Register Now
              </button>
            </div>
          </Row>
        </Container>
      </div>
      {/* oofers section  */}

      {/* your best picks */}
      <Container className="my-4">
        <div className="heading">
          <h2>Your Best Picks</h2>
        </div>
        <Row className="my-4">
          <div className="col-6 col-md-3">
            <a href="" className="textdecor h5">
              {" "}
              <div className="bestimg">
                <img src={bestPicks} alt="" className="bextpick" />
              </div>
              <p className="text-center py-2"> Plant</p>
            </a>
          </div>
          <div className="col-6 col-md-3">
            <a href="" className="textdecor h5">
              {" "}
              <div className="bestimg">
                <img src={bestPicks} alt="" className="bextpick" />
              </div>
              <p className="text-center py-2"> Plant</p>
            </a>
          </div>
          <div className="col-6 col-md-3">
            <a href="" className="textdecor h5">
              {" "}
              <div className="bestimg">
                <img src={bestPicks} alt="" className="bextpick" />
              </div>
              <p className="text-center py-2"> Plant</p>
            </a>
          </div>
          <div className="col-6 col-md-3">
            <a href="" className="textdecor h5">
              {" "}
              <div className="bestimg">
                <img src={bestPicks} alt="" className="bextpick" />
              </div>
              <p className="text-center py-2"> Plant</p>
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
