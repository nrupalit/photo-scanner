import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { fileSlicer } from "./fileReducer";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    file: fileSlicer.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})
export const persistor = persistStore(store)
