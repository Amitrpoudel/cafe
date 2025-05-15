import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/SNG04078.jpg';
import img2 from '../../assets/SNG04084.jpg';
import img3 from '../../assets/SNG04103.jpg';
import img4 from '../../assets/SNG04107.jpg';
import img5 from '../../assets/SNG04114.jpg';
import img6 from '../../assets/SNG04131.jpg';




function Body() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '1rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
    transition: 'transform 0.3s',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  };

  return (
    <>
      <section style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'white' }}>
        <h2 style={{ fontWeight: 'bold'}} >Gallery</h2>
        <p>Here are some pictures of our cafe.</p>

        <div style={{ width: '80%', margin: '2rem auto' }}>
          <Slider {...settings}>
            {[img1, img2, img3, img4, img5, img6].map((image, index) => (
              <div key={index}>
                <div style={cardStyle}>
                  <img src={image} alt={`Cafe ${index + 1}`} style={imageStyle} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    
    
    </>
  );
}

export default Body;

