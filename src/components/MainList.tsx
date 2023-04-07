import { TaskList } from './TaskList';
import { AddTaskInput } from './AddTaskInput';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState } from '../redux/store';
import { getClosedTasks, getListName, getOpenTasks } from './../redux/selectors/fullInfo-selectors';
import { addTask, deleteTask, editTask, renameList, togglePrimary, toggleTask } from '../redux/reducers/fullInfo-reducer';
import { useEffect, useState } from 'react';


export const MainList = () => {
    const currentId = useSelector((state: RootState) => state.app.currentId)
    const { openTasks, openCount } = useSelector((state: RootState) => getOpenTasks(state, currentId))
    const { closedTasks, closedCount } = useSelector((state: RootState) => getClosedTasks(state, currentId))
    const listName = useSelector((state: RootState) => getListName(state, currentId))
    const dispatch = useDispatch()

    const [textName, setTextName] = useState(listName)

    useEffect(() => {
        setTextName(listName)
    }, [listName])

    const switchTask = (id: number) => {
        dispatch(toggleTask({ list_id: currentId, task_id: id }))
    }

    const switchPrimary = (id: number) => {
        dispatch(togglePrimary({ list_id: currentId, task_id: id }))
    }

    const createTask = (text: string) => {
        dispatch(addTask({ id: currentId, task: { primary: false, text: text, closed: false } }))
    }

    const rename = () => {
        dispatch(renameList({ id: currentId, name: textName || "" }))
    }

    const delTask = (id: number) => {
        dispatch(deleteTask({ listId: currentId, taskId: id }))
    }

    const changeTask = (id: number, text: string) => {
        dispatch(editTask({ listId: currentId, taskId: id, text: text }))
    }

    return (
        <div className='flex flex-col gap-5 '>

            <div className='mt-5 flex justify-center'>
                <input className={`bg-transparent text-gray-200 font-medium text-3xl text-center rounded-lg focus:bg-gray-700 hover:bg-gray-700`} onBlur={() => (rename())} onChange={(e) => (setTextName(e.target.value))} value={textName || ""}></input>
            </div>

            <AddTaskInput addTask={createTask}></AddTaskInput>

            <TaskList count={openCount || 0} tasks={openTasks} toggle={switchTask} togglePrimary={switchPrimary} deleteTask={delTask}></TaskList>

            <TaskList closed count={closedCount || 0} tasks={closedTasks} toggle={switchTask} togglePrimary={switchPrimary} deleteTask={delTask}></TaskList>
        </div>
    )
}