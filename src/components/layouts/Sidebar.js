import React from 'react';

import Profile from '../sidebar/Profile';
import NavBar from '../sidebar/Navbar';
import Setting from '../sidebar/Setting';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Profile />
            <NavBar />
            <Setting />
        </div>
    );
};

export default Sidebar;
