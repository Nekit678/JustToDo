import { Checkbox } from "antd"
import { useState } from 'react';

export const AddTaskInput = () => {
    const [edit, setEdit] = useState(false)
    const [text, setText] = useState("")

    return (
        <div className="flex justify-center">
            <div className=' w-4/5 bg-gray-700 mt-2 rounded-lg'>
                <div className="flex flex-row items-center gap-2 ml-4">
                    {edit ? <Checkbox checked={false}></Checkbox> : <></>}
                    <input onChange={(e)=>setText(e.target.value)} value={text} onBlur={() => setEdit(false)} onFocus={() => setEdit(true)} placeholder='Добавить задачу...' className="w-full outline-0 offset-outline bg-transparent h-10 rounded-lg text-gray-200"></input>
                    
                    {text!=""?<button onClick={()=>(alert(123))} className="bg-white w-6 rounded-lg ">+</button>:<></>}
                </div>
            </div>
        </div>

    )

}