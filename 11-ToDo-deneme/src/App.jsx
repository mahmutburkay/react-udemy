import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([])  //* todo dizisi sıfırdan oluşturduk.

  //* todo oluşturma
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]) //* seprate opr. --todo ları aç üzerine newTodo yu ekle
  }

  console.log(todos)


  //* todo silme 
  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]); // id eşit değilse diziye ekle
  }


  //* todo güncelleme
  const updateTodo = (newTodo) => {

    const updatedTodos = todos.map((todo) => {

      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })

    setTodos([...updatedTodos]);
  }


  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo}></TodoCreate>     {/* yukarıdaki fonksiyonu propsla  geçir */}
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo}></TodoList>
      </div>
    </div>
  )
}

export default App
