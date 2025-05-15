import React from 'react';
import { Parallax } from 'react-parallax';
import computerImg from '../../assets/Banner.jpg';
import Body from '../Body/Body';
import { useNavigate } from 'react-router-dom';
import Hero from '../Hero/hero';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Banner() {
  const navigate = useNavigate();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <>
      <Parallax
        bgImage={computerImg}
        strength={400}
        bgImageStyle={{ minHeight: '100vh' }}
      >
        <section
          style={{
            position: 'relative',
            height: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Dark overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            }}
          ></div>

          {/* Animated Card Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 10, ease: 'easeOut' }}
            style={{
              position: 'relative',
              zIndex: 2,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              padding: '2rem',
              borderRadius: '12px',
              maxWidth: '500px',
              color: 'white',
            }}
          >
            <h2>Welcome to Central Cafe</h2>
            <p>Enjoy our delicious brews and cozy ambience.</p>
            <button
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#ffb347',
                border: 'none',
                borderRadius: '6px',
                color: 'black',
                cursor: 'pointer',
              }}
              onClick={() => navigate('/menu')}
            >
              View Menu
            </button>
          </motion.div>
        </section>
      </Parallax>

      {/* Remaining components */}
      <Body />
      <Hero />
    </>
  );
}

export default Banner;

