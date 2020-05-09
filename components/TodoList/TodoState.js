import { useState } from "react"
import { format } from 'date-fns'


const todoActions = [{id: 1, name: 'Get up', isChecked: true}, {id:2, name: 'Bathe', isChecked: true}, {id:3, name: 'Party', isChecked: false}]
export default function getTodoState() {
  let [todos, setTodos] = useState(todoActions);

  function generateId(todo) {
    let date = new Date(todo.date || null)
    return format(date, 'yyyy-MM-dd:HH-mm-ss');
  }

  function addTodo(name, date) {
    let newTodo = {name, date, isChecked: false}
    let id = generateId(newTodo)
    newTodo.id = id
    setTodos([...todos, newTodo])
    return todos
  }

  function deleteTodo(id) {
    setTodos(todos.filter((it) => it.id !== id))
    return todos
  }

  return {
    todos, addTodo, deleteTodo
  }
}