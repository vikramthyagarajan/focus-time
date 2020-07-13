import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import TodoList from '../TodoList/TodoList';
import AddTodo from './AddTodo';
import { focusArea, header, list, focusFooter} from '../../styles/home.module.scss';
import getTodoState from '../TodoList/TodoState';


export default function Home() {
  let todoState = getTodoState();

  return (
    <div className={focusArea}>
      <div className={header}>Your tasks for the day</div>
      <div className={list}>
        <TodoList {...todoState} />
      </div>
      <div className={focusFooter}>
        <Fab color="primary">
          <AddIcon />
        </Fab>
        <AddTodo />
        {/* <AddTodo {...todoState} /> */}
      </div>
    </div>
  )
}