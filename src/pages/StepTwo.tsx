import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi010 from '../assets/mimi-010.png';
import mimi011 from '../assets/mimi-011.png';
import mimi012 from '../assets/mimi-012.png';
import mimi013 from '../assets/mimi-013-select-1.png';

function StepTwo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi010} alt="" />
      <img className={styles.image} src={mimi011} alt="" />
      <img className={styles.image} src={mimi012} alt="" />
      <Link to="/stepthree">
        <img className={styles.image} src={mimi013} alt="" />
      </Link>
    </main>
  );
}

export default StepTwo;
