import { ToDo } from './ToDo';
import { useState } from 'react';
import { TaskListType } from './../types/types';

export const TaskList = (props: TaskListType) => {
    const [show, toggleShow] = useState(true)

    return (
        <div>
            <div className='mt-5 flex flex-col gap-3 items-center '>

                <div className='flex flex-col gap-2 w-4/5 '>
                    <button onClick={() => toggleShow(!show)} className=' bg-zinc-700 w-fit h-8 rounded-lg backdrop-blur-[1.5px] bg-opacity-90 transition duration-150 hover:bg-zinc-500 hover:scale-[1.04]'><text className='m-2 text-gray-200'>
                        {props.closed ? "Завершенные " : "Текущие "}{props.count}</text></button>
                    <div className={`${show ? "max-h-60" : ""} overflow-x-clip overflow-y-scroll scroll-smooth`}>
                        {show ? <div className='flex flex-col gap-2 mr-2 ml-2'>
                            {props.tasks?.map((item) => (<ToDo key={item.id} primary={item.primary} closed={item.closed} text={item.text} id={item.id} toggle={props.toggle} togglePrimary={props.togglePrimary} deleteTask={props.deleteTask}></ToDo>))}
                        </div> : <></>}
                    </div>
                </div>

            </div>
        </div>
    )
}