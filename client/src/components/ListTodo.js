import React from 'react';
import Button from '@mui/material/Button';

const ListTodo = ({ todos, deleteTodo }) => {
  return(
    <ul>
      {todos && todos.length > 0 ? (
        todos.map(todo=>{return(
      <li key={todo._id} >{todo.action} 
      <Button onClick={()=>deleteTodo(todo._id)} color="primary" variant="contained">
        Remove
      </Button>
      </li>
      )})) : (<li>There isn't anything to do <br/>( ˘ ɜ˘) ♬ ♪ ♫</li>)
      }
    </ul>
  )
}
export default ListTodo