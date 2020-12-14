import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Step.module.scss';

// import mimi069 from '../assets/mimi-069.png';
import mimi070 from '../assets/mimi-070.png';
import mimi071 from '../assets/mimi-071.png';
import mimi072 from '../assets/mimi-072.png';
import mimi073 from '../assets/mimi-073.png';
import mimi074 from '../assets/mimi-074-select-10.png';

function StepEleven() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <img className={styles.image} src={mimi070} alt="" />
      <img className={styles.image} src={mimi071} alt="" />
      <img className={styles.image} src={mimi072} alt="" />
      <img className={styles.image} src={mimi073} alt="" />
      <Link to="/steptwelve">
        <img className={styles.image} src={mimi074} alt="" />
      </Link>
    </main>
  );
}

export default StepEleven;
