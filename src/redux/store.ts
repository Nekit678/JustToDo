import { configureStore } from "@reduxjs/toolkit";
import shortInfoReducer from "./reducers/shortInfo-reducer";
import appReducer from "./reducers/app-reducer";



let store = configureStore(
    {
        reducer: {
            shortInfo: shortInfoReducer,
            app:appReducer
        }
    }
)

export type RootState = ReturnType<typeof store.getState>
export default store;