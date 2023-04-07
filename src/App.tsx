import { useEffect } from 'react';
import './App.css';
import { MainList } from './components/MainList';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Navbar } from './components/Navbar/Navbar';
import { setInfo } from './redux/reducers/fullInfo-reducer';
import { RootState } from './redux/store';

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    if (localStorage.getItem("fullInfo") == null) {
      localStorage.setItem("fullInfo", JSON.stringify([{ id: 0, lastId: 0, name: "Задачи", tasks: [] }]))
    }
    const fullInfo = JSON.parse(localStorage.getItem("fullInfo") || JSON.stringify([{ id: 0, lastId: 0, name: "Задачи", tasks: [] }]))
    dispatch(setInfo(fullInfo))
  }, [dispatch])

  const full = useSelector((state: RootState) => (state.fullInfo.lists))

  useEffect(() => {
    localStorage.setItem("fullInfo", JSON.stringify(full))
  }, [full])


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
