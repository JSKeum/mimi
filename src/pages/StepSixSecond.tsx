import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

// import mimi013 from '../assets/mimi-013.png';
import mimi086 from '../assets/mimi-086.png';
import mimi087 from '../assets/mimi-087.png';
import mimi088 from '../assets/mimi-088.png';

function StepSixSecond() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi086} alt="" />
      <img className={styles.image} src={mimi087} alt="" />
      <img className={styles.image} src={mimi088} alt="" />
      <div style={{ display: 'flex', width: '80%', marginTop: '80px' }}>
        <Link to="/intro">
          <h1>처음으로 돌아가기</h1>
        </Link>
      </div>
    </main>
  );
}

export default StepSixSecond;
