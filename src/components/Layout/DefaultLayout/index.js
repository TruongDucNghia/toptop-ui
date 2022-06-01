import React from 'react'
import classNames from 'classnames/bind'
import Header from './Header'
import Sidebar from './Sidebar'
import Styles from './defaultLayout.module.scss'
const cx = classNames.bind(Styles)
const DefaultLayout = ({children}) => {
  return (
    <div className={cx('wrapper')}>
        <Header/>
        <div className={cx('main')}>
            <Sidebar/>
            <div className='content'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default DefaultLayout