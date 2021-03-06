import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi010 from '../assets/mimi-010.png';
import mimi011 from '../assets/mimi-011.png';
import mimi012 from '../assets/mimi-012.png';
import select21one from '../assets/select-21-1.png';
import select21two from '../assets/select-21-2.png';

function StepTwo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const saveHighstudentFriend = () => {
    localStorage.setItem('ISHIGHSTUDENTFRIEND', 'true');
  };

  const saveHighstudentNotFriend = () => {
    localStorage.setItem('ISHIGHSTUDENTFRIEND', 'false');
  };
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi010} alt="" />
      <img className={styles.image} src={mimi011} alt="" />
      <img className={styles.image} src={mimi012} alt="" />
      <div style={{ display: 'flex', width: '80%', marginTop: '80px' }}>
        <Link to="/stepthree" onClick={saveHighstudentFriend}>
          <img className={styles.image} src={select21one} alt="" />
        </Link>
        <Link to="/stepthreesecond" onClick={saveHighstudentNotFriend}>
          <img className={styles.image} src={select21two} alt="" />
        </Link>
      </div>
    </main>
  );
}

export default StepTwo;
