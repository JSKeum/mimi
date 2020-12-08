import React from 'react';
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
          <section className={styles.illustrationDescriptionWrapper} style={{ flexDirection: scene.orderReverse ? 'row-reverse' : 'row' }}>
            <IllustrationImage imageUrl={scene.illustrationImageUrl} />
            <Description description={scene.description} />
          </section>
        ))}
      </div>
    </main>
  );
}

export default StepOne;
