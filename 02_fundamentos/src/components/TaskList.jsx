import React from 'react';
import styles from './TaskList.module.css';

export default function TaskList({tasks}) {
  return <div className={styles.tasks}>
    { tasks === undefined && <p>Lista não passada!</p> }
    { tasks?.length == 0 && <p>Lista vazia!</p> }
    
    { tasks?.length > 0 && <ol>
        {tasks.map(t => (
            <li key={t.id}>
                {t.text}
            </li>
        ))}
    </ol> }

  </div>
}