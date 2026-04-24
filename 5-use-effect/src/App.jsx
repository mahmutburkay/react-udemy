import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [firtName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  // içine callback fonk ver
  useEffect(() => {

    console.log("Her zaman çalışır");
  }); // her aksiyonda çalışır


  useEffect(() => {

    console.log("İlk render edildiğinde çalışır.");
  }, []); // yalnız bir kere çalışır ilk çalışırken  


  useEffect(() => {

    console.log("İlk render edildiğinde ve FirstName state değeri değiştiğinde çalışır.");
  }, [firtName]); // first name de bir değişiklik olursa çalış


  useEffect(() => {

    console.log("İlk render edildiğinde ve FirstName ve lastName state değeri değiştiğinde çalışır.");
  }, [firtName, lastName]); // first name de bir değişiklik olursa çalış

  // useEffect(() => {

  //   console.log("İlk render edildiğinde ve lastName state değeri değiştiğinde çalışır.");
  // }, [lastName]);




  return (
    <>
      <div>
        <div><button onClick={() => setFirstName("Enes")}>Adı Değiştir</button></div>

        <br />
        <hr />
        <br />

        <div><button onClick={() => setLastName("Bayram")}>Soyismi Değiştir</button></div>

      </div>


    </>
  )
}

export default App
