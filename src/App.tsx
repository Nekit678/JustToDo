import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDo } from './components/ToDo';


function App() {
  return (
    <div className='bg-gray-800 h-screen flex flex-row' >
      <div className='bg-zinc-700'>
          NAVBARNAVBARNAVBAR
      </div>
      <div className='basis-full flex flex-col gap-5 rounded-xl ' style={{backgroundSize:'auto 100%', backgroundImage:`url(https://ze-robot.com/images/source/39666.jpg)`}}>
        <div className='mt-5 flex justify-center'>
          <text className='text-gray-200 font-medium text-3xl'>Задачи</text>
        </div>
        <div className='flex flex-col gap-2 items-center'>
         <ToDo></ToDo>
         <ToDo></ToDo>
         <ToDo></ToDo>
         <ToDo></ToDo>
         <ToDo></ToDo>
         <ToDo></ToDo>
        </div>
      </div>
    </div>
  );
}

export default App;
