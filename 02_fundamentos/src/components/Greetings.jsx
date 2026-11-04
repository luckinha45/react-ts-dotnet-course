import React from 'react'
import styles from './Greetings.module.css'

export default function Greetings({name}) {
  return <span className={styles.greet}>
    Olá {name}!
  </span>
}