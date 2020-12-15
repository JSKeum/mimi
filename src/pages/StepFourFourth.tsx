import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi070 from '../assets/mimi-070.png';
import mimi071 from '../assets/mimi-071.png';
import mimi072 from '../assets/mimi-072.png';
import mimi073 from '../assets/mimi-073.png';
import select59one from '../assets/select-59-1.png';
import select59two from '../assets/select-59-2.png';

function StepFourFourth() {
  const isWithPrimarystudent = localStorage.getItem('ISPRIMARYSTUDENTFRIEND') === 'true';

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi070} alt="" />
      <img className={styles.image} src={mimi071} alt="" />
      <img className={styles.image} src={mimi072} alt="" />
      <img className={styles.image} src={mimi073} alt="" />
      <div style={{ display: 'flex', width: '80%', marginTop: '80px' }}>
        <Link to={isWithPrimarystudent ? 'stepfive' : 'stepfivethird'}>
          <img className={styles.image} src={select59one} alt="" />
        </Link>
        <Link to="/stepfivesecond">
          <img className={styles.image} src={select59two} alt="" />
        </Link>
      </div>
    </main>
  );
}

export default StepFourFourth;
