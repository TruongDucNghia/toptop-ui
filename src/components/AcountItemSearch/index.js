import React from 'react'
import Styles from './AcountItemSearch.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles)
const AcountItemSearch = () => {
  return (
    <div className={cx('wrapper')}>
        <img src='https://res.cloudinary.com/dbpw1enlu/image/upload/v1654181621/285145146_521656206306028_4842981421232227932_n_sefblu.jpg' alt='avatar'/>
        <div className={cx('content')}>
            <h3 className={cx('name')}>Truong Nghia <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}/></h3>
            <span className={cx('desc')}>Front-End Website</span>
        </div>
    </div>
  )
}

export default AcountItemSearch