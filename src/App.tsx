import React, { useState } from 'react';
import './App.css';
import { TaskList } from './components/TaskList';


function App() {
  const [current, toggleCurrent] = useState(true)
  const [complete, toggleComplete] = useState(true)

  const tasks = [{ primary: true, text: "TEST TEST", closed: true, id:0 },
  { primary: true, text: "TEST TEST", closed: true, id:1 },
  { primary: false, text: "TEST TEST", closed: true, id:2},
  { primary: true, text: "TEST TEST", closed: false, id:3},
  { primary: false, text: "TEST TEST", closed: false, id:4 },
  { primary: false, text: "TEST TEST", closed: false, id:5 }]

  return (
    <div className='bg-zinc-700 h-screen flex flex-row' >
      <div className='bg-zinc-700'>
        NAVBARNAVBARNAVBAR
      </div>
      <div className='basis-full flex flex-col gap-5 rounded-lg ' style={{ backgroundSize: '100% 100%', backgroundImage: `url(https://ze-robot.com/images/source/39666.jpg)` }}>
        <div className='mt-5 flex justify-center'>
          <text className='text-gray-200 font-medium text-3xl'>Задачи</text>
        </div>

        <TaskList count={123} tasks={tasks}></TaskList>

        <TaskList closed count={789} tasks={tasks}></TaskList>

      </div>
    </div>
  );
}

export default App;
