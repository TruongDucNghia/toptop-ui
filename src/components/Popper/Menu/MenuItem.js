import React from 'react'
import Button from '../../Button'
import classNames from 'classnames/bind';
import Styles from './Menu.module.scss';
const cx = classNames.bind(Styles);

const MenuItem = ({data, onClick}) => {
  return (
    <Button className={cx('item-menu')} to={data.to} leftIcon={data.icon} onClick={onClick}>{data.title}</Button>
  )
}

export default MenuItem