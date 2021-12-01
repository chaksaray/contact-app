import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { peopleActions } from '../../store/people-slice';

import { Form } from 'react-bootstrap';
import styles from './Search.module.css';

const Search = () => {
	const dispatch = useDispatch();

	const searchHandler = (event) => {
		const searchText = event.target.value;
		dispatch(peopleActions.searchPeople(searchText));
	};

	return (
		<Fragment>
			<Form className={styles.search}>
				<Form.Group className="mb-3">
					<Form.Control
						type="search"
						placeholder="Search..."
						onChange={searchHandler}
					/>
				</Form.Group>
			</Form>
		</Fragment>
	);
};

export default Search;
