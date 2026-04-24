import React from 'react'
import RouterConfig from './config/RouterConfig'
import Navbar from './components/Navbar'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div>
      <Navbar />
      <RouterConfig />
      <ToastContainer position='top-right' autoClose={2000} />
    </div>
  )
}

export default App