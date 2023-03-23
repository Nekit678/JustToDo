import { TaskList } from './TaskList';
import { AddTaskInput } from './AddTaskInput';
import { useState } from 'react';


export const MainList = () => {
    const completeTask = (id: number) => {
        console.log(id)
    }

    const t = [{ primary: true, text: "TEST TEST", closed: true, id: 0, complete:completeTask },
    { primary: true, text: "TEST TEST", closed: true, id: 1, complete:completeTask },
    { primary: false, text: "TEST TEST", closed: true, id: 2, complete:completeTask },
    { primary: true, text: "TEST TEST", closed: false, id: 3, complete:completeTask },
    { primary: false, text: "TEST TEST", closed: false, id: 4, complete:completeTask },
    { primary: false, text: "TEST TEST", closed: false, id: 5, complete:completeTask }]

    const [tasks, setTasks] = useState(t)
    const [closed, setClosed] = useState(t)

    const addTask = (text:string) => {
        setTasks([...tasks, {primary: true, text: text, closed: false, id: 6, complete:completeTask}])
    }

    return (
        <div className='flex flex-col gap-5 '>

            <div className='mt-5 flex justify-center'>
                <text className='text-gray-200 font-medium text-3xl'>Задачи</text>
            </div>

            <AddTaskInput addTask={addTask}></AddTaskInput>


            <TaskList count={123} tasks={tasks}></TaskList>

            <TaskList closed count={789} tasks={closed}></TaskList>
        </div>
    )
}