import React, { useState } from 'react';
import styles from './Counter.module.css';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick(newValue) {
    setCounter(newValue);
  }

  return <div className={styles.clicker}>
      <p>Você clicou {counter} vezes!</p>
      <button className={`${styles.btn} ${styles.btnUp}`} onClick={ () => handleClick(counter + 1) }> + </button>
      <button className={`${styles.btn} ${styles.btnDwn}`} onClick={ () => handleClick(counter - 1) }> - </button>
  </div>
}