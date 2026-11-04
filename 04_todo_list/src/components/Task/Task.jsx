import styles from "./Task.module.css";

export default function Task({id, title, priority, date, rmTask}) {
  const liStyle = `${styles.task} ${styles[priority]}`;

  return <li className={liStyle}>
    <span> {title} </span>
    <span> {date} </span>
    <button onClick={(e) => window.dispatchEvent(new CustomEvent("rmTask", id))}>X</button>
  </li>
}