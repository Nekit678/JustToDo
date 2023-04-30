import { TaskList } from './TaskList';
import { AddTaskInput } from './AddTaskInput';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState } from '../redux/store';
import { getClosedTasks, getListName, getOpenTasks } from './../redux/selectors/fullInfo-selectors';
import { addTask, deleteList, deleteTask, editTask, renameList, togglePrimary, toggleTask } from '../redux/reducers/fullInfo-reducer';
import { useCallback, useEffect, useState } from 'react';
import { NameList } from './NameList';

export const MainList = () => {
    const currentId = useSelector((state: RootState) => state.app.currentId)
    const { openTasks, openCount } = useSelector((state: RootState) => getOpenTasks(state, currentId))
    const { closedTasks, closedCount } = useSelector((state: RootState) => getClosedTasks(state, currentId))
    const listName = useSelector((state: RootState) => getListName(state, currentId))
    const dispatch = useDispatch()

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

    const rename = useCallback((name: string) => {
        dispatch(renameList({ id: currentId, name: name || "" }))
    }, [currentId, dispatch])

    const delList = useCallback((id: number) => {
        dispatch(deleteList(id))
    }, [currentId, dispatch])

    // !!!!!!!!!!!!!!!!!!!!!!
    const openToDoList = openTasks?.map((item) => ({
        ...item, toggle: switchTask, togglePrimary: switchPrimary,
        deleteTask: delTask, editTask: changeTask
    }))

    const closedToDoList = closedTasks?.map((item) => ({
        ...item, toggle: switchTask, togglePrimary: switchPrimary,
        deleteTask: delTask, editTask: changeTask
    }))
    // !!!!!!!!!!!!!!!!!!!!!!

    if (listName !== undefined) {
        return (
            <div className='flex flex-col gap-5 '>

                <NameList currentId={currentId} listName={listName} delList={delList} renameList={rename}></NameList>

                <AddTaskInput addTask={createTask}></AddTaskInput>

                <TaskList count={openCount || 0} tasks={openToDoList}></TaskList>

                <TaskList closed count={closedCount || 0} tasks={closedToDoList}></TaskList>
            </div>
        )
    }
    else {
        return (<div className='text-4xl text-center font-bold text-gray-200'>Выберите список задач на левой панели, или создайте новый</div>)
    }


}