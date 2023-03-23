import { createSlice } from "@reduxjs/toolkit";

interface listType {
    id:number
    name: string
    count: number
}

interface initialStateType {
    lists: listType[],
    lastId: number
}

let initialState: initialStateType = {
    lists: [],
    lastId:0
}

const shortInfoSlice = createSlice(
    {
        name: "shortInfo",
        initialState: initialState,
        reducers: {
            setInfo(state, action) {
                state.lists = action.payload.lists
                state.lastId = action.payload.lastId
            }
        }
    }
)


export const { setInfo } = shortInfoSlice.actions
export default shortInfoSlice.reducer