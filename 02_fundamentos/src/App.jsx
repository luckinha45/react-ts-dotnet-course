import { useState } from 'react';
import './App.css'
import { getRand } from './globals.js'
import Greetings from './components/Greetings.jsx'
import Counter from './components/Counter.jsx';
import TaskList from './components/TaskList.jsx';

function App() {
  const tasksDoDia = [
    {id:0, text: 'Arrumar a cama'},
    {id:1, text: 'Escovar os dentes'},
    {id:2, text: 'Levar o lixo para fora'},
  ]

  return <>
    <div>
      <Greetings name='Lucas' />
    </div>

    <Counter />
    
    <TaskList tasks={tasksDoDia} />
  </>
}

export default App;
