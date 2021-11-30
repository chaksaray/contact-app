import { useSelector } from 'react-redux';

import PeopleListViewItem from './PeopleListViewItem';
import LoadingSpinner from '../UI/LoadingSpinner';

const PeopleListView = () => {
	const peopleItems = useSelector((state) => state.people.items);

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
			{peopleItems.map((people) => (
				<PeopleListViewItem {...people} key={people.id} />
			))}
		</div>
	);
};

export default PeopleListView;
