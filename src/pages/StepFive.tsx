import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

// import mimi013 from '../assets/mimi-013.png';
import mimi075 from '../assets/mimi-075.png';
import mimi081 from '../assets/mimi-081.png';
import mimi082 from '../assets/mimi-082.png';
import mimi083 from '../assets/mimi-083.png';
import mimi084 from '../assets/mimi-084.png';
import select85one from '../assets/select-85-1.png';
import select85two from '../assets/select-85-2.png';

function StepFive() {
  const isWithHighstudent = localStorage.getItem('ISHIGHSTUDENTFRIEND') === 'true';

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi075} alt="" />
      <img className={styles.image} src={mimi081} alt="" />
      <img className={styles.image} src={mimi082} alt="" />
      <img className={styles.image} src={mimi083} alt="" />
      <img className={styles.image} src={mimi084} alt="" />
      <div style={{ display: 'flex', width: '80%', marginTop: '80px' }}>
        <Link to={isWithHighstudent ? '/stepsix' : '/stepsixthird'}>
          <img className={styles.image} src={select85one} alt="" />
        </Link>
        <Link to="/stepsixsecond">
          <img className={styles.image} src={select85two} alt="" />
        </Link>
      </div>
    </main>
  );
}

export default StepFive;
