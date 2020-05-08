import {todo, name} from './TodoList.module.scss';

export default function Todo({action}) {
  return (
    <div className={todo}>
      <div className={name}>{action.name}</div>
    </div>
  )
}