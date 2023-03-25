import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import AccountItem from '~/components/Popper/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    const [sugResult, setSugResult] = useState('');

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Tài khoản</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <h4 className={cx('suglist-item')}>Xem tất cả kết quả dành cho "{sugResult}"</h4>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            value={sugResult}
                            onChange={(e) => setSugResult(e.target.value)}
                            placeholder="Tìm kiếm tài khoản và video"
                            spellCheck="false"
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button outlineblackcolor lefticon={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Button>
                    <Button primary>Login</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
