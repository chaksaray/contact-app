import { FIREBASE_DOMAIN } from './constant';
import axios from 'axios';

export async function getAllPeople() {
	const response = await axios.get(`${FIREBASE_DOMAIN}/people.json`);
	const data = response.data;

	if (response.statusText !== 'OK') {
		throw new Error(data.message || 'Could not fetch people.');
	}

	return data;
}
