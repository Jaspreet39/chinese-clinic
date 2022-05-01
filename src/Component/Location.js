import React from "react";
import "./Location.css";

function Location() {
  return (
    <div className="location">
      <div className="locationContent">
        <div className="left">
          <h1>Store locations</h1>
          <p>
            Get bulk bill eye test with an optometrist at any one of our 110+
            Australian store locations.
          </p>
          <p>
            Come visit us to have your eye health checked, look out for eye
            problems or eye diseases, update your prescription, and try on all
            of our glasses frames to find the perfect fit. Our in-store stylists
            are here to help you find the right pair of glasses or sunglasses.
          </p>
          <button>Find Location</button>
        </div>
        <div className="right">
          <img
            src="https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/homepage/locations_ow.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Location;
