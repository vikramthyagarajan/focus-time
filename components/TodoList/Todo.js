import { useCallback } from 'react'
import { todo, todoWrapper, name, checkmark, isChecked, deleteTodo } from './TodoList.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import cn from 'classnames/bind'
import { checkTodoApi, deleteTodoApi } from '../../lib/network/todo-list'

import SwipeTodo from '../SwipeableItem/SwipeTodo';
import { SwipeableItem, SwipeableBackground, SwipeableContent } from '../SwipeableItem/SwipeableItem'

let cx = cn.bind({todo, isChecked});

export default function Todo({key, action}) {
  let [ checkTodoHandler ] = checkTodoApi()
  let [ deleteTodoHandler ] = deleteTodoApi()

  const onCheckClick = useCallback(() => {
    checkTodoHandler({variables: {id: action.id, isChecked: !action.isChecked}})
  })

  const deleteTodoAction = useCallback(() => {
    console.log('deleting action on server', action);
    deleteTodoHandler({variables: {id: action.id}})
  })

  return (
    // <SwipeableItem onSwipe={deleteTodoAction}>
    //   <SwipeableContent>
    <div className={todoWrapper}>
      <SwipeTodo action={action} onCheck={onCheckClick} onDelete={deleteTodoAction}>
          <div className={cx({todo: true, isChecked: action.isChecked})}>
            <div className={name}>{action.name}</div>
            <div className="" onClick={onCheckClick}>
              { action.isChecked?
                  <FontAwesomeIcon icon={faCheckCircle} className={checkmark} />
                  : <FontAwesomeIcon icon={faCircle} className={checkmark} />
              }
            </div>
          </div>
      </SwipeTodo>
    </div>
    //   </SwipeableContent>
    //   <SwipeableBackground>
    //     <div className={deleteTodo}>
    //       Delete
    //     </div>
    //   </SwipeableBackground>
    // </SwipeableItem>
  )
}