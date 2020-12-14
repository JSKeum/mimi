/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import styles from './IllustrationImage.module.scss';

interface Props {
  imageUrl: string;
}

function IllustrationImage(props: Props) {
  const { imageUrl } = props;
  let url = '';

  if (imageUrl !== '') {
    url = require(`../assets/${imageUrl}`);
  } else {
    url = '';
  }

  return (
    <img className={styles.IllustrationImage} src={url} alt="" />
  );
}

export default IllustrationImage;
