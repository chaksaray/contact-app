import { FIREBASE_DOMAIN } from '../constant';
import axios from 'axios';

export async function getAllPeople() {
	const response = await axios.get(`${FIREBASE_DOMAIN}/people.json`);
	const data = response.data;

	if (response.statusText !== 'OK') {
		throw new Error(data.message || 'Could not fetch people.');
	}

	const transformedPeople = [];

	for (const key in data) {
		const peopleObj = {
			id: key,
			...data[key],
		};

		transformedPeople.push(peopleObj);
	}

	return transformedPeople;
}

export const addPeople = async (people) => {
	const response = await axios.post(`${FIREBASE_DOMAIN}/people.json`, people);
	const data = response.data;
	if (response.statusText !== 'OK') {
		throw new Error(data.message || 'Could not add people.');
	}
};

export async function updatePeople(people) {
	const response = await axios.put(
		`${FIREBASE_DOMAIN}/people/${people.id}.json`,
		people,
	);
	const data = response.data;

	if (response.statusText !== 'OK') {
		throw new Error(data.message || 'Could not update people.');
	}
}
