import { configureStore } from "@reduxjs/toolkit";
import shortInfoReducer from "./reducers/shortInfo-reducer";
import appReducer from "./reducers/app-reducer";
import fullInfoReducer from "./reducers/fullInfo-reducer";



let store = configureStore(
    {
        reducer: {
            shortInfo: shortInfoReducer,
            app:appReducer,
            fullInfo:fullInfoReducer
        }
    }
)

export type RootState = ReturnType<typeof store.getState>
export default store;