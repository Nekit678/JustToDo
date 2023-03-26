import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/app-reducer";
import fullInfoReducer from "./reducers/fullInfo-reducer";



let store = configureStore(
    {
        reducer: {
            app: appReducer,
            fullInfo: fullInfoReducer
        }
    }
)

export type RootState = ReturnType<typeof store.getState>
export default store;