import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi055 from '../assets/mimi-055.png';
import mimi056 from '../assets/mimi-056.png';
import mimi057 from '../assets/mimi-057.png';
import mimi058 from '../assets/mimi-058.png';
import mimi059 from '../assets/mimi-059-select-7.png';

function StepEight() {
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
      <Link to="/stepnine">
        <img className={styles.image} src={mimi059} alt="" />
      </Link>
    </main>
  );
}

export default StepEight;
