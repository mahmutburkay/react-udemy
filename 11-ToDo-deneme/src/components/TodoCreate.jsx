import React, { useState } from 'react'
import '../App.css'

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setnewTodo] = useState(''); // new todo yu oluştur
    const clearInput = () => {
        setnewTodo('');
    }




    const createTodo = () => {

        if (!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 9999999999),
            content: newTodo
        }
        onCreateTodo(request)  // child tan parent a props geçtik 
        clearInput();
    }




    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e) => setnewTodo(e.target.value)}  /*{içine girilen değeri yakala}*/
                className='todo-input' type='text' placeholder='Todo giriniz' ></input>
            <button onClick={createTodo} className='todo-button '>Todo Oluştur</button>
        </div>
    )
}

export default TodoCreate

