import './App.css';
import { Header } from './components/Header';
import { Addtask } from './components/Addtask';
import { Showtask } from './components/Showtask';
import { useEffect, useState } from 'react';

function App() {
  const [tasklist,setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || [])
  const [task,setTask] = useState({})

  useEffect(()=>{
      localStorage.setItem("tasklist",JSON.stringify(tasklist))
  },[tasklist])

  return (
    <div className="App">
      <Header />
      <Addtask tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask} />
      <Showtask tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask} />
    </div>
  );
}

export default App;
