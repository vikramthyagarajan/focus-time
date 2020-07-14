import { useState } from 'react';
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import TodoList from '../TodoList/TodoList';
import AddTodo from './AddTodo';
import { focusArea, header, list, texture, focusFooter} from '../../styles/home.module.scss';
import { getTodosApi } from '../../lib/network/todo-list'


export default function Home() {
  let [isDrawerOpen, setDrawerOpen] = useState(false);
  let handleAction = (isSuccessful) => setDrawerOpen(false);
  let { loading, error } = getTodosApi();

  return (
    <div className={focusArea}>
      <div className={header}>Your tasks for the day</div>
      <div className={list}>
        <TodoList />
      </div>
      {!loading && !error?
        <div className={focusFooter} id="focus-footer">
          <Fab color="primary" onClick={setDrawerOpen.bind(null, true)}>
            <AddIcon />
          </Fab>
          <AddTodo isOpen={isDrawerOpen} onAction={handleAction} />
        </div>
        : null
      }
    </div>
  )
}