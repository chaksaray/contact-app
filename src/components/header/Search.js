import { Fragment } from 'react';
import { Form } from 'react-bootstrap';
import styles from './Search.module.css';

const Search = () => {
	return (
		<Fragment>
			<Form className={styles.search}>
				<Form.Group className="mb-3">
					<Form.Control type="search" placeholder="Search..." />
				</Form.Group>
			</Form>
		</Fragment>
	);
};

export default Search;
