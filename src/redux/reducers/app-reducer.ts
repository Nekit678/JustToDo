import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
    currentId:number
}

let initialState: initialStateType = {
    currentId:0
}

const appSlice = createSlice(
    {
        name: "app",
        initialState: initialState,
        reducers: {
            setId(state, action) {
                state.currentId = action.payload
            }
        }
    }
)


export const { setId } = appSlice.actions
export default appSlice.reducer