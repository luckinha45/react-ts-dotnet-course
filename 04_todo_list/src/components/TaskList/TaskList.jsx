import Task from "../Task/Task";
import styles from "./TaskList.module.css";

export default function TaskList({tasks}) {
  if (tasks.length > 0) {
    return <div>
      <ul className={styles.containerTasks}>
        {tasks.map(t => (
          <Task
            id={t.id}
            key={t.id}
            title={t.title}
            priority={t.priority}
            date={t.date}
            completed={t.completed}
          />
        ))}
      </ul>
    </div>
  }
  else {
    return <div className={styles.containerEmpty}>
      Lista vazia
    </div>
  }
}