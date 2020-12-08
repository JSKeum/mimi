import React from 'react';
import Header from '../components/Header';
import IllustrationImage from '../components/IllustrationImage';
import stepOne from '../stories/StepOne';

function StepOne() {
  return (
    <main>
      <Header />
      {stepOne.map((scene) => (
        <section>
          <IllustrationImage imageUrl={scene.illustrationImageUrl} />
        </section>
      ))}
      <h1>Step One</h1>
    </main>
  );
}

export default StepOne;
