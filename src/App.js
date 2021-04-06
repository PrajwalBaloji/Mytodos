import "./App.css";
import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import firebase from 'firebase'
import {db} from './firebase_config'
import TodoListItem from './Todo'


function App() {
  const [todos,setTodos]=useState([])
  const [todoInput, settodoInput] = useState("");

  useEffect(() => {
  
   getTodos();
  }, [])

  const getTodos=()=>{
     db.collection('todos').onSnapshot(function(querySnapshot){
       setTodos(
        querySnapshot.docs.map((docs)=>({
          id:docs.id,
          todo:docs.data().todo,
          inprogress:docs.data().inprogress,
        }))
       )
       
     })
  }

  const addTodo =(e)=>{
    
    e.preventDefault()
     
    db.collection("todos").add({
      inprogress:true,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      todo:todoInput
    })

    settodoInput("");
    
  }


  return (
    <div className="App">
      <h1> My Todos App </h1>
      <form>
      <TextField
        id="standard-basic"
        label="Write a todo"
        className='TextField'
        style={{maxWidth:'300px',width:'90vw'}}
        value={todoInput}
        onChange={(e) => settodoInput(e.target.value) }
      />
      <Button type='submit' variant="contained" onClick={addTodo} style={{display:'none'}}>Add</Button>
      </form>
      {
        todos.map((todo,index)=>{
          return(
            <TodoListItem key={index} todo={todo.todo} inprogress={todo.inprogress} id={todo.id}/>
          )
        })
      }
    </div>
  );
}

export default App;
