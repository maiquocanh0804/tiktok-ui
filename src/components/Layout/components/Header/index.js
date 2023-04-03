import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faPlus,
    faCircleDollarToSlot,
    faChartLine,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import routesConfig from '~/config/routes';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import { faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';
import { MessageIcon, UploadIcon } from '~/components/icons';
import Search from './Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { code: 'en', title: 'English' },
                {
                    code: '',
                    title: 'Tieng Viet',
                },
                {
                    code: '',
                    title: 'العربية',
                },
                {
                    code: 'vn',
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    code: 'Pilipinas',
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    code: 'Česká republika',
                    title: 'Čeština (Česká republika)',
                },
                {
                    code: '',
                    title: 'Deutsch',
                },
                {
                    code: 'Ελλάδα',
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    code: '',
                    title: 'Español',
                },
                {
                    code: '',
                    title: 'Tieng Viet',
                },
                {
                    code: '',
                    title: 'العربية',
                },
                {
                    code: 'vn',
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    code: 'Pilipinas',
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    code: 'Česká republika',
                    title: 'Čeština (Česká republika)',
                },
                {
                    code: '',
                    title: 'Deutsch',
                },
                {
                    code: 'Ελλάδα',
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    code: '',
                    title: 'Español',
                },
                {
                    code: 'Česká republika',
                    title: 'Čeština (Česká republika)',
                },
                {
                    code: '',
                    title: 'Deutsch',
                },
                {
                    code: 'Ελλάδα',
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    code: '',
                    title: 'Español',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const currentUser = true;

function Header() {
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@Name',
        },
        {
            icon: <FontAwesomeIcon icon={faCircleDollarToSlot} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faChartLine} />,
            title: 'View Analytics',
            to: '/viewanalytics',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.home} className={cx('logo-link')}>
                        <Image src={images.logo} alt="Tiktok" />{' '}
                    </Link>
                </div>

                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video">
                                <button className={cx('actions-btn')}>
                                    <UploadIcon />
                                    <sub className={cx('supBadge')}>3</sub>
                                </button>
                            </Tippy>
                            <Tippy content="Message">
                                <button className={cx('actions-btn')}>
                                    <MessageIcon />
                                    <sub className={cx('supBadge')}>12</sub>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button outlineblackcolor lefticon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : userMenu} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-1/184304453_919930808580218_2897404288005860245_n.jpg?stp=dst-jpg_p160x160&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=6_fNhkGVcPwAX-o4hQz&_nc_oc=AQk0ALLikl_nHL8FYMZsRu-J2t7j-n1ji5DT20tozF9WK57RpoV46-mx9d0lUkmp_qM&_nc_ht=scontent.fdad1-4.fna&oh=00_AfAw7DQkkaa59tCCw25ZG4mUA79cV5NPICe23YMfLlHrAA&oe=644D29C7"
                                className={cx('user-avatar')}
                                alt="Name"
                                // fallback="https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
