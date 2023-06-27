import './App.css';
import { Header } from './components/Header';
import { Addtask } from './components/Addtask';
import { Showtask } from './components/Showtask';
import { useState } from 'react';

function App() {
  const [tasklist,setTasklist] = useState([])
  const [task,setTask] = useState({})

  return (
    <div className="App">
      <Header />
      <Addtask tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask} />
      <Showtask tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask} />
    </div>
  );
}

export default App;
