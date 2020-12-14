import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi014 from '../assets/mimi-014.png';
import mimi015 from '../assets/mimi-015.png';
import mimi016 from '../assets/mimi-016.png';
import mimi017 from '../assets/mimi-017.png';
import mimi018 from '../assets/mimi-018.png';
import mimi019 from '../assets/mimi-019.png';
import mimi020 from '../assets/mimi-020.png';
import mimi021 from '../assets/mimi-021-select-2.png';

function StepThree() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi014} alt="" />
      <img className={styles.image} src={mimi015} alt="" />
      <img className={styles.image} src={mimi016} alt="" />
      <img className={styles.image} src={mimi017} alt="" />
      <img className={styles.image} src={mimi018} alt="" />
      <img className={styles.image} src={mimi019} alt="" />
      <img className={styles.image} src={mimi020} alt="" />
      <Link to="/stepfour">
        <img className={styles.image} src={mimi021} alt="" />
      </Link>
    </main>
  );
}

export default StepThree;
