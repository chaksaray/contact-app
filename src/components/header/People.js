import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { peopleActions } from '../../store/people-slice';
import { useSelector } from 'react-redux';

import { BsFillGridFill, BsDistributeVertical } from 'react-icons/bs';
import { Row, Col } from 'react-bootstrap';

const People = () => {
	const dispatch = useDispatch();
	const viewAsGridHandler = () => {
		dispatch(peopleActions.viewAsGrid());
	};
	const viewAsListHandler = () => {
		dispatch(peopleActions.viewAsList());
	};

	const isGridView = useSelector((state) => state.people.isGridView);

	return (
		<Fragment>
			<Row>
				<Col>
					<h1 className={`primary-color`}>People</h1>
				</Col>
				<Col className="btn">
					<h3
						className={`${
							isGridView ? 'primary-color' : 'inactive-color'
						}`}
					>
						<BsFillGridFill onClick={viewAsGridHandler} />
					</h3>
				</Col>
				<Col className="btn">
					<h3
						className={`${
							!isGridView ? 'primary-color' : 'inactive-color'
						}`}
					>
						<BsDistributeVertical onClick={viewAsListHandler} />
					</h3>
				</Col>
			</Row>
		</Fragment>
	);
};

export default People;
