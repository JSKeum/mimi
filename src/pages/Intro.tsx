import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/intro_image.png';
import startButton from '../assets/start_button.png';
import styles from './Step.module.scss';

function Intro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main className={styles.intro} style={{ backgroundImage: `url{${backgroundImage}}` }}>
      <Link to="/stepone">
        <img src={startButton} alt="" />
      </Link>
    </main>

  );
}

export default Intro;
