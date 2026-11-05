import styles from './NotFound.module.css';

export default function NotFound() {
  return <div className={styles.container}>
    <h1> 404 - Not Found </h1>
    <p><i>Are you lost...</i></p>
  </div>
}