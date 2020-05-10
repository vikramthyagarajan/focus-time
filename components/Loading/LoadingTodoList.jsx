import cn from 'classnames/bind';
import { loader, loaderWrapper, loaderList, animatedBackground, masker, top, center, bottom } from './LoadingTodoList.module.scss';

let cx = cn.bind({masker, top, center, bottom})

function LoadingTodo(params) {
  return (
    <div className={animatedBackground}>
      <div className={cx(masker, top)}></div>
      <div className={cx(masker, center)}></div>
      <div className={cx(masker, bottom)}></div>
    </div>
  )
}

export default function LoadingTodoList(props) {
  return (
    <div className={loader}>
      <div className={loaderWrapper}>
        <div className={loaderList}>
          <LoadingTodo />
          <LoadingTodo />
          <LoadingTodo />
          <LoadingTodo />
        </div>
      </div>
    </div>
  )
}