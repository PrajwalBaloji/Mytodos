import "./App.css";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { Button } from "@material-ui/core";

function App() {
  const [todoInput, settodoInput] = useState("");

  const addTodo =(e)=>{
    
    e.preventDefault()
     
    
  }
  return (
    <div className="App">
      <h1> My Todos App </h1>
      <form>
      <TextField
        id="standard-basic"
        label="Write a todo"
        className='TextField'
        onChange={(e) => settodoInput(e.target.value) }
      />
      <Button type='submit' variant="contained" onClick={addTodo}>Add</Button>
      </form>
    </div>
  );
}

export default App;
