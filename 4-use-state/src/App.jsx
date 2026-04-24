import { useState } from 'react'
import './App.css'

function App() {

  // String tckn = "123132131231"
  //String firstName = "Enes"

  //useState : hooks

  // const [firstName, setFirstname] = useState("Enes");
  // const [lastName, setLastName] = useState("Bayram");
  // const [names, setNames] = useState(["Enes", "Adem", "Yakup", "Ali"])  //* array de olabilir string de 

  // console.log(names);

  // firstname i değiştirme 
  // const handleChange = () => {
  //   debugger;
  //   setFirstname("Ayşenur");
  // }


  // todo yeni örnek



  const [count, setCount] = useState(0);
  // 1000 satir kod

  const arttir = () => {
    setCount(count + 1)
  }

  const azalt = () => {
    if (count > 0) {
      setCount(count - 1);

    }
  }

  console.log("component render edildi");

  return (
    <div>

      <div> {count}</div>
      <br />

      <div><button onClick={arttir}>Arttir</button></div>
      <br />

      <div><button onClick={azalt}>Azalt</button></div>

    </div>
  )
}

export default App
