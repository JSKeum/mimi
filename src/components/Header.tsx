import React from 'react';
import styles from './Header.module.scss';

function Header() {
  const stroyTitle = '미미의 모험: 닌텐도 DS를 위하여';

  return (
    <header className={styles.header}>
      <h1>{stroyTitle}</h1>
    </header>
  );
}

export default Header;
