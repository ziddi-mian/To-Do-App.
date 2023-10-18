import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from '../store/TodoSlice'

const reducer = {
    todo: TodoSlice.reducer
};

export const Store = configureStore({
    reducer,
})