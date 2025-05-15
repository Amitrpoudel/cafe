import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bgImage from '../../assets/bgimg.jpg';
import ReviewSection from '../Review/review';

function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <Parallax
        bgImage={bgImage}
        strength={300}
        bgImageStyle={{ minHeight: '100vh' }}
      >
        <section
          style={{
            padding: '2rem',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            backdropFilter: 'blur(4px)',
          }}
        >
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 80 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 10, ease: 'easeOut' }}
            style={{ maxWidth: '900px', margin: 'auto' }}
          >
            <h3 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              About Us
            </h3>
            <p style={{ lineHeight: 1.7, fontSize: '1.05rem', textAlign: 'justify' }}>
              Cafe Central offers a full range of service options, including dine-in, takeaway,
              making it a versatile choice for any dining occasion. Known for its great coffee,
              decadent desserts, and impressive tea selection, it's the perfect spot whether
              you're out for a quick bite, enjoying a small plate, or sipping on a cocktail,
              beer, or wine.
              <br /><br />
              Popular with solo diners, families, groups, tourists, and college students, the café
              provides a casual yet cosy atmosphere that’s both quiet and trendy. Open for
              breakfast, brunch, lunch, and dessert, it offers comfortable seating, free Wi-Fi,
              and gender-neutral toilet. With a bar on-site, ample parking, and the option to make
              reservations, Cafe Central is not only kid-friendly but also accepts both credit and
              debit cards, ensuring a smooth and enjoyable experience for all guests.
            </p>
          </motion.div>
        </section>
      </Parallax>
      <ReviewSection />
    </>
  );
}

export default Hero;

