import { Fragment, useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { peopleActions } from '../../store/people-slice';

import { Form } from 'react-bootstrap';
import { BsFillGeoAltFill } from 'react-icons/bs';

import styles from './City.module.css';

const CityFilter = () => {
	const dispatch = useDispatch();
	const [city, setCity] = useState('all');

	const cities = useSelector((state) => state.people.cities);

	const selectCityHandler = useCallback((event) => {
		setCity(event.target.value);
	}, []);

	useEffect(() => {
		dispatch(peopleActions.filterPeopleByCity(city));
	}, [dispatch, city]);

	return (
		<Fragment>
			<div className="d-flex justify-content-between">
				<h3 className="primary-color">
					<BsFillGeoAltFill />
				</h3>
				<Form.Select
					className={styles.select}
					onChange={selectCityHandler}
				>
					<option value="all">All</option>
					{cities.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</Form.Select>
			</div>
		</Fragment>
	);
};

export default CityFilter;
