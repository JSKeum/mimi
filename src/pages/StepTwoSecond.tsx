import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi026 from '../assets/mimi-026.png';
import mimi027 from '../assets/mimi-027.png';
import mimi028 from '../assets/mimi-028.png';
import select21one from '../assets/select-21-1.png';
import select21two from '../assets/select-21-2.png';

function StepTwoSecond() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const saveHighstudent = () => {
    localStorage.setItem('ISHIGHSTUDENTFRIEND', 'true');
  };
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi026} alt="" />
      <img className={styles.image} src={mimi027} alt="" />
      <img className={styles.image} src={mimi028} alt="" />
      <div style={{ display: 'flex', width: '80%', marginTop: '80px' }}>
        <Link to="/stepthreethird" onClick={saveHighstudent}>
          <img className={styles.image} src={select21one} alt="" />
        </Link>
        <Link to="/stepthreefourth">
          <img className={styles.image} src={select21two} alt="" />
        </Link>
      </div>
    </main>
  );
}

export default StepTwoSecond;
