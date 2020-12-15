import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi076 from '../assets/mimi-076.png';
import mimi077 from '../assets/mimi-077.png';
import mimi078 from '../assets/mimi-078.png';
import mimi079 from '../assets/mimi-079.png';
import mimi080 from '../assets/mimi-080.png';
import mimi104 from '../assets/mimi-104.png';
import mimi105 from '../assets/mimi-105.png';

function StepFiveSecond() {
  const isWithHighstudent = localStorage.getItem('ISHIGHSTUDENTFRIEND') === 'true';
  const isWithPrimarystudent = localStorage.getItem('ISPRIMARYSTUDENTFRIEND') === 'true';

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi076} alt="" />
      <img className={styles.image} src={mimi077} alt="" />
      <img className={styles.image} src={mimi078} alt="" />
      <img className={styles.image} src={mimi079} alt="" />
      <img className={styles.image} src={mimi080} alt="" />
      {isWithHighstudent && isWithPrimarystudent
        ? <img className={styles.image} src={mimi105} alt="" />
        : <img className={styles.image} src={mimi104} alt="" />}
      <div style={{ display: 'flex', width: '80%', marginTop: '80px' }}>
        <Link to="/intro">
          <h1>처음으로 돌아가기</h1>
        </Link>
      </div>
    </main>
  );
}

export default StepFiveSecond;
