import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { TodoInitialState, TodoType } from '../types/types'




const initialState: TodoInitialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,

    reducers: {

        //* todo oluşturma 
        createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, action.payload]; // önceki todo ların üzerinde payload tan gelen (todotype tipinde) id content içerikli todoyu ekle.
        },

        //* todo silme
        removeTodoById: (state: TodoInitialState, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo: TodoType) => todo.id !== action.payload)];
        }, // gelen todo nun id si eşit değilse diziye ekle


        //* todo güncelleme
        updateTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos.map((todo: TodoType) => todo.id !== action.payload.id ? todo
                : action.payload)];
        }


    }
})



export const { createTodo, removeTodoById, updateTodo } = todoSlice.actions

export default todoSlice.reducer
