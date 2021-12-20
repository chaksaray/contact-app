import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeopleData, getCityData } from '../store/actions/people';

import HeaderFilter from '../components/people/HeaderFilter';
import PeopleGridView from '../components/people/PeopleGridView';
import PeopleListView from '../components/people/PeopleListView';
import NewPeopleFloatButton from '../components/people/NewPeopleFloatButton';

const People = () => {
	const dispatch = useDispatch();
	const isGridView = useSelector((state) => state.people.isGridView);

	useEffect(() => {
		dispatch(getPeopleData());
		dispatch(getCityData());
	}, [dispatch]);

	return (
		<Fragment>
			<HeaderFilter />
			{isGridView ? <PeopleGridView /> : <PeopleListView />}
			<NewPeopleFloatButton />
		</Fragment>
	);
};

export default People;
