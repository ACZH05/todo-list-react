import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'


function ToDoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={ index }>{ todo }</li>
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
  return (
    <div className='m-3'>
      <input type="text" value={ newTodo } onChange={(event) => setNewTodo(event.target.value)} />
      <Button variant='primary' className='ms-3' onClick={ addTodos }>Add</Button>
      <ToDoList todos={ todos }/>
    </div>
  )
}

export default App
