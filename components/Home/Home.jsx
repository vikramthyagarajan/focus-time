import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import TodoList from '../TodoList/TodoList';
import AddTodo from './AddTodo';
import { focusArea, header, list, focusFooter} from '../../styles/home.module.scss';
import getTodoState from '../TodoList/TodoState';
import { useState } from 'react';


export default function Home() {
  let todoState = getTodoState();
  let [isDrawerOpen, setDrawerOpen] = useState(false);
  let handleAction = (isSuccessful) => setDrawerOpen(false);

  return (
    <div className={focusArea}>
      <div className={header}>Your tasks for the day</div>
      <div className={list}>
        <TodoList {...todoState} />
      </div>
      <div className={focusFooter} id="focus-footer">
        <Fab color="primary" onClick={setDrawerOpen.bind(null, true)}>
          <AddIcon />
        </Fab>
        <AddTodo isOpen={isDrawerOpen} onAction={handleAction} />
        {/* <AddTodo {...todoState} /> */}
      </div>
    </div>
  )
}