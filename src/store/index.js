import { configureStore } from "@reduxjs/toolkit";
import { selfApi } from './currency/selfApi'
import { cryptoNewsApi } from './currency/newsApi'
import userReducer from './slices/userSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [selfApi.reducerPath]: selfApi.reducer
    }
})