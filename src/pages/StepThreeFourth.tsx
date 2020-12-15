import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi036 from '../assets/mimi-036.png';
import mimi037 from '../assets/mimi-037.png';
import mimi047 from '../assets/mimi-047.png';
import mimi048 from '../assets/mimi-048.png';
import mimi049 from '../assets/mimi-049.png';
import mimi050 from '../assets/mimi-050.png';
import mimi051 from '../assets/mimi-051.png';
import mimi052 from '../assets/mimi-052.png';
import mimi053 from '../assets/mimi-053.png';
import select54one from '../assets/select-54-1.png';
import select54two from '../assets/select-54-2.png';

function StepThreeFourth() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi036} alt="" />
      <img className={styles.image} src={mimi037} alt="" />
      <img className={styles.image} src={mimi047} alt="" />
      <img className={styles.image} src={mimi048} alt="" />
      <img className={styles.image} src={mimi049} alt="" />
      <img className={styles.image} src={mimi050} alt="" />
      <img className={styles.image} src={mimi051} alt="" />
      <img className={styles.image} src={mimi052} alt="" />
      <img className={styles.image} src={mimi053} alt="" />
      <div style={{ display: 'flex', width: '80%', marginTop: '80px' }}>
        <Link to="/stepfourthird">
          <img className={styles.image} src={select54one} alt="" />
        </Link>
        <Link to="/stepfourfourth">
          <img className={styles.image} src={select54two} alt="" />
        </Link>
      </div>
    </main>
  );
}

export default StepThreeFourth;
