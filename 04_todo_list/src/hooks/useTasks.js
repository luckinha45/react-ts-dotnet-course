import { useEffect } from "react";
import { useState } from "react";


export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  // add task
  useEffect(() => {
    function addTask(task) {
      console.log("addtask", task);
      setTasks(prev => [...prev, {...task, id: crypto.randomUUID()}]);
    }

    window.addEventListener('addTask', (e) => addTask(e.target));
    return () => window.removeEventListener('addTask', addTask);
  }, []);

  // remove task
  useEffect(() => {
    function rmTask(taskId) {
      setTasks(prev => prev.filter(p => p.id !== taskId));
    }

    window.addEventListener('rmTask', (e) => rmTask(e.target));
    return () => window.removeEventListener('rmTask', rmTask);
  }, []);

  // check tasks
  useEffect(() => {
    console.log("check tasks", tasks);
  }, [tasks])

  return tasks;
}