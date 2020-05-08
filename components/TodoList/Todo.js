import {todo, name, checkmark, isChecked} from './TodoList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import cn from 'classnames/bind';

let cx = cn.bind({todo, isChecked});

export default function Todo({action}) {
  return (
    <div className={cx({todo: true, isChecked: action.isChecked})}>
      <div className={name}>{action.name}</div>
      { action.isChecked?
          <FontAwesomeIcon icon={faCheckCircle} className={checkmark} />
          : <FontAwesomeIcon icon={faCircle} className={checkmark} />
      }
    </div>
  )
}