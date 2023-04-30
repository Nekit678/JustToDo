import { DeleteFilled } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { NameListType } from '../types/types';
import React from 'react';


export const NameList = React.memo((props: NameListType) => {
    const [textName, setTextName] = useState(props.listName)

    useEffect(() => {
        setTextName(props.listName)
    }, [props.listName])

    return (
        <div className='mt-5 flex justify-center items-center text-red-400 hover:text-red-600'>
            <input className={`bg-transparent text-gray-200 whitespace-nowrap h-full truncate font-medium text-3xl text-center rounded-lg focus:bg-gray-700 hover:bg-gray-700`} onBlur={() => (props.renameList(textName))} onChange={(e) => (setTextName(e.target.value))} value={textName || ""}></input>
            <div onClick={() => props?.delList(props.currentId)} className='bg-gray-700 ml-2 backdrop-blur-[1.5px] bg-opacity-90flex items-center rounded-lg cursor-pointer hover:bg-gray-800'>
                <DeleteFilled className='text-2xl m-[1px] mb-[7px] ml-2 mr-2'></DeleteFilled>
            </div>
        </div>
    )
})