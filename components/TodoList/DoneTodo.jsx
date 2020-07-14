import {todo, name, doneTodo, isChecked } from './TodoList.module.scss'
import cn from 'classnames/bind'

let cx = cn.bind({todo, doneTodo, isChecked});

export default function Todo({actions}) {

  return (
    // <SwipeableItem onSwipe={deleteTodoAction}>
    //   <SwipeableContent>
        <div className={cn(todo, doneTodo, isChecked)}>
          {actions.slice(actions.length - 3).map(action =>
            <div className={name}>{action.name}</div>
          )}
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