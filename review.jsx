import React from 'react';

const reviews = [
  {
    name: 'Amit Sharma',
    text: 'Lovely cafe with great coffee and friendly staff. Will visit again!',
    rating: 5,
  },
  {
    name: 'Neha Kapoor',
    text: 'Cozy ambience and delicious food. Highly recommended!',
    rating: 4,
  },
  {
    name: 'Raj Mehta',
    text: 'Best pancakes I’ve had in a while. The service is quick and polite.',
    rating: 5,
  },
];

const ReviewSection = () => {
  return (
    <section style={{ padding: '2rem', backgroundColor: '#f4f4f4' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontWeight:'bold' }}>Customer Reviews</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}>
        {reviews.map((review, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            padding: '1rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            width: '300px',
          }}>
            <h4>{review.name}</h4>
            <p style={{ fontStyle: 'italic' }}>{review.text}</p>
            <p>⭐️ {review.rating} / 5</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
