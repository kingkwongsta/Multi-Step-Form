import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FormNav from './components/FormNav'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <container className="form"> <div className="left-side">
        <FormNav />
      </div>
        <div className="right-side">
          <Form />
        </div></container>

    </div>
  )
}

export default App
