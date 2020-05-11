import cn from 'classnames/bind'
import { errorWrapper, errorImage, errorText, errorButton } from './Error.module.scss'
import { button } from '../../styles/common-components.module.scss'

const cx = cn.bind({button, errorButton})

export default function Error() {
  return (
    <div className={errorWrapper}>
      <div className={errorImage}>
        <img src="/cracked-ground.png" alt="broken"/>
      </div>
      <div className={errorText}>Looks like something broke!</div>
      <div className={cx(errorButton, button)}>Send Bug Report</div>
    </div>
  )
}