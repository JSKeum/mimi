/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import IllustrationImage from '../components/IllustrationImage';
import Description from '../components/Description';
import stepOne, { choices } from '../stories/StepOne';
import styles from './Step.module.scss';

function StepTwo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <Header />
      <CSSTransition
        classNames={styles.illustarionSection}
        timeout={{ enter: 1000, exit: 800 }}
      >
        <div className={styles.stepWrapper}>
          {stepOne.map((scene) => (
            <LazyLoad height={800}>

              <section className={styles.illustrationDescriptionWrapper} style={{ flexDirection: scene.orderReverse ? 'row-reverse' : 'row' }}>
                <IllustrationImage imageUrl={scene.illustrationImageUrl} />
                <Description description={scene.description} />
              </section>
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
        </div>
      </CSSTransition>
    </main>
  );
}

export default StepTwo;
