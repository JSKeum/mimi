import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

// import mimi013 from '../assets/mimi-013.png';
import mimi030 from '../assets/mimi-030.png';
import mimi031 from '../assets/mimi-031.png';
import mimi032 from '../assets/mimi-032.png';
import mimi033 from '../assets/mimi-033.png';
import mimi034 from '../assets/mimi-034.png';
import mimi035 from '../assets/mimi-035-select-4.png';

function StepFive() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi030} alt="" />
      <img className={styles.image} src={mimi031} alt="" />
      <img className={styles.image} src={mimi032} alt="" />
      <img className={styles.image} src={mimi033} alt="" />
      <img className={styles.image} src={mimi034} alt="" />
      <Link to="/stepsix">
        <img className={styles.image} src={mimi035} alt="" />
      </Link>
    </main>
  );
}

export default StepFive;
