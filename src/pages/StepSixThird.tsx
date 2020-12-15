import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi101 from '../assets/mimi-101.png';
import mimi102 from '../assets/mimi-102.png';

function StepSixThird() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi101} alt="" />
      <img className={styles.image} src={mimi102} alt="" />
      <div style={{ display: 'flex', width: '80%', marginTop: '80px' }}>
        <Link to="/intro">
          <h1>처음으로 돌아가기</h1>
        </Link>
      </div>
    </main>
  );
}

export default StepSixThird;
