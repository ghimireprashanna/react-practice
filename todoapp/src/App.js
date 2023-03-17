import React, { useState } from "react";


const App = () => {
  const [userInputs, setUserInputs] = useState()
  const [todos, settodos] = useState([])

  const addData = () =>{
    settodos([...todos, userInputs])
  }
  return <div>
    <h1>Todo List</h1>
    <input onChange={(event)=> setUserInputs([event.target.value])} type="text"></input>
    <button onClick={() =>addData()}>Add</button>
    <ul>
      {
        todos.map((todo, index)=> <li key={index}> {todo} </li>)
      }
    </ul>
  </div>
}


export default App;