import React from 'react';
import Header from '../components/Header';
import IllustrationImage from '../components/IllustrationImage';
import stepOne from '../stories/StepOne';
import styles from './Step.module.scss';

function StepOne() {
  return (
    <main>
      <Header />
      <div className={styles.stepWrapper}>
        {stepOne.map((scene) => (
          <section className={styles.illustrationDescriptionWrapper}>
            <IllustrationImage imageUrl={scene.illustrationImageUrl} />
          </section>
        ))}
      </div>
      <h1>Step One</h1>
    </main>
  );
}

export default StepOne;
