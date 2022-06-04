import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../Popper';
import Styles from './Menu.module.scss';
import MenuItem from './MenuItem';
const cx = classNames.bind(Styles);
const Menu = ({ children, items = [] }) => {
    return (
        <Tippy
            interactive
            delay = {[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-item')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('pb-8')}>
                        {items.map((item, index) => {
                            return <MenuItem key={index} data={item} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
