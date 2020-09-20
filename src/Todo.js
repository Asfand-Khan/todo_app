import React from 'react';
import {ListItem,ListItemText,Button} from '@material-ui/core';
import './Todo.css';
import db from './firebase';

function Todo(props) {
    return (
        <div className='todo'>
            <ListItem>
            <ListItemText primary={props.todo.todo} secondary="Made by Asfand Khan" className='todo__input' />
            <Button color='secondary' variant='contained' onClick={e => db.collection('todos').doc(props.todo.id).delete()}>Delete Me</Button>
            </ListItem>
        </div>
    )
}

export default Todo
