import React from "react";
import dealOne from "../../../assets/Deal1.webp";
import { Badge } from "react-bootstrap";
function DealOfTheWee() {
  return (
    <div>
      <div className="container">
        <div class="row">
          <div className="col-md-6">
            <div className="img-dealImg">
              <img src={dealOne} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 ps-4">
            <div className="deal-heading">
              <p className="fs-4  mb-0">Deal Of The Week</p>
              <h1 className="h2">
                Sansevieria Gold Flame Snake <br /> Plant
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
                  <i class="fa-solid fa-indian-rupee-sign point12px"> </i> 749
                </del>{" "}
                <i class="fa-solid fa-indian-rupee-sign point12px"> </i> 599
                {"  "}
                <Badge
                  bg="warning"
                  text="dark"
                  className="rounded-0 text-success fs-6 "
                >
                  Sale{" "}
                </Badge>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealOfTheWee;
