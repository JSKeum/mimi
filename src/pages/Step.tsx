/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import IllustrationImage from '../components/IllustrationImage';
import Description from '../components/Description';
import stepOne, { choices } from '../stories/StepOne';
import styles from './Step.module.scss';

import mimi from '../assets/mimi2-1.png';

function Step() {
  return (
    <main>
      <Header />
      <div className={styles.stepWrapper}>
        {stepOne.map((scene) => (
          <LazyLoad height={800}>
            <CSSTransition
              classNames={styles.illustarionSection}
              timeout={{ enter: 1000, exit: 800 }}
            >
              <section className={styles.illustrationDescriptionWrapper} style={{ flexDirection: scene.orderReverse ? 'row-reverse' : 'row' }}>
                <IllustrationImage imageUrl={scene.illustrationImageUrl} />
                <Description description={scene.description} />
              </section>
            </CSSTransition>
            <img className={styles.image} src={mimi} alt="" />

          </LazyLoad>
        ))}
        <div className={styles.choiceWrapper}>
          {choices.map((choice) => (
            <Link to="/steptwo">
              <img className={styles.choice} src={require(`../assets/${choice.choiceImageUrl}`)} alt="" />
              <h1>{choice.description}</h1>
            </Link>
          ))}
        </div>
        {/* <img src="../assets/mimi2.pdf" alt="" width="800px" height="1800px" /> */}
        <div style={{ backgroundImage: 'url("../assets/mimi2-1.png")' }} />
        {/* <iframe src="../assets/mimi2.pdf" title="dd" width="800px" height="1800px" /> */}
      </div>
    </main>
  );
}

export default Step;
