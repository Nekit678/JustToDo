import { Checkbox } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { ToDoType } from '../types/types';

export const ToDo = (props: ToDoType) => {

    return (
        <div className='bg-zinc-700 backdrop-blur-[1.5px] bg-opacity-90  w-full rounded-lg flex items-center justify-between gap-2 hover:bg-opacity-90 transition duration-150 hover:bg-zinc-500 hover:scale-[1.01]'>

            <div className='mt-2 mb-2 ml-4 flex flex-row'>
                <div className='items-center'>
                    <Checkbox checked={props.closed} onClick={() => (props.toggle ? props.toggle(props.id) : undefined)} className='rounded-full'></Checkbox>
                </div>

                <div className='ml-4'>
                    <text className={`${props.closed ? "line-through text-gray-400" : "text-gray-200"}`}>{props.text}</text>
                </div>
            </div>

            <div onClick={() => (props.togglePrimary ? props.togglePrimary(props.id) : undefined)} className='mr-2 cursor-pointer self-start'>
                {props.primary ? <StarFilled className='text-gray-400 hover:text-gray-700 text-lg' /> :
                    <StarOutlined className='text-gray-400 hover:text-gray-700 text-lg'></StarOutlined>}
            </div>

        </div>
    )

}