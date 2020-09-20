import React,{useEffect, useState} from 'react';
import {Button, TextField} from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, settodos] = useState(['take dogs out','work hard ']);
  const [input,setInput] = useState('');

  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      settodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
    })
  },[]);

  const addTodo = (e) =>{
    e.preventDefault();
    settodos(() =>{
      return  [...todos,input]
    });
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <h1>ToDo's</h1>
      <form>
      <TextField id="standard-basic" label="Write Your ToDo" value={input} onChange={e => setInput(e.target.value)} />
      <Button type='submit' variant="contained" color="primary" onClick={addTodo} disabled={!input}>
        Add ToDo
      </Button>
      </form>

      <ul>
        {
          todos.map(todo=>(
            <Todo todo={todo}/>
          ))
        }
        
      </ul>
    </div>
  );
}

export default App;
