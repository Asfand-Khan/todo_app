import React from 'react';
import {ListItem,ListItemText,Button} from '@material-ui/core';
import db from './firebase';

function Todo(props) {
    return (
        <div>
            <ListItem>
            <ListItemText primary={props.todo.todo} secondary="Dummy Dead line" />
            <Button color='secondary' variant='contained' onClick={e => db.collection('todos').doc(props.todo.id).delete()}>Delete Me</Button>
            </ListItem>
        </div>
    )
}

export default Todo
