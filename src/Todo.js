import React from 'react';
import {ListItem,ListItemText,Button} from '@material-ui/core';

function Todo(props) {
    return (
        <div>
            <ListItem>
            <ListItemText primary={props.todo.todo} secondary="Dummy Dead line" />
            <Button color='secondary' variant='contained'>Delete Me</Button>
            </ListItem>
        </div>
    )
}

export default Todo
