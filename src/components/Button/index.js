import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    buttongetapp,
    primary = false,
    outline = false,
    outlineblackcolor = false,
    text = false,
    textmenu = false,
    small,
    large,
    children,
    onClick,
    lefticon,
    righticon,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        buttongetapp,
        primary,
        outline,
        outlineblackcolor,
        text,
        textmenu,
        small,
        large,
    });
    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className={cx('iconleft')}>{lefticon}</span>}
            <span>{children}</span>
            {righticon && <span className={cx('iconright')}>{righticon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    buttongetapp: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    outlineblackcolor: PropTypes.bool,
    text: PropTypes.bool,
    textmenu: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    lefticon: PropTypes.node,
    righticon: PropTypes.node,
};
export default Button;
