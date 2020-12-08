/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import styles from './IllustrationImage.module.scss';

interface Props {
  imageUrl: string;
}

function IllustrationImage(props: Props) {
  const { imageUrl } = props;
  console.log(imageUrl);
  const url = require('../assets/step_one_scene_one.png');

  return (
    <>
      <div className={styles.illustrationImage} style={{ backgroundImage: url }} />
      <img src={url} alt="asdasd" />
    </>
  );
}

export default IllustrationImage;
