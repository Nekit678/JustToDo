import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/app-reducer";
import fullInfoReducer from "./reducers/fullInfo-reducer";

import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, fullInfoReducer)

let store = configureStore(
    {
        reducer: {
            app: appReducer,
            fullInfo: persistedReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            })
    }
)

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export default store;