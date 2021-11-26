import React from 'react';
import { NavLink } from 'react-router-dom';

import { Nav } from 'react-bootstrap';
import { BsGear, BsBoxArrowRight } from 'react-icons/bs';
import styles from './Settings.module.css';

const Setting = () => {
    const itemClasses = 'text-white nav-link text-uppercase';
    return (
        <nav className={styles.setting}>
            <Nav className="flex-column">
                <NavLink
                    to="settings"
                    className={(navData) =>
                        navData.isActive
                            ? `${itemClasses} ${styles.active}`
                            : itemClasses
                    }
                >
                    <BsGear /> settings
                </NavLink>
                <Nav.Link className={itemClasses}>
                    <BsBoxArrowRight /> Sign up
                </Nav.Link>
            </Nav>
        </nav>
    );
};

export default Setting;
