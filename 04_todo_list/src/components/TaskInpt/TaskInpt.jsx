import { useState } from "react";
import InptLabel from "../InptLabel/InptLabel";
import styles from "./TaskInpt.module.css";

export default function TaskInpt() {
  const [task, setTask] = useState({title: "", date: "", priority: ""});

  function submit(e) {
    e.preventDefault();
    console.log("b4 addtask", task);
    window.dispatchEvent(new CustomEvent("addTask", task));
  }

  return <form className={styles.containerInptTask} onSubmit={submit}>
    <div className={styles.InptTasks}>
      <InptLabel
        label="Nome da Tarefa"
        type="text" 
        onChange={(value) => setTask(prev => ({...prev, title:value}))} />

      <InptLabel
        label="Data"
        type="date"
        onChange={(value) => setTask(prev => ({...prev, date:value}))} />

      <InptLabel
        label="Prioridade"
        type="select"
        opts={["Critico", "Alto", "Medio", "Baixo"]}
        onChange={(value) => setTask(prev => ({...prev, priority:value.toLowerCase()}))} />
    </div>

    <div className={styles.btnSubmit}>
      <button type="submit"> Criar Tarefa </button>
    </div>
  </form>
}