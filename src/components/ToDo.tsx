import { Checkbox } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

export const ToDo = () => {
    return (
        <div className='bg-zinc-700 backdrop-blur-[1.5px] hover:bg-zinc-500  bg-opacity-90  w-3/4 rounded-lg flex items-center justify-between gap-2'>

            <div className='mt-2 mb-2 ml-4'>
                <Checkbox className='rounded-full'></Checkbox>
                <text className='ml-4 text-gray-200'>TASK1TASK1 TASK1 TASK1  TASK1 TASK1 TASK1  TASK1</text>
            </div>
            <div className='mr-2'>
                <StarFilled className='text-gray-400 hover:text-gray-700 text-lg' />
                <StarOutlined className='text-gray-400 hover:text-gray-700 text-lg'></StarOutlined>
            </div>

        </div>
    )

}