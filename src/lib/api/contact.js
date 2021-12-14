import { FIREBASE_DOMAIN } from '../constant';
import axios from 'axios';

export async function getAllContact() {
	const response = await axios.get(`${FIREBASE_DOMAIN}/contacts.json`);
	const data = response.data;

	if (response.statusText !== 'OK') {
		throw new Error(data.message || 'Could not fetch contacts.');
	}

	const transformedContact = [];

	for (const key in data) {
		const contactObj = {
			id: key,
			...data[key],
		};

		transformedContact.push(contactObj);
	}

	return transformedContact;
}

export async function addContact(contact) {
	const response = await axios.post(
		`${FIREBASE_DOMAIN}/contacts.json`,
		contact,
	);
	const data = response.data;

	if (response.statusText !== 'OK') {
		throw new Error(data.message || 'Could not add contacts.');
	}
}

export async function updateContact(contact) {
	const response = await axios.put(
		`${FIREBASE_DOMAIN}/contacts.json`,
		contact,
	);
	const data = response.data;

	if (response.statusText !== 'OK') {
		throw new Error(data.message || 'Could not update contacts.');
	}
}

export async function deleteContact(id) {
	const response = await axios.delete(`${FIREBASE_DOMAIN}/contacts.json`, {
		params: { id: id },
	});
	const data = response.data;

	if (response.statusText !== 'OK') {
		throw new Error(data.message || 'Could not delete contacts.');
	}
}
