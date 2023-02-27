import { TaskList } from './TaskList';
import { AddTaskInput } from './AddTaskInput';


export const MainList = () => {
    const tasks = [{ primary: true, text: "TEST TEST", closed: true, id: 0 },
    { primary: true, text: "TEST TEST", closed: true, id: 1 },
    { primary: false, text: "TEST TEST", closed: true, id: 2 },
    { primary: true, text: "TEST TEST", closed: false, id: 3 },
    { primary: false, text: "TEST TEST", closed: false, id: 4 },
    { primary: false, text: "TEST TEST", closed: false, id: 5 }]

    return (
        <div className='flex flex-col gap-5 '>

            <div className='mt-5 flex justify-center'>
                <text className='text-gray-200 font-medium text-3xl'>Задачи</text>
            </div>

            <AddTaskInput></AddTaskInput>


            <TaskList count={123} tasks={tasks}></TaskList>

            <TaskList closed count={789} tasks={tasks}></TaskList>
        </div>
    )
}