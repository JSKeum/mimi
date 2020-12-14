import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

// import mimi013 from '../assets/mimi-013.png';
import mimi036 from '../assets/mimi-036.png';
import mimi037 from '../assets/mimi-037.png';
import mimi038 from '../assets/mimi-038.png';
import mimi039 from '../assets/mimi-039.png';
import mimi040 from '../assets/mimi-040.png';
import mimi041 from '../assets/mimi-041.png';
import mimi042 from '../assets/mimi-042.png';
import mimi043 from '../assets/mimi-043.png';
import mimi044 from '../assets/mimi-044.png';
import mimi045 from '../assets/mimi-045.png';
import mimi046 from '../assets/mimi-046-select-5.png';

function StepSix() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi036} alt="" />
      <img className={styles.image} src={mimi037} alt="" />
      <img className={styles.image} src={mimi038} alt="" />
      <img className={styles.image} src={mimi039} alt="" />
      <img className={styles.image} src={mimi040} alt="" />
      <img className={styles.image} src={mimi041} alt="" />
      <img className={styles.image} src={mimi042} alt="" />
      <img className={styles.image} src={mimi043} alt="" />
      <img className={styles.image} src={mimi044} alt="" />
      <img className={styles.image} src={mimi045} alt="" />
      <Link to="/stepseven">
        <img className={styles.image} src={mimi046} alt="" />
      </Link>
    </main>
  );
}

export default StepSix;
