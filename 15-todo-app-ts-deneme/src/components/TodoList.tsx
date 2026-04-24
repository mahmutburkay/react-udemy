import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import type { TodoType } from '../types/types'

function TodoList() {
    const { todos } = useSelector((state: RootState) => state.todo) // todoları store'dan çektik 

    return (
        <div>

            {
                todos && todos.map((todo: TodoType) => (
                    <Todo key={todo.id} todoProps={todo} /> //* todo yu Todo sınıfına props geçtik
                ))
            }

        </div>
    )
}

export default TodoList