import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let a = 15;
  const firstName = "Ali";

  let vizel = 60;
  let vize2 = 80;

  let sonuc = false;


  let isimler = [
    "Enes",
    "Ayşenur",
    "Kübra",
    "Adem"
  ]

  return (
    <div>
      {/* <p>Ortalama : {(vizel + vize2) / 2}</p> */}

      {/* {sonuc ? <p>Ehliyeti alabilirsin</p> : <p>Ehliyet alamazsin , kaybol</
      p>} */}

      {/* {
        (vizel + vize2) / 2 >= 50 ? <p>Dersten gectin aferin</p> : <p>kaldin geçmis olsun</p>
      } */}

      {
        isimler.map((isim, index) => (
          <div style={{
            backgroundColor: 'orange',
            border: 'ipx solid black'
          }}
            key={index}>{isim}</div>
        ))

      }


    </div>
  )

}

export default App