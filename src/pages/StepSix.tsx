import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi089 from '../assets/mimi-089.png';
import mimi090 from '../assets/mimi-090.png';
import mimi091 from '../assets/mimi-091.png';
import mimi092 from '../assets/mimi-092.png';
import mimi093 from '../assets/mimi-093.png';
import mimi094 from '../assets/mimi-094.png';
import mimi101 from '../assets/mimi-101.png';
import mimi102 from '../assets/mimi-102.png';
import mimi103 from '../assets/mimi-103.png';

function StepSix() {
  const isWithHighstudent = localStorage.getItem('ISHIGHSTUDENTFRIEND') === 'true';

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      {isWithHighstudent
        ? (
          <>
            <img className={styles.image} src={mimi089} alt="" />
            <img className={styles.image} src={mimi090} alt="" />
            <img className={styles.image} src={mimi091} alt="" />
            <img className={styles.image} src={mimi092} alt="" />
            <img className={styles.image} src={mimi093} alt="" />
            <img className={styles.image} src={mimi094} alt="" />
          </>
        )
        : (
          <>
            <img className={styles.image} src={mimi101} alt="" />
            <img className={styles.image} src={mimi102} alt="" />
            <img className={styles.image} src={mimi103} alt="" />
          </>
        )}
      <Link to="/intro">
        <h1>처음으로 돌아가기</h1>
      </Link>
    </main>
  );
}

export default StepSix;
