import React, { useState } from "react";
import Counter from './components/Counter'
import Reset from "./components/Reset";
import NameInput from "./components/NameInput";
import KeyDown from "./components/KeyDown";
import './App.css'

function App() {

  const [count , setCount] = useState(0)

  return (
    <>
      <Counter
        count={count}
        setCount={setCount}
      />
      <Counter
        count={count}
        setCount={setCount}
      />
      <Reset
        setCount={setCount}
      />
      <br />
      <br />
      <br />
      <br />
      <NameInput/>
      <br />
      <br />
      <br />
      <br />
      <KeyDown/>

    </>
  )
}

export default App
