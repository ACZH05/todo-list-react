import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'


function ToDoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={ index }>{ todo } <Button variant='danger' className='ms-4' size='sm' onClick={event => deleteTodo(event, index)}>Delete</Button></li>
        
      ))}
    </ul>
  )
}

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")
  function addTodos() {
    setTodos([...todos, newTodo])
    setNewTodo("")
  }

  function deleteTodo(event, index) {
    setTodos(todos.filter((check) => check !== todos[index]))
  }
  
  return (
    <div className='m-3'>
      <input type="text" value={ newTodo } onChange={(event) => setNewTodo(event.target.value)} />
      <Button variant='primary' className='ms-3' onClick={ addTodos }>Add</Button>
      <ToDoList todos={ todos } deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
