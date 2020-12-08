import React from 'react';
import styles from './Description.module.scss';

interface Props {
  description: string;
}

function Description(props: Props) {
  const { description } = props;

  return (
    <p className={styles.description}>{description}</p>
  );
}

export default Description;
