import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../Popper';
import Styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
const cx = classNames.bind(Styles);
const Menu = ({ children, items = [] }) => {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    return (
        <Tippy
            interactive
            delay={[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-item')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('pb-8')}>
                        {history.length > 1 && <Header title="Language" onBack={() =>{
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }}/>}
                        {current.data.map((item, index) => {
                            const isParent = !!item.children
                            return <MenuItem key={index} data={item} onClick={() =>{
                                if(isParent){
                                    setHistory((prev) => [...prev, item.children])
                                }
                            }}/>;
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
