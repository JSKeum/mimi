import React from 'react';
import { CSSTransition } from 'react-transition-group';
import LazyLoad from 'react-lazyload';
import Header from '../components/Header';
import IllustrationImage from '../components/IllustrationImage';
import Description from '../components/Description';
import stepOne from '../stories/StepOne';
import styles from './Step.module.scss';

function StepOne() {
  return (
    <main>
      <Header />
      <div className={styles.stepWrapper}>
        {stepOne.map((scene) => (
          <LazyLoad height={800}>
            <CSSTransition
              classNames="illustarionSection"
              timeout={{ enter: 1000, exit: 800 }}
            >
              <section className={styles.illustrationDescriptionWrapper} style={{ flexDirection: scene.orderReverse ? 'row-reverse' : 'row' }}>
                <IllustrationImage imageUrl={scene.illustrationImageUrl} />
                <Description description={scene.description} />
              </section>
            </CSSTransition>
          </LazyLoad>
        ))}
      </div>
    </main>
  );
}

export default StepOne;
