import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi030 from '../assets/mimi-030.png';
import mimi015 from '../assets/mimi-015.png';
import mimi016 from '../assets/mimi-016.png';
import mimi017 from '../assets/mimi-017.png';
import mimi038 from '../assets/mimi-038.png';
import mimi039 from '../assets/mimi-039.png';
import mimi040 from '../assets/mimi-040.png';
import mimi041 from '../assets/mimi-041.png';
import mimi042 from '../assets/mimi-042.png';
import mimi043 from '../assets/mimi-043.png';
import mimi044 from '../assets/mimi-044.png';
import mimi045 from '../assets/mimi-045.png';
import select46one from '../assets/select-46-1.png';
import select46two from '../assets/select-46-2.png';

function StepThree() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const saveHighstudentBetrayed = () => {
    localStorage.setItem('ISHIGHSTUDENTFRIENDBETRAYED', 'true');
  };

  const saveHighstudentNotBetrayed = () => {
    localStorage.setItem('ISHIGHSTUDENTFRIENDBETRAYED', 'false');
  };

  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi030} alt="" />
      <img className={styles.image} src={mimi015} alt="" />
      <img className={styles.image} src={mimi016} alt="" />
      <img className={styles.image} src={mimi017} alt="" />
      <img className={styles.image} src={mimi038} alt="" />
      <img className={styles.image} src={mimi039} alt="" />
      <img className={styles.image} src={mimi040} alt="" />
      <img className={styles.image} src={mimi041} alt="" />
      <img className={styles.image} src={mimi042} alt="" />
      <img className={styles.image} src={mimi043} alt="" />
      <img className={styles.image} src={mimi044} alt="" />
      <img className={styles.image} src={mimi045} alt="" />
      <div style={{ display: 'flex', width: '80%', marginTop: '80px' }}>
        <Link to="/stepfour" onClick={saveHighstudentNotBetrayed}>
          <img className={styles.image} src={select46one} alt="" />
        </Link>
        <Link to="/stepfoursecond" onClick={saveHighstudentBetrayed}>
          <img className={styles.image} src={select46two} alt="" />
        </Link>
      </div>
    </main>
  );
}

export default StepThree;
