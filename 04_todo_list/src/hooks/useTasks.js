import { useEffect } from "react";
import { useState } from "react";


export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  // add task
  useEffect(() => {
    function addTask(e) {
      console.log(tasks);
      setTasks(prev => [...prev, {...e.detail, id: crypto.randomUUID()}]);
    }

    window.addEventListener('addTask', addTask);
    return () => window.removeEventListener('addTask', addTask);
  }, []);

  // remove task
  useEffect(() => {
    function rmTask(e) {
      setTasks(prev => prev.filter(p => p.id !== e.detail));
    }

    window.addEventListener('rmTask', rmTask);
    return () => window.removeEventListener('rmTask', rmTask);
  }, []);

  // toggle completed task
  useEffect(() => {
    function toggCompleted(e) {
      const { id, completed } = e.detail;
      setTasks(prev =>
        prev.map(p => (p.id === id ? { ...p, completed } : p))
      );
    }

    window.addEventListener('toggCompleted', toggCompleted);
    return () => window.removeEventListener('toggCompleted', toggCompleted);
  }, [])


  return tasks;
}