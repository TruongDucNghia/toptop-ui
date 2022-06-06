import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBitcoinSign,
    faCircleQuestion,
    faCircleXmark,
    faCloudArrowUp,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faPager,
    faSignOut,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import {faPaperPlane, faMessage, faUser} from '@fortawesome/free-regular-svg-icons'
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';

import styles from './header.module.scss';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AcountItemSearch from '../../../AcountItemSearch';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';

const cx = classNames.bind(styles);
const Header = () => {
    const current_user = true;
    const [searchResult, setSearchResult] = useState([1, 2, 3]);
    const MENU_ITEM = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    { code: 'en', title: 'English' },
                    { code: 'vi', title: 'VietNames' },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'FeedBack and Help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];

    const USER_ITEM = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoinSign} />,
            title: 'Get coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            border_top: true
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo.default} alt="TopTop" />
                </div>
                <HeadlessTippy
                    interactive
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
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {current_user ? (
                        <>
                            <Tippy content="Upload video" placement='bottom'>
                                <button>
                                    <FontAwesomeIcon icon={faCloudArrowUp}/>
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement='bottom'>
                                <button>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement='bottom'>
                                <button>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log In</Button>
                        </>
                    )}
                    <Menu items={current_user ? USER_ITEM : MENU_ITEM}>
                        {current_user ? (
                            <img className={cx('avatar-header')} src='https://res.cloudinary.com/dbpw1enlu/image/upload/v1654443076/121165674_361554678528058_7348982528906617908_n_imafs0.jpg' alt='Trương Đức Nghĩa'/>
                        ) : (
                            <button className={cx('btn-menu')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
