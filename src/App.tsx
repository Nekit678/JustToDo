import { useEffect } from 'react';
import './App.css';
import { MainList } from './components/MainList';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Navbar } from './components/Navbar/Navbar';
import { setInfo } from './redux/reducers/fullInfo-reducer';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("fullInfo") == null) {
      localStorage.setItem("fullInfo", JSON.stringify([{ id: 0, lastId: 0, name: "Задачи", tasks: [] }]))
    }

    const fullInfo = JSON.parse(localStorage.getItem("fullInfo") || '{"lists":[], "lastId":0}')

    dispatch(setInfo(fullInfo))
  }, [])

  if (localStorage.getItem("info") == null) {
    localStorage.setItem("info", JSON.stringify([]))
  }


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
