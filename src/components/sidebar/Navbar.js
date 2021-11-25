import React from 'react';

import { Nav } from 'react-bootstrap';
import {
    BsJournalBookmark,
    BsHeart,
    BsHouseDoor,
    BsJournalText,
    BsPerson,
} from 'react-icons/bs';
import styles from './Navbar.module.css';

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home" className="text-white">
                    <BsHouseDoor />
                    HOME
                </Nav.Link>
                <Nav.Link href="/contact" className="text-white">
                    <BsJournalBookmark /> CONTACTS
                </Nav.Link>
                <Nav.Link href="/favorite" className="text-white">
                    <BsHeart />
                    FAVORITES
                </Nav.Link>
                <Nav.Link href="/people" className="text-white">
                    <BsPerson />
                    PEOPLE
                </Nav.Link>
                <Nav.Link href="/company" className="text-white">
                    <BsJournalText />
                    COMPANIES
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default NavBar;
