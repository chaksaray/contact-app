import Search from '../header/Search';
import Greeting from '../header/Greeting';

import styles from './MainHeader.module.css';

const MainHeader = () => {
	return (
		<header className={styles.header}>
			<Search />
			<Greeting />
		</header>
	);
};

export default MainHeader;
