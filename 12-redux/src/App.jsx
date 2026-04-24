import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice'
import UserList from './components/UserList'

function App() {

  const { value } = useSelector((store) => store.counter);  // value u store dan çek
  console.log(value);

  const dispatch = useDispatch();

  return (
    <>
      <div>{value}</div>
      <div>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
        <button onClick={() => dispatch(increment())}>Arttır</button>
      </div>
      <br />

      <UserList />
    </>
  )
}

export default App
