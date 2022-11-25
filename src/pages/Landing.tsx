import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from 'src/components/assets/images/logo-2-1.png';
import { animate, motion, AnimatePresence, useIsPresent } from 'framer-motion';
import styled from 'styled-components';
import { animateScroll } from 'react-scroll';

const ContainerStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .landing-logo {
    width: 360px;

    @media screen and (max-width: 768px) {
      width: 10rem;
    }
  }
`;

const Landing = () => {
  const navigate = useNavigate();
  const [opacity, setOpacity] = useState(1);
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const timeOut = () => {
    setTimeout(() => navigate('/main'), 2000);
    setOpacity(0);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <ContainerStyle>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: opacity }}
          transition={{ duration: 1.8 }}
          onClick={timeOut}
          className="privacy-screen">
          <img className="landing-logo" src={logo} />
        </motion.div>
      </ContainerStyle>
    </AnimatePresence>
  );
};

export default Landing;
