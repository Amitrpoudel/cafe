import React from 'react';

function Services() {
  return (
    <section id="services" style={sectionStyle}>
      <h2 style={headingStyle}>Our Services</h2>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <h3>Dine-In</h3>
          <p>Enjoy a cozy atmosphere with fresh coffee and homemade meals in our cafe.</p>
        </div>
        <div style={cardStyle}>
          <h3>Takeaway</h3>
          <p>Grab your favorite drinks and snacks on the go with our quick takeaway service.</p>
        </div>
        <div style={cardStyle}>
          <h3>Catering</h3>
          <p>We offer catering for corporate events, parties, and special occasions.</p>
        </div>
      </div>
    </section>
  );
}

const sectionStyle = {
  padding: '4rem 2rem',
  backgroundColor: 'darkgrey',
};

const headingStyle = {
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: '2rem',
  fontFamily: 'serif',
};

const cardContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '2rem',
};

const cardStyle = {
  backgroundColor: 'white',
  padding: '1.5rem',
  borderRadius: '12px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  width: '260px',
  textAlign: 'center',
};

export default Services;
