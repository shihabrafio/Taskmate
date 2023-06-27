import './App.css';
import { Header } from './components/Header';
import { Addtask } from './components/Addtask';
import { Showtask } from './components/Showtask';
import { useState } from 'react';

function App() {
  const [tasklist,setTasklist] = useState([])

  return (
    <div className="App">
      <Header />
      <Addtask newbie={tasklist} old={setTasklist} />
      <Showtask newbie={tasklist} old={setTasklist}/>
    </div>
  );
}

export default App;
