import { Form } from 'react-bootstrap';
import { BsFillGeoAltFill } from 'react-icons/bs';

import styles from './City.module.css';
import { Fragment } from 'react';

const CityFilter = () => {
	return (
		<Fragment>
			<div className="d-flex justify-content-between">
				<h3 className="primary-color">
					<BsFillGeoAltFill />
				</h3>
				<Form.Select
					aria-label="Default select example"
					className={styles.select}
				>
					<option>Ukraine Lviv</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</Form.Select>
			</div>
		</Fragment>
	);
};

export default CityFilter;
