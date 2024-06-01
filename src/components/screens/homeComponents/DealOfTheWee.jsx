import React, { useState } from "react";
import dealOne from "../../../assets/Deal1.webp";
import { Badge } from "react-bootstrap";

function DealOfTheWeek() {
  const [count, setCount] = useState(1);
  const [selectedPlanter, setSelectedPlanter] = useState("GroPot");
  const [showColors, setShowColors] = useState(true);

  const planters = [
    { name: "GroPot", colors: ["red", "blue"] },
    { name: "Krish", colors: ["Pink", "peach", "green", "yellow", "purple"] },
    { name: "Grail", colors: ["black"] },
  ];

  const handlePlanterChange = (planter) => {
    const existingPlanter = planters.find((p) => p.name === planter);
    if (existingPlanter) {
      setSelectedPlanter(planter);
      setShowColors(true);
    }
  };

  return (
    <>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-6">
            <div className="img-dealImg">
              <img
                src={dealOne}
                alt=""
                className="img-fluid"
                
              />
            </div>
          </div>
          <div className="col-md-6 ps-5 deal-of-the-week">
            <div className="deal-heading">
              <p className="fs-4 mb-0">Deal Of The Week</p>
              <h1 className="h2">
                Sansevieria Gold Flame Snake
                <br /> Plant
              </h1>
              <p className="point12px">
                <i className="fas fa-star text-warning"></i>{" "}
                <i className="fas fa-star text-warning"></i>{" "}
                <i className="fas fa-star text-warning"></i>{" "}
                <i className="fas fa-star text-warning"></i>{" "}
                <i className="fas fa-star text-warning"></i>
              </p>
              <p className="text-success fs-4">
                {" "}
                <del className="text-secondary point12px">
                  <i className="fa-solid fa-indian-rupee-sign point12px"></i> 749
                </del>{" "}
                <i className="fa-solid fa-indian-rupee-sign point12px"></i> 599{" "}
                <Badge
                  bg="warning"
                  text="dark"
                  className="rounded-0 text-success fs-6"
                >
                  Sale{" "}
                </Badge>
              </p>
            </div>
            <div className="color-picker">
              <h6>Select planter</h6>
              <div className="planter-options">
                {planters.map((planter) => (
                  <div
                    key={planter.name}
                    className="planter-option"
                    onClick={() => handlePlanterChange(planter.name)}
                  >
                    {planter.name}
                  </div>
                ))}
              </div>
              {showColors && (
                <div className="color-options">
                  <h6>
                    Color- <span className="text-secondary">Ivory</span>
                  </h6>
                  {planters.find(
                    (planter) => planter.name === selectedPlanter
                  ) ? (
                    planters
                      .find((planter) => planter.name === selectedPlanter)
                      .colors.map((color) => (
                        <div
                          key={color}
                          className="color-option"
                        >
                          <div
                            className="color-swatch"
                            style={{ backgroundColor: color }}
                          ></div>
                        </div>
                      ))
                  ) : (
                    <div>No colors available</div>
                  )}
                </div>
              )}
            </div>
            <div className="buy-product">
              <div className="count-product mb-3">
                <button
                  className="btn minus border-0"
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                >
                  <span className="minus-circle">
                    <span className="minus-sign">-</span>
                  </span>
                </button>
                <input
                  type="text"
                  aria-label="First name"
                  className="text-center noOfProduct border-0"
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value))}
                />
                <button
                  className="btn plus border-0"
                  onClick={() => setCount(count + 1)}
                >
                  <span className="plus-circle">
                    <span className="plus-sign">+</span>
                  </span>
                </button>
                <button className="btn btn-success text-uppercase add-cart-btn">
                  {" "}
                  Add to cart{" "}
                </button>
              </div>
              <button
                type="button"
                className="btn border border-success text-success text-uppercase buy-it"
              >
                buy it now
              </button>
              <p className="buy-it mt-4 ">
                Gold Flame isn’t a name given lightly to this stunning Snake
                plant variety. Its green-yellow, rosette-shaped leaves make it
                seem as though a flame of yellow is emerging from the very
                depths of the dark abyss. Low maintenance and sleek, the
                Sansevieria Gold Flame makes for a brilliant indoor plant.{" "}
              </p>
              <a
                href=""
                className="nolink text-decoration-underline text-uppercase"
              >
                view full details <i className="fa-solid fa-arrow-right-long"></i>
              </a>
              <div className="social-media-link d-flex justify-content-between mt-4 buy-it">
                <a href="" className="nolink">
                  <span>
                    <i className="fa-brands fa-facebook"></i> Share
                  </span>
                </a>
                <a href="" className="nolink">
                  {" "}
                  <span>
                    <i className="fa-brands fa-x-twitter"></i> Tweet
                  </span>
                </a>
                <a href="" className="nolink">
                  <span>
                    {" "}
                    <i className="fa-brands fa-pinterest"></i> Pin it
                  </span>
                </a>
                <a href="" className="nolink">
                  {" "}
                  <span>
                    {" "}
                    <i className="fa-solid fa-envelope"></i> Mail
                  </span>
                </a>
                <a href="" className="nolink">
                  <span>
                    {" "}
                    <i className="fa-brands fa-whatsapp"></i> Whatsapp
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DealOfTheWeek;
