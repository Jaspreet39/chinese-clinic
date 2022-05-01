import React from "react";
import "./Frame.css";

function Frame() {
  const card = [
    {
      title: "New Arrivals",
      desc: "Shop our new collection of the latest glasses, including prescription and non-prescriptions. With 2 pairs from $199.",
      button: "Explore More",
      img: "https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/homepage/new__arrivals.jpeg",
    },
    {
        title: "Shop by Face Shape",
        desc: "No matter what your face shape is, there’s a flattering style for you. Learn how to choose the best glasses to suit your face shape!",
      button: "Learn More",
      img: "https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/homepage/new__arrivals.jpeg",
    },
  ];

  const thumb = [
      {
          title:'Iconic Range',
          button:'shop now',
      },
      {
          title: 'Jelly Collection',
          button: 'shop now',
      },
      {
          title: 'Sunglasses',
          button: 'shop now',
      }
  ]

  return (
    <div className="frame">
      <p>Find the perfect frames with 2 complete pairs from $199</p>
      <div className="card">
        {card.map((item)=>(
            <div className="cardContent">
                <h2>{item.title}</h2>
                <h3>
                    {item.desc}
                </h3>
                <button>{item.button}</button>
            </div>
        ))}
      </div>

          <div className="thumb">
              {thumb.map((item) => (
                <div className="thumbContent"> 
                      <h2>{item.title}</h2>
                      <h3>
                          {item.desc}
                      </h3>
                      <button>{item.button}</button>
                  </div>
              ))}
          </div>
    </div>
  );
}

export default Frame;
