import React from 'react'
import '../App.css'
import Todo from './Todo'

function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {
    return (
        <div className='todolist'>
            {
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
                ))
            }

        </div>
    )
}

export default TodoList