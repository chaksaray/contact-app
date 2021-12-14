import { FIREBASE_DOMAIN } from '../constant';
import axios from 'axios';

export async function getAllFavorite() {
	const response = await axios.get(`${FIREBASE_DOMAIN}/favorites.json`);
	const data = response.data;

	if (response.statusText !== 'OK') {
		throw new Error(data.message || 'Could not fetch favorites.');
	}

	const tranformedFavorite = [];

	for (const key in data) {
		const favoriteObj = {
			id: key,
			...data[key],
		};

		tranformedFavorite.push(favoriteObj);
	}

	return tranformedFavorite;
}

export async function addFavorite(favorite) {
	const response = await axios.post(
		`${FIREBASE_DOMAIN}/favorites.json`,
		favorite,
	);
	const data = response.data;

	if (response.statusText !== 'OK') {
		throw new Error(data.message || 'Could not add favorites.');
	}
}

export async function updateFavorite(favorite) {
	const response = await axios.put(
		`${FIREBASE_DOMAIN}/favorites.json`,
		favorite,
	);
	const data = response.data;

	if (response.statusText !== 'OK') {
		throw new Error(data.message || 'Could not update favorites.');
	}
}

export async function deleteFavorite(id) {
	const response = await axios.delete(`${FIREBASE_DOMAIN}/favorites.json`, {
		params: { id: id },
	});
	const data = response.data;

	if (response.statusText !== 'OK') {
		throw new Error(data.message || 'Could not delete favorites.');
	}
}
