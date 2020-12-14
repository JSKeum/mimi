import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi065 from '../assets/mimi-065.png';
import mimi066 from '../assets/mimi-066.png';
import mimi067 from '../assets/mimi-067.png';
import mimi068 from '../assets/mimi-068.png';
import mimi069 from '../assets/mimi-069-select-9.png';

function StepTen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi065} alt="" />
      <img className={styles.image} src={mimi066} alt="" />
      <img className={styles.image} src={mimi067} alt="" />
      <img className={styles.image} src={mimi068} alt="" />
      <Link to="/stepeleven">
        <img className={styles.image} src={mimi069} alt="" />
      </Link>
    </main>
  );
}

export default StepTen;
