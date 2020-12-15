import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi060 from '../assets/mimi-060.png';
import mimi061 from '../assets/mimi-061.png';
import mimi062 from '../assets/mimi-062.png';
import mimi063 from '../assets/mimi-063.png';
import select59one from '../assets/select-59-1.png';
import select59two from '../assets/select-59-2.png';

function StepFourThird() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi060} alt="" />
      <img className={styles.image} src={mimi061} alt="" />
      <img className={styles.image} src={mimi062} alt="" />
      <img className={styles.image} src={mimi063} alt="" />
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

export default StepFourThird;
