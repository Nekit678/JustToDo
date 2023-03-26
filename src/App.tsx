import { useEffect } from 'react';
import './App.css';
import { MainList } from './components/MainList';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Navbar } from './components/Navbar/Navbar';

function App() {

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (localStorage.getItem("shortInfo") == null) {
  //     localStorage.setItem("shortInfo", JSON.stringify({"lists":[], "lastId":0}))
  //   }
  //   const shortInfo = JSON.parse(localStorage.getItem("shortInfo") || '{"lists":[], "lastId":0}')
    
  //   dispatch(setInfo(shortInfo))
  // }, [])

  // if (localStorage.getItem("info") == null) {
  //   localStorage.setItem("info", JSON.stringify([]))
  // }


  return (
    <div className='bg-zinc-700 flex min-h-screen ' >

      <Navbar></Navbar>

      <div className='basis-full rounded-lg flex-grow ' style={{ backgroundSize: '100% 100%', backgroundImage: `url(https://ze-robot.com/images/source/39666.jpg)` }}>

        <MainList></MainList>

      </div>
    </div>
  );
}

export default App;
