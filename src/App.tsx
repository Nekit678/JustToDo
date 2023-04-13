import './App.css';
import { MainList } from './components/MainList';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className='bg-zinc-700 flex min-h-screen ' >

      <Navbar></Navbar>

      <div className='ml-2 basis-full rounded-lg flex-grow ' style={{ backgroundSize: '100% 100%', backgroundImage: `url(https://ze-robot.com/images/source/39666.jpg)` }}>

        <MainList></MainList>

      </div>

    </div>
  );
}

export default App;
