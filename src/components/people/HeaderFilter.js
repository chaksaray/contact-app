import People from '../header/People';
import CityFilter from '../header/City';

import styles from './HeaderFilter.module.css';

const HeaderFilter = () => {
	return (
		<div className={styles.filter}>
			<People />
			<CityFilter />
		</div>
	);
};

export default HeaderFilter;
