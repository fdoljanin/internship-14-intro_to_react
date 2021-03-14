import './App.css';
import { useState } from 'react';
import { getNewId } from './utils/helpers';
import Form from './components/Form';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <Form addTask={task => setTasks(prevState => [...prevState, { ...task, "id": getNewId(tasks) }])} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
