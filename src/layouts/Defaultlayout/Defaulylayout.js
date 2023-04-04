import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import styles from './Defaultlayout.module.scss';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles);

function DefautlLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefautlLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefautlLayout;
