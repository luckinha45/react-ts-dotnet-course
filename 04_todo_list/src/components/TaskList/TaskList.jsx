import Task from "../Task/Task";
import styles from "./TaskList.module.css";

export default function TaskList({tasks}) {
  return <div>
    <ul className={styles.containerTasks}>
      {tasks.map(t => (
        <Task
          id={t.id}
          key={t.id}
          title={t.title}
          priority={t.priority}
          date={t.date}
        />
      ))}
    </ul>
  </div>
}