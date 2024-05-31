import React from "react";
import "./WhyUgao.css";
import icon01 from "../../../assets/whyUgao.png";
import icon02 from "../../../assets/whyUgao2.png";
import icon03 from "../../../assets/whyUgao3.png";
function WhyUgao(){
    return(
        <div className="container-fluid m-0 p-0 whyUgao-box">
            <div className="whyUgao-box text-center">
                <h1 className="heading pb-4 pt-5">Why Ugaoo</h1>
            </div>
            <div className="d-flex justify-content-evenly m-0">
                <div className="text-center pb-5 m-0"> 
                    <img src={icon01} alt="" className="icons img-fluid pb-3" />
                    <h5 className="heading-second">
                    Secure and Recyclable
                    <br />   Packaging
                    </h5> 
                </div>
                <div className="text-center pb-5 m-0">
                     <img src={icon02} alt="" className="icons img-fluid pb-3" />
                     <h5 className="heading-second">
                     Free Replacements if
                     <br />  Damaged
                     </h5> 
                </div>
                <div className="text-center pb-5 m-0"> 
                <img src={icon03} alt="" className="icons img-fluid pb-3" />
                    <h5 className="heading-second">
                    Self-Watering Pots with
                      <br /> Every Plant
                    </h5> 
                </div>
            </div>
        </div>
    )
}
export default WhyUgao;