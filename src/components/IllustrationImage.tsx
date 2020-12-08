/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import styles from './IllustrationImage.module.scss';

interface Props {
  imageUrl: string;
}

function IllustrationImage(props: Props) {
  const { imageUrl } = props;
  const url = require(`../assets/${imageUrl}`);

  return (
    <img className={styles.IllustrationImage} src={url} alt="" />
  );
}

export default IllustrationImage;
