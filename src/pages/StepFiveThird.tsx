import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

// import mimi013 from '../assets/mimi-013.png';
import mimi075 from '../assets/mimi-075.png';
import mimi095 from '../assets/mimi-095.png';
import mimi096 from '../assets/mimi-096.png';
import mimi097 from '../assets/mimi-097.png';

function StepFiveThird() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi075} alt="" />
      <img className={styles.image} src={mimi095} alt="" />
      <img className={styles.image} src={mimi096} alt="" />
      <img className={styles.image} src={mimi097} alt="" />
      <div style={{ display: 'flex', width: '80%', marginTop: '80px' }}>
        <Link to="/intro">
          <h1>처음으로 돌아가기</h1>
        </Link>
      </div>
    </main>
  );
}

export default StepFiveThird;
