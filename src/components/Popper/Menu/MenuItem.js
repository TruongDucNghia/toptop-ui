import React from 'react'
import Button from '../../Button'
import classNames from 'classnames/bind';
import Styles from './Menu.module.scss';
const cx = classNames.bind(Styles);

const MenuItem = ({data, onClick}) => {
  const classes = cx('item-menu', {
    border_top: data.border_top
  })
  return (
    <Button className={classes} to={data.to} leftIcon={data.icon} onClick={onClick}>{data.title}</Button>
  )
}

export default MenuItem