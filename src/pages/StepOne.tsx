import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi001 from '../assets/mimi-001.png';
import mimi002 from '../assets/mimi-002.png';
import mimi003 from '../assets/mimi-003.png';
import mimi004 from '../assets/mimi-004.png';
import mimi005 from '../assets/mimi-005.png';
import mimi006 from '../assets/mimi-006.png';
import mimi007 from '../assets/mimi-007.png';
import mimi008 from '../assets/mimi-008.png';
import select9one from '../assets/select-9-1.png';
import select9two from '../assets/select-9-2.png';

function StepOne() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi001} alt="" />
      <img className={styles.image} src={mimi002} alt="" />
      <img className={styles.image} src={mimi003} alt="" />
      <img className={styles.image} src={mimi004} alt="" />
      <img className={styles.image} src={mimi005} alt="" />
      <img className={styles.image} src={mimi006} alt="" />
      <img className={styles.image} src={mimi007} alt="" />
      <img className={styles.image} src={mimi008} alt="" />
      <div style={{ display: 'flex', width: '80%', marginTop: '80px' }}>
        <Link to="/steptwo">
          <img className={styles.image} src={select9one} alt="" />
        </Link>
        <Link to="/steptwosecond">
          <img className={styles.image} src={select9two} alt="" />
        </Link>
      </div>
    </main>
  );
}

export default StepOne;
