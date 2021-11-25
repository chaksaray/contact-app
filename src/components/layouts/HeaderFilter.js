import People from '../header/People';
import CityFilter from '../header/City';

import styles from './HeaderFilter.module.css';

const HeaderFilter = (props) => {
    return (
        <header className={styles.headerfilter}>
            <People />
            <CityFilter />
        </header>
    );
};

export default HeaderFilter;
