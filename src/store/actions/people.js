import { getAllPeople, updatePeople, addPeople } from '../../lib/api/people';
import { peopleActions } from '../people-slice';
import { uiActions } from '../ui-slice';
import { extractUniqueValueArray } from '../../lib/helper';

export const getPeopleData = () => {
	return async (dispatch) => {
		dispatch(uiActions.setPeopleStatus('pending'));
		try {
			const peopleData = await getAllPeople();
			dispatch(peopleActions.listPeople(peopleData || []));
			dispatch(uiActions.setPeopleStatus('success'));
		} catch (error) {
			dispatch(uiActions.setPeopleStatus('error'));
		}
	};
};

export const getCityData = () => {
	return async (dispatch) => {
		dispatch(uiActions.setPeopleStatus('pending'));
		try {
			const peopleData = await getAllPeople();

			let cities = peopleData.map((item) => item.city);
			cities = extractUniqueValueArray(cities);
			dispatch(peopleActions.listCity(cities));

			dispatch(uiActions.setPeopleStatus('success'));
		} catch (error) {
			dispatch(uiActions.setPeopleStatus('error'));
		}
	};
};

export const addOnePeople = (people) => {
	return async (dispatch) => {
		dispatch(uiActions.setPeopleStatus('pending'));
		try {
			await addPeople(people);
			dispatch(peopleActions.addPeople(people));
			dispatch(uiActions.setPeopleStatus('success'));
		} catch (error) {
			dispatch(uiActions.setPeopleStatus('error'));
		}
	};
};

export const updateOnePeople = (people) => {
	return async (dispatch) => {
		dispatch(uiActions.setPeopleStatus('pending'));
		try {
			await updatePeople(people);
			dispatch(peopleActions.updatePeople(people));
			dispatch(uiActions.setPeopleStatus('success'));
		} catch (error) {
			dispatch(uiActions.setPeopleStatus('error'));
		}
	};
};
