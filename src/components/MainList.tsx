import { TaskList } from './TaskList';
import { AddTaskInput } from './AddTaskInput';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState } from '../redux/store';
import { getClosedTasks, getListName, getOpenTasks } from './../redux/selectors/fullInfo-selectors';
import { addTask, togglePrimary, toggleTask } from '../redux/reducers/fullInfo-reducer';
import { useEffect, useState } from 'react';


export const MainList = () => {
    const [sync, setSync] = useState(false)

    const dispatch = useDispatch()
    const currentId = useSelector((state: RootState) => state.app.currentId)
    const { openTasks, openCount } = useSelector((state: RootState) => getOpenTasks(state, currentId))
    const { closedTasks, closedCount } = useSelector((state: RootState) => getClosedTasks(state, currentId))
    const listName = useSelector((state: RootState) => getListName(state, currentId))

    const full = useSelector((state: RootState) => (state.fullInfo.lists))

    useEffect(() => {
        if (sync) {
            localStorage.setItem("fullInfo", JSON.stringify(full))
            setSync(!sync)
        }

    }, [sync])

    const switchTask = (id: number) => {
        dispatch(toggleTask({ list_id: currentId, task_id: id }))
    }

    const switchPrimary = (id: number) => {
        dispatch(togglePrimary({ list_id: currentId, task_id: id }))
    }

    const createTask = (text: string) => {
        dispatch(addTask({ id: currentId, task: { primary: false, text: text, closed: false } }))
        setSync(!sync)
    }



    return (
        <div className='flex flex-col gap-5 '>

            <div className='mt-5 flex justify-center'>
                <text className='text-gray-200 font-medium text-3xl'>{listName}</text>
            </div>

            <AddTaskInput addTask={createTask}></AddTaskInput>

            <TaskList count={openCount || 0} tasks={openTasks} toggle={switchTask} togglePrimary={switchPrimary}></TaskList>

            <TaskList closed count={closedCount || 0} tasks={closedTasks} toggle={switchTask} togglePrimary={switchPrimary}></TaskList>
        </div>
    )
}