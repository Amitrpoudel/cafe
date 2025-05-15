import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import your images
import menu1 from '../../assets/menu.jpg1.jpg';
import menu2 from '../../assets/menu.jpg2.jpg';
import menu3 from '../../assets/menu.jpg3.jpg';
import menu4 from '../../assets/menu.jpg4.jpg';


const menuItems = [
  {
    
    image: menu1,
  },
  {
   
    image: menu2,
  },
  {
   
    image: menu3,
  },
  {
    
    image: menu4,
  },
  
];

const MenuSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section style={{ padding: '2rem', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{fontWeight:'bold'}}>Our Menu</h2>
      <Slider {...settings}>
        {menuItems.map((item, index) => (
          <div key={index} style={{ padding: '0 1rem' }}>
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              padding: '1rem',
              maxWidth: '500px',
              margin: 'auto'
            }}>
              <img
                src={item.image}
                alt={item.name}
               
              />
              <h3 style={{ margin: '0.5rem 0' }}>{item.name}</h3>
              <p style={{ fontSize: '0.9rem' }}>{item.description}</p>
              <strong>{item.price}</strong>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default MenuSlider;
