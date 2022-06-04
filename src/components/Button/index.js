import React from 'react';
import Styles from './button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(Styles);
const Button = ({
    primary,
    className,
    text,
    disabled,
    small,
    large,
    outline = false,
    children,
    leftIcon,
    rightIcon,
    to,
    href,
    onClick,
    ...passProps
}) => {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        delete props.onClick;
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classed = cx('wrapper', {
        primary,
        outline,
        text,
        small,
        large,
        disabled,
        [className]: className,
        leftIcon,
        rightIcon,
    });
    return (
        <Comp className={classed} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}> {children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
};

export default Button;
