import { useState } from 'react'
import './App.css'
import Product from './Product'

function App() {

  const productName = "buzdolabı";


  // return içinde div i tanımla 
  return (
    <>

      <div>
        <Product productName="Ayakkabı" price={3200} />
        <hr />
        <br />
        <Product productName="Pantolon" price={950} />
        <hr />
        <br />
        <Product productName={productName} price={15000} />

      </div>

    </>
  )
}

export default App
