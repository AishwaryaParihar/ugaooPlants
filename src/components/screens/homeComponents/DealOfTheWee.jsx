import React, { useState } from "react";
import dealOne from "../../../assets/Deal1.webp";
import { Badge } from "react-bootstrap";

function DealOfTheWeek() {
  let [count, setCount] = useState(1);
  const [selectedPlanter, setSelectedPlanter] = useState("GroPot");
  const [selectedColor, setSelectedColor] = useState("red");
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

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <div className="container-fluid m-5">
        <div className="row">
          <div className="col-md-6">
            <div className="img-dealImg">
              <img
                src={dealOne}
                alt=""
                className="img-fluid"
                style={{
                  borderColor: selectedColor,
                  borderWidth: 2,
                  borderStyle: "solid",
                }}
              />
            </div>
          </div>
          <div className="col-md-6 ps-5">
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
                  <i class="fa-solid fa-indian-rupee-sign point12px"></i> 749
                </del>{" "}
                <i class="fa-solid fa-indian-rupee-sign point12px"></i> 599{" "}
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
                          className="color-option  "
                          onClick={() => handleColorChange(color)}
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
            <div className="buy-product d-flex ">
              <div className="count-product ">
                <button
                  className="btn minus border-0"
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                >
                  {" "}
                  -{" "}
                </button>
                <input
                  type="text"
                  aria-label="First name"
                  className="text-center noOfProduct border-0 "
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value))}
                />
                <button
                  className="btn  plus  border-0"
                  onClick={() => setCount(count + 1)}
                >
                  {" "}
                  +{" "}
                </button>
                <button className="btn btn-success text-uppercase add-cart-btn">
                {" "}
                Add to cart{" "}
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealOfTheWeek;
