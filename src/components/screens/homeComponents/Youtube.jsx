import React from "react";
import "./Youtube.css"
import ytImg from "../../../assets/yt-img.webp";
function Youtube(){
    // const [show, setshow] = useState(false)
    return(
       <div className="container-fluid text-center m-0 p-0">
      <div className="m-0 p-0 image-container">
        <img src={ytImg} alt="" className="yt-img-box img-fluid"/>
        <svg className="ytBtn" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"       role="presentation" class="icon icon-play" fill="none" viewBox="0 0 20 20">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.277 12.927V7.07l4.649 2.927-4.649 2.93zm-.134-7.235a.595.595 0 00-.32-.092c-.344 0-.623.292-.623.653v7.492c0 .119.03.235.089.337.177.309.56.41.855.224l5.954-3.747a.638.638 0 00.214-.224.673.673 0 00-.214-.897L8.144 5.691z" fill="currentColor"></path>
       </svg>
      </div>
       </div>
    )
}

export default Youtube;