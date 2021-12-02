import { useSelector } from 'react-redux';
import { transformPeople } from '../../lib/helper';

import { CardGroup } from 'react-bootstrap';
import PeopleGridViewItem from './PeopleGridViewItem';
import LoadingSpinner from '../UI/LoadingSpinner';

const PeopleGridView = () => {
	let peopleItems = useSelector((state) => state.people.people);
	const transformedPeopleItems = transformPeople(peopleItems);

	const status = useSelector((state) => state.ui.peopleStatus);
	if (status) {
		if (status === 'pending') {
			return (
				<div className="centered">
					<LoadingSpinner />
				</div>
			);
		}

		if (status === 'error') {
			return (
				<div className="centered">
					<p>Get people failed!</p>
				</div>
			);
		}
	}

	return (
		<div className="content">
			{transformedPeopleItems.map((item, index) => (
				<CardGroup key={index}>
					{item.map((people) => (
						<PeopleGridViewItem key={people.id} people={people} />
					))}
				</CardGroup>
			))}
		</div>
	);
};

export default PeopleGridView;
