import './App.css'
import Mahmut from './Login' // login componentini Mahmut adıyla import ettim (export default)
import { users } from './Login' // usersları import ettim. (export)--->(süslü parantez içinde aynı adla çağırılmak zorunda )
import Hello from './Hello'

function App() {

  console.log(users);

  return (

    <div>
      {<Mahmut />}
      <br />

      {/* {<Hello />} */}

    </div>

  )
}

export default App
