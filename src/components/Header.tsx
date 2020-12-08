import React from 'react';
import styles from './Header.module.scss';

function Header() {
  const stroyTitle = '미미의 닌텐도 모험';

  return (
    <header className={styles.header}>
      <h1>{stroyTitle}</h1>
    </header>
  );
}

export default Header;
