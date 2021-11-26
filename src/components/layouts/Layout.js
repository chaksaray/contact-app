import Sidebar from './Sidebar';
import MainHeader from './MainHeader';

import styles from './Layout.module.css';

const Layout = (props) => {
    return (
        <div className={styles.main}>
            <Sidebar />
            <div className={styles['main-content']}>
                <MainHeader />
                <main className={styles['content-wrapper']}>
                    {props.children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
