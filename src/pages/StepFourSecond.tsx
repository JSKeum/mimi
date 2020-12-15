import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi065 from '../assets/mimi-065.png';
import mimi066 from '../assets/mimi-066.png';
import mimi067 from '../assets/mimi-067.png';
import mimi068 from '../assets/mimi-068.png';
import select59one from '../assets/select-59-1.png';
import select59two from '../assets/select-59-2.png';

function StepFourSecond() {
  const isWithPrimarystudentBetrayed = localStorage.getItem('ISPRIMARYSTUDENTFRIENDBETRAYED') === 'true';
  const isWithHighstudentBetrayed = localStorage.getItem('ISHIGHSTUDENTFRIENDBETRAYED') === 'true';

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi065} alt="" />
      <img className={styles.image} src={mimi066} alt="" />
      <img className={styles.image} src={mimi067} alt="" />
      <img className={styles.image} src={mimi068} alt="" />
      <div style={{ display: 'flex', width: '80%', marginTop: '80px' }}>
        <Link to="/stepfive">
          <img className={styles.image} src={select59one} alt="" />
        </Link>
        <Link to={isWithPrimarystudentBetrayed || isWithHighstudentBetrayed ? '/stepfivefourth' : '/stepfivesecond'}>
          <img className={styles.image} src={select59two} alt="" />
        </Link>
      </div>
    </main>
  );
}

export default StepFourSecond;
