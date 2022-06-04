import React from 'react'
import Styles from './Popper.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(Styles)
const Wrapper = ({children, className}) => {
  return (
    <div className={cx('wrapper', className)}>{children}</div>
  )
}

export default Wrapper