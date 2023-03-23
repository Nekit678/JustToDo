import { TaskList } from './TaskList';
import { AddTaskInput } from './AddTaskInput';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState } from '../redux/store';
import { getClosedTasks, getOpenTasks } from './../redux/selectors/fullInfo-selectors';


export const MainList = () => {

    const dispatch = useDispatch()
    const currentId = useSelector((state: RootState) => state.app.currentId)
    
    const openTasks = useSelector((state:RootState) => getOpenTasks(state,currentId))
    const closedTasks = useSelector((state:RootState) => getClosedTasks(state,currentId))

    const completeTask = (id: number) => {
        console.log(id)
    }

    const addTask = (text: string) => {
        //setTasks([...tasks, { primary: true, text: text, closed: false, id: 6, complete: completeTask }])
    }

    return (
        <div className='flex flex-col gap-5 '>

            <div className='mt-5 flex justify-center'>
                <text className='text-gray-200 font-medium text-3xl'>Задачи</text>
            </div>

            <AddTaskInput addTask={addTask}></AddTaskInput>


            <TaskList count={123} tasks={openTasks}></TaskList>

            <TaskList closed count={789} tasks={closedTasks}></TaskList>
        </div>
    )
}