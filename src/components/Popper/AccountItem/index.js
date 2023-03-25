import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/be0edfd948ad524bc75b58b475d72db4~c5_300x300.webp?x-expires=1679828400&x-signature=%2FCd8XaKFBkrRR8SYbTkTSX4ZzuE%3D"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Nguyen Van A</span>
            </div>
        </div>
    );
}

export default AccountItem;
