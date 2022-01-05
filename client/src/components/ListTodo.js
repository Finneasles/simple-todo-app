import React from 'react';
const ListTodo = ({ todos, deleteTodo }) => {
  return(
    <ul>
      {todos && todos.length > 0 ? (
        todos.map(todo=>{return(
          <li key={todo._id} >{todo.action} <a href="/#" onClick={()=>deleteTodo(todo._id)}> Remove</a></li>
        )})) : (<li>There isn't anything to do <br/>( ˘ ɜ˘) ♬ ♪ ♫</li>)
      }
    </ul>
  )
}
export default ListTodo