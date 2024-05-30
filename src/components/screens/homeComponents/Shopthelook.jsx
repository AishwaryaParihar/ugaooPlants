import React from "react";
// import { Container, Row } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";
// import plantImage from "../../../assets/Ceramic_Pots_2.webp";
// import lookimg from "../../../assets/Sitout_Area_Final-2.webp ";
import lookimg from "../../../assets/Sitout_Area_Final-2.webp";
import "./shopthelook.css";
function Shopthelook() {
  return (
    <>
  
    <div className="container-fluid p-0 m-0">
      <div className="text-center">
        <h1 className="look-heading">  Shop The Look</h1>
      </div>

      <div className="look-img-box">
      <img src={lookimg} alt="" className="look-img img-fluid" />
            </div>

    </div>

    </>
  );
}

export default Shopthelook;
