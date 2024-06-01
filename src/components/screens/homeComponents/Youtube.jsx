import React, { useState } from "react";  // Import useState here along with React
import "./Youtube.css";
import ytImg from "../../../assets/yt-img.webp";

function Youtube() {
  const [show, setShow] = useState(false);
  
  return (
   <>
    <div className="container-fluid text-center m-0 p-0 position-relative">
      <div className="m-0 p-0 image-container position-relative">
        <img src={ytImg} alt="" className="yt-img-box img-fluid" />

        <div className="btn-yt position-absolute" onClick={() => setShow(true)}>
          <svg
            style={{ width: '100%', height: '100%' }}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            role="presentation"
            className="icon icon-play"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.277 12.927V7.07l4.649 2.927-4.649 2.93zm-.134-7.235a.595.595 0 00-.32-.092c-.344 0-.623.292-.623.653v7.492c0 .119.03.235.089.337.177.309.56.41.855.224l5.954-3.747a.638.638 0 00.214-.224.673.673 0 00-.214-.897L8.144 5.691z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      {show && <iframe className="yt-vdo" style={{ position:'absolute' }} width="560" height="315" src="https://www.youtube.com/embed/Xq2iDxLWgB0?si=KDLDGS_u7gPvfzgs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }
    </div>

   {/* <div className="container-fluid text-center Experience-box my-2">
      <h1 className="heading02 my-4">Experience the magic of growing plants</h1>
 <div className="para my-3">
 <p className="fs-5" >Ugaoo is here to inspire you to have plants around you. To look at life in a very different way, helping you connect with nature. Each plant you buy is packed and shipped with care, from our 25-acre farm to your doorstep.</p>
 </div>
   </div> */}


<div className="custom-rich-text text-center">

  <div className="page-width">
    
  <h1 className="heading02 my-4 px-1">Experience the magic of growing plants</h1>
    <p className="fs-5" >Ugaoo is here to inspire you to have plants around you. To look at life in a very different way, helping you connect with nature. Each plant you buy is packed and shipped with care, from our 25-acre farm to your doorstep.</p>
    
    
  </div>

</div>


    </>
  );
}

export default Youtube;
