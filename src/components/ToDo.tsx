import { Checkbox } from 'antd';
import { StarFilled, StarOutlined, DeleteFilled } from '@ant-design/icons';
import { ToDoType } from '../types/types';
import React, { useEffect, useState } from 'react';

export const ToDo = React.memo((props: ToDoType) => {

    const [text, setText] = useState(props.text)

    useEffect(() => {
        setText(text)
    }, [text])

    function handleChange(e: any) {
        setText(e.target.value)
    }

    return (
        <div className='bg-zinc-700 backdrop-blur-[1.5px] bg-opacity-90  w-full rounded-lg flex justify-between gap-2 hover:bg-opacity-90 transition duration-150 hover:bg-zinc-500 hover:scale-[1.01]'>

            <div className='mt-2 mb-2 ml-4 flex flex-row w-full'>
                <div>
                    <Checkbox checked={props.closed} onClick={() => (props.toggle ? props.toggle(props.id) : undefined)} className='rounded-full'></Checkbox>
                </div>

                <div className='ml-4 w-full'>
                    <textarea onBlur={() => (props.editTask ? props.editTask(props.id, text || "") : undefined)} onChange={handleChange} className={`flex outline-0 offset-outline resize-none h-fit w-full bg-transparent ${props.closed ? "line-through text-gray-400" : "text-gray-200"}`} value={text}></textarea>
                </div>
            </div>

            <div className='flex flex-row'>
                <div onClick={() => (props.togglePrimary ? props.togglePrimary(props.id) : undefined)} className='mr-2 cursor-pointer self-start'>
                    {props.primary ? <StarFilled className='text-gray-400 hover:text-gray-700 text-lg' /> :
                        <StarOutlined className='text-gray-400 hover:text-gray-700 text-lg'></StarOutlined>}
                </div>

                <div onClick={() => (props.deleteTask ? props.deleteTask(props.id) : undefined)} className='mr-2 cursor-pointer self-start'>
                    <DeleteFilled className='text-red-400 hover:text-red-600 text-lg' />
                </div>
            </div>
        </div>
    )

}) 