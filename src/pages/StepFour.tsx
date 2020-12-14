import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

// import mimi013 from '../assets/mimi-013.png';
import mimi022 from '../assets/mimi-022.png';
import mimi023 from '../assets/mimi-023.png';
import mimi024 from '../assets/mimi-024.png';
import mimi025 from '../assets/mimi-025.png';
import mimi026 from '../assets/mimi-026.png';
import mimi027 from '../assets/mimi-027.png';
import mimi028 from '../assets/mimi-028.png';
import mimi029 from '../assets/mimi-029-select-3.png';

function StepFour() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi022} alt="" />
      <img className={styles.image} src={mimi023} alt="" />
      <img className={styles.image} src={mimi024} alt="" />
      <img className={styles.image} src={mimi025} alt="" />
      <img className={styles.image} src={mimi026} alt="" />
      <img className={styles.image} src={mimi027} alt="" />
      <img className={styles.image} src={mimi028} alt="" />
      <Link to="/stepfive">
        <img className={styles.image} src={mimi029} alt="" />
      </Link>
    </main>
  );
}

export default StepFour;
