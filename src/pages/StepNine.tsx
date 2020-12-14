import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi060 from '../assets/mimi-060.png';
import mimi061 from '../assets/mimi-061.png';
import mimi062 from '../assets/mimi-062.png';
import mimi063 from '../assets/mimi-063.png';
import mimi064 from '../assets/mimi-064-select-8.png';

function StepNine() {
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
      <Link to="/stepten">
        <img className={styles.image} src={mimi064} alt="" />
      </Link>
    </main>
  );
}

export default StepNine;
