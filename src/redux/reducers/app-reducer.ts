import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
    currentId: number
}

interface setIdAction {
    payload: number
    type: string
}


let initialState: initialStateType = {
    currentId: 0
}

const appSlice = createSlice(
    {
        name: "app",
        initialState: initialState,
        reducers: {
            setId(state, action: setIdAction) {
                state.currentId = action.payload
            }
        }
    }
)


export const { setId } = appSlice.actions
export default appSlice.reducer