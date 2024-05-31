import React from 'react'
import { Container, Row } from "react-bootstrap";
import bestPicks from "../../../assets/bestPic.webp";
import "./hero.css";
function Bestpick() {
  return (
    <>
      {/* your best picks */}
      <div className="container-fluid px-5 pt-5">
        <div className="heading">
          <h2>Your Best Picks</h2>
        </div>
        <div className="row my-4">
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
        </div>
      </div>
    </>
  )
}

export default Bestpick
