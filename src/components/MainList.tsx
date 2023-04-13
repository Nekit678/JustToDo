import { TaskList } from './TaskList';
import { AddTaskInput } from './AddTaskInput';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState } from '../redux/store';
import { getClosedTasks, getListName, getOpenTasks } from './../redux/selectors/fullInfo-selectors';
import { addTask, deleteList, deleteTask, editTask, renameList, togglePrimary, toggleTask } from '../redux/reducers/fullInfo-reducer';
import { useCallback, useEffect, useState } from 'react';
import { DeleteFilled } from '@ant-design/icons';

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

    const switchTask = useCallback((id: number) => {
        dispatch(toggleTask({ list_id: currentId, task_id: id }))
    }, [currentId, dispatch])

    const switchPrimary = useCallback((id: number) => {
        dispatch(togglePrimary({ list_id: currentId, task_id: id }))
    }, [currentId, dispatch])

    const delTask = useCallback((id: number) => {
        dispatch(deleteTask({ listId: currentId, taskId: id }))
    }, [currentId, dispatch])

    const changeTask = useCallback((id: number, text: string) => {
        dispatch(editTask({ listId: currentId, taskId: id, text: text }))
    }, [currentId, dispatch])

    const createTask = useCallback((text: string) => {
        dispatch(addTask({ id: currentId, task: { primary: false, text: text, closed: false } }))
    }, [currentId, dispatch])


    const rename = () => {
        dispatch(renameList({ id: currentId, name: textName || "" }))
    }

    const delList = (id: number) => {
        dispatch(deleteList(id))
    }

    if (listName !== undefined) {
        return (
            <div className='flex flex-col gap-5 '>

                <div className='mt-5 flex justify-center items-center text-red-400 hover:text-red-600'>
                    <input className={`bg-transparent text-gray-200 whitespace-nowrap h-full truncate font-medium text-3xl text-center rounded-lg focus:bg-gray-700 hover:bg-gray-700`} onBlur={() => (rename())} onChange={(e) => (setTextName(e.target.value))} value={textName || ""}></input>
                    <div onClick={() => delList(currentId)} className='bg-gray-700 ml-2 backdrop-blur-[1.5px] bg-opacity-90flex items-center rounded-lg cursor-pointer hover:bg-gray-800'>
                        <DeleteFilled className='text-2xl m-[1px] mb-[7px] ml-2 mr-2'></DeleteFilled>
                    </div>

                </div>

                <AddTaskInput addTask={createTask}></AddTaskInput>

                <TaskList count={openCount || 0} tasks={openTasks} toggle={switchTask} togglePrimary={switchPrimary} deleteTask={delTask} editTask={changeTask}></TaskList>

                <TaskList closed count={closedCount || 0} tasks={closedTasks} toggle={switchTask} togglePrimary={switchPrimary} deleteTask={delTask} editTask={changeTask}></TaskList>
            </div>
        )
    }
    else {
        return (<div className='text-4xl text-center font-bold text-gray-200'>Выберите список задач на левой панели, или создайте новый</div>)
    }


}