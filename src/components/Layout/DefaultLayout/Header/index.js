import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';

import styles from './header.module.scss';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AcountItemSearch from '../../../AcountItemSearch';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';

const cx = classNames.bind(styles);
const Header = () => {
    const [searchResult, setSearchResult] = useState([1, 2, 3]);
    const MENU_ITEM = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'FeedBack and Help',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo.default} alt="TopTop" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <div className={cx('title-result')}>Account</div>
                                <AcountItemSearch />
                                <AcountItemSearch />
                                <AcountItemSearch />
                                <AcountItemSearch />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search accounts and video" />
                        <button className={cx('btn-clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('btn-search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Log In</Button>
                    <Menu items={MENU_ITEM}>
                        <button className={cx('btn-menu')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
