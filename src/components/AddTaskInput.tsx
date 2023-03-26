import { Checkbox } from "antd"
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

export const AddTaskInput = (props: any) => {
    const [edit, setEdit] = useState(false)
    const [text, setText] = useState("")

    const addTask = () => {
        props.addTask(text)
        setText("")
    }

    return (
        <div className="flex justify-center">
            <div className=' w-4/5 bg-gray-700 mt-2 rounded-lg'>
                <div className="flex flex-row items-center gap-2 ml-4">
                    {edit ? <Checkbox checked={false}></Checkbox> : <PlusOutlined className="text-gray-400" />}
                    <input onKeyDown={(e) => (e.code=="Enter"?addTask():undefined)} onChange={(e) => setText(e.target.value)} value={text} onBlur={() => setEdit(false)} onFocus={() => setEdit(true)} placeholder='Добавить задачу...' className="w-full outline-0 offset-outline bg-transparent h-10 rounded-lg text-gray-200"></input>

                    {text != "" ? <PlusOutlined onClick={() => addTask()} className="text-gray-200 flex mr-4 text-xl animate-bounce" /> : <></>}
                </div>
            </div>
        </div>

    )

}