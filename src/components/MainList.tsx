import { TaskList } from './TaskList';
import { AddTaskInput } from './AddTaskInput';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState } from '../redux/store';
import { getClosedTasks, getOpenTasks } from './../redux/selectors/fullInfo-selectors';
import { addTask, toggleTask } from '../redux/reducers/fullInfo-reducer';


export const MainList = () => {

    const dispatch = useDispatch()
    const currentId = useSelector((state: RootState) => state.app.currentId)

    const { openTasks, openCount } = useSelector((state: RootState) => getOpenTasks(state, currentId))
    const { closedTasks, closedCount } = useSelector((state: RootState) => getClosedTasks(state, currentId))

    const switchTask = (id: number) => {
        dispatch(toggleTask({list_id:currentId, task_id:id}))
    }

    const createTask = (text: string) => {
        dispatch(addTask({ id: currentId, task: { primary: true, text: text, closed: false, id: 6 } }))
    }

    return (
        <div className='flex flex-col gap-5 '>

            <div className='mt-5 flex justify-center'>
                <text className='text-gray-200 font-medium text-3xl'>Задачи</text>
            </div>

            <AddTaskInput addTask={createTask}></AddTaskInput>
            
            <TaskList count={openCount || 0} tasks={openTasks}></TaskList>

            <TaskList closed count={closedCount || 0} tasks={closedTasks}></TaskList>
        </div>
    )
}