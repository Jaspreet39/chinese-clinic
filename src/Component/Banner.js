import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

function Banner() {
  const navigate = useNavigate()
  return (
    <div className="banner">
      {/* <img src='https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/feb22_dsk.png' alt=''/> */}
      <div className="bannerContent">
        <h1>2 complete pairs from</h1>
        <h1>$199</h1>
        <p>
          Whether you like an eye-catching pattern or just subtle pops of
          colour, we have the glasses for you.
        </p>
        <button onClick={()=>navigate('/book')}>Book an Appointment</button>
        {/* <div className="bannerButton">
                  <button>shop glasses</button>
                  <button>shop sunglasses</button>
        </div> */}
      </div>
    </div>
  );
}

export default Banner;
