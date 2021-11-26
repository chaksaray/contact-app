import React from 'react';
import { NavLink } from 'react-router-dom';

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
	const navItems = [
		{
			path: '/home',
			name: 'home',
			icon: <BsHouseDoor />,
		},
		{
			path: '/contacts',
			name: 'Contacts',
			icon: <BsJournalBookmark />,
		},
		{
			path: '/favorites',
			name: 'favorites',
			icon: <BsHeart />,
		},
		{
			path: '/people',
			name: 'people',
			icon: <BsPerson />,
		},
		{
			path: '/companies',
			name: 'companies',
			icon: <BsJournalText />,
		},
	];

	const menuItemClasses = 'text-white nav-link text-uppercase';

	return (
		<nav className={styles.navbar}>
			<Nav className="flex-column">
				{navItems.map((item) => (
					<NavLink
						key={item.name}
						className={(navData) =>
							navData.isActive
								? `${menuItemClasses} ${styles.active}`
								: menuItemClasses
						}
						to={item.path}
					>
						{item.icon}
						{item.name}
					</NavLink>
				))}
			</Nav>
		</nav>
	);
};

export default NavBar;
