import { createSlice } from "@reduxjs/toolkit";

interface taskType {
    primary?: boolean
    text?: string
    closed?: boolean
    id: number
}

interface listType {
    id: number
    name: string
    tasks: taskType[]
}

interface initialStateType {
    lists: listType[]
}

let initialState: initialStateType = {
    lists: [{
        id: 0, name: "ТЕСТ1", tasks: [{ primary: true, text: "TEST TEST", closed: true, id: 0 },
        { primary: true, text: "TEST TEST", closed: true, id: 1 },
        { primary: false, text: "TEST TEST", closed: true, id: 2 },
        { primary: true, text: "TEST TEST", closed: false, id: 3 },
        { primary: false, text: "TEST TEST", closed: false, id: 4 },
        { primary: false, text: "TEST TEST", closed: false, id: 5 }]
    }, {
        id: 1, name: "ТЕСТ2", tasks: [{ primary: true, text: "sdfsdfsdf", closed: true, id: 0 },
        { primary: true, text: "sdfsdf", closed: true, id: 1 },
        { primary: false, text: "sdfsdfsdf", closed: true, id: 2 },
        { primary: true, text: "sdfsfsdf", closed: false, id: 3 },
        { primary: false, text: "sdfsdfs", closed: false, id: 4 },
        { primary: false, text: "sdfsdfsdf", closed: false, id: 5 }]
    }]
}

const fullInfoSlice = createSlice(
    {
        name: "fullInfo",
        initialState: initialState,
        reducers: {
            setInfo(state, action) {
            }
        }
    }
)


export const { setInfo } = fullInfoSlice.actions
export default fullInfoSlice.reducer