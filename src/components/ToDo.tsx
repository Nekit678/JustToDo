import { Checkbox } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { ToDoType } from '../types/types';

export const ToDo = (props: ToDoType) => {
    const [primary, setPrimary] = useState(props.primary)
    const [closed, setClosed] = useState(props.closed)

    return (
        <div className='bg-zinc-700 backdrop-blur-[1.5px] bg-opacity-90  w-full rounded-lg flex items-center justify-between gap-2 hover:bg-opacity-90 transition duration-150 hover:bg-zinc-500 hover:scale-[1.01]'>

            <div className='mt-2 mb-2 ml-4'>
                <Checkbox checked={closed} onClick={() => (setClosed(!closed))} className='rounded-full'></Checkbox>
                <text className={`${closed?"line-through text-gray-400":"text-gray-200"} ml-4`}>{props.text}</text>
            </div>
            <div onClick={() => (setPrimary(!primary))} className='mr-2 cursor-pointer'>
                {primary ? <StarFilled className='text-gray-400 hover:text-gray-700 text-lg' /> :
                    <StarOutlined className='text-gray-400 hover:text-gray-700 text-lg'></StarOutlined>}
            </div>

        </div>
    )

}