import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi055 from '../assets/mimi-055.png';
import mimi056 from '../assets/mimi-056.png';
import mimi057 from '../assets/mimi-057.png';
import mimi058 from '../assets/mimi-058.png';
import select59one from '../assets/select-59-1.png';
import select59two from '../assets/select-59-2.png';

function StepFour() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi055} alt="" />
      <img className={styles.image} src={mimi056} alt="" />
      <img className={styles.image} src={mimi057} alt="" />
      <img className={styles.image} src={mimi058} alt="" />
      <div style={{ display: 'flex', width: '80%', marginTop: '80px' }}>
        <Link to="/stepfive">
          <img className={styles.image} src={select59one} alt="" />
        </Link>
        <Link to="/stepfivesecond">
          <img className={styles.image} src={select59two} alt="" />
        </Link>
      </div>
    </main>
  );
}

export default StepFour;
