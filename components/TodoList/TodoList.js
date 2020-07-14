import { useTransition, animated } from 'react-spring'
import Todo from './Todo'
import DoneTodo from './DoneTodo'
import { getTodosApi } from '../../lib/network/todo-list'
import { todolist } from './TodoList.module.scss'
import LoadingTodoList from '../Loading/LoadingTodoList'
import Error from '../Error/Error'

export default function TodoList (props) {
  let { loading, error, data} = getTodosApi()
  let todos = data? data.todos: []
  let sortBy = (key, isAsc = true, secondarySort = () => 0) => (a, b) => {
    let w = isAsc? 1: -1, l = isAsc? -1: 1
    return (a[key] > b[key]? w: (b[key] > a[key]? l: secondarySort(a, b))) 
  }

  todos = todos.sort(sortBy('isChecked', true, sortBy('date')))
  let leftTodos = todos.filter(t => !t.isChecked);
  let doneTodos = todos.filter(t => t.isChecked);


  let animatedTodos = useTransition(leftTodos, t => t.id, {
    from: {opacity: 0, transform: 'translate3d(0px, -10px, 0)', maxHeight: 1000},
    enter: {opacity: 1, transform: 'translate3d(0px, 0, 0)', maxHeight: 1000},
    leave: {opacity: 0.2, transform: 'translate3d(-50%, 0px, 0)', maxHeight: 0}
  })

  if (loading) return <LoadingTodoList />
  if (error) return <Error />

  return (
    <div className={todolist}>
      {animatedTodos.map(({item: action, props, key}) => {
        return <animated.div key={key} style={props}>
          <Todo key={key} action={action}></Todo>
        </animated.div>
      })}
      <div key="done">
        <DoneTodo actions={doneTodos}></DoneTodo>
      </div>
    </div>
  )
}