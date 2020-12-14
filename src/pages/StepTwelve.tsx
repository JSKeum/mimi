import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

import mimi075 from '../assets/mimi-075.png';
import mimi076 from '../assets/mimi-076.png';
import mimi077 from '../assets/mimi-077.png';
import mimi078 from '../assets/mimi-078.png';
import mimi079 from '../assets/mimi-079.png';
import mimi080 from '../assets/mimi-080.png';
import mimi081 from '../assets/mimi-081.png';
import mimi082 from '../assets/mimi-082.png';
import mimi083 from '../assets/mimi-083.png';
import mimi084 from '../assets/mimi-084.png';
import mimi085 from '../assets/mimi-085-select-11.png';

function StepTwelve() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi075} alt="" />
      <img className={styles.image} src={mimi076} alt="" />
      <img className={styles.image} src={mimi077} alt="" />
      <img className={styles.image} src={mimi078} alt="" />
      <img className={styles.image} src={mimi079} alt="" />
      <img className={styles.image} src={mimi080} alt="" />
      <img className={styles.image} src={mimi081} alt="" />
      <img className={styles.image} src={mimi082} alt="" />
      <img className={styles.image} src={mimi083} alt="" />
      <img className={styles.image} src={mimi084} alt="" />
      <Link to="/stepthirteen">
        <img className={styles.image} src={mimi085} alt="" />
      </Link>
    </main>
  );
}

export default StepTwelve;
