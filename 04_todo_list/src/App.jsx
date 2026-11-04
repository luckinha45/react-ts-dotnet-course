import TaskInpt from "./components/TaskInpt/TaskInpt";
import TaskList from "./components/TaskList/TaskList";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import useTasks from "./hooks/useTasks";

function App() {      
  const tasks = useTasks();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de tarefas</h1>
      <TaskInpt  />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
