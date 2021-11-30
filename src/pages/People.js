import { Fragment, useEffect, useCallback } from 'react';
import axios from 'axios';
import { DOMAIN } from '../lib/constant';
import { useDispatch, useSelector } from 'react-redux';
import { peopleActions } from '../store/people-slice';
import { uiActions } from '../store/ui-slice';
import { extractUniqueValueArray } from '../lib/helper';

import HeaderFilter from '../components/people/HeaderFilter';
import PeopleGridView from '../components/people/PeopleGridView';
import PeopleListView from '../components/people/PeopleListView';

const People = () => {
	const dispatch = useDispatch();
	const isGridView = useSelector((state) => state.people.isGridView);

	const getPeople = useCallback(() => {
		dispatch(uiActions.setPeopleStatus('pending'));

		axios
			.get(`${DOMAIN}/people.json`)
			.then((response) => {
				const people = response.data.people;
				dispatch(peopleActions.listPeople(people));

				let cities = people.map((item) => item.city);
				cities = extractUniqueValueArray(cities);

				dispatch(peopleActions.listCity(cities));
				dispatch(uiActions.setPeopleStatus('success'));
			})
			.catch(() => {
				dispatch(uiActions.setPeopleStatus('error'));
			});
	}, []);

	useEffect(() => {
		getPeople();
	}, [getPeople]);

	return (
		<Fragment>
			<HeaderFilter />
			{isGridView && <PeopleGridView />}
			{!isGridView && <PeopleListView />}
		</Fragment>
	);
};

export default People;
