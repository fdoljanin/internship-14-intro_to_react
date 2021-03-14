import { useState } from 'react';
import './App.css';
import Form from './Form.js';
import TaskList from './TaskList.js';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <Form addTask={task => setTasks(prevState => [...prevState, task])} />
      <TaskList tasks={tasks}/>
    </div>
  );

}

export default App;
