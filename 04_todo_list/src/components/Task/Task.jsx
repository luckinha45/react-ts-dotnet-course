import styles from "./Task.module.css";

export default function Task({id, title, priority, date, completed}) {
  const liStyle = `${styles.task} ${styles[priority]} ${completed && styles["completed"]}`;

  function toggCompletar() {
    window.dispatchEvent(new CustomEvent("toggCompleted", {detail: {id, completed: !completed}, cancelable: true}));
  }

  return <li className={liStyle}>

    {completed && <button
      onClick={(e) => toggCompletar()}
      className={styles.btnCompleta}>
        Descompletar
      </button>}

    {!completed && <button
      onClick={(e) => toggCompletar()}
      className={styles.btnCompleta}>
        Completar
      </button>
    }

    <span> {title} </span>
    <span> {date} </span>
    
    <button
      onClick={(e) => window.dispatchEvent(new CustomEvent("rmTask", {detail: id, cancelable: true}))}
      className={styles.btnRm}
    >
      X
    </button>
  </li>
}