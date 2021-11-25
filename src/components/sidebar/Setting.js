import React from 'react';

import { Nav } from 'react-bootstrap';
import { BsGear, BsBoxArrowRight } from 'react-icons/bs';
import styles from './Settings.module.css';

const Setting = () => {
    return (
        <div className={styles.setting}>
            <Nav className="flex-column">
                <Nav.Link href="/setting" className="text-white">
                    <BsGear /> SETTINGS
                </Nav.Link>
                <Nav.Link href="/signout" className="text-white">
                    <BsBoxArrowRight /> SIGN OUT
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default Setting;
