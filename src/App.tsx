import React, { useState } from 'react';
import './App.css';
import { TaskList } from './components/TaskList';
import { MainList } from './components/MainList';


function App() {
  const [current, toggleCurrent] = useState(true)
  const [complete, toggleComplete] = useState(true)



  return (
    <div className='bg-zinc-700 flex h-screen' >
      <div className='bg-zinc-700 flex-grow'>
        NAVBARNAVBARNAVBAR
        <button>Задачи</button>
      </div>
      <div className='basis-full rounded-lg flex-grow ' style={{ backgroundSize: '100% 100%', backgroundImage: `url(https://ze-robot.com/images/source/39666.jpg)` }}>

        <MainList></MainList>

      </div>
    </div>
  );
}

export default App;
