import {todo, name, checkmark} from './TodoList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

export default function Todo({action}) {
  return (
    <div className={todo}>
      <div className={name}>{action.name}</div>
      <FontAwesomeIcon icon={faCircle} className={checkmark} />
    </div>
  )
}