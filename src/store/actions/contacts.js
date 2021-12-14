import {
	getAllContact,
	addContact,
	deleteContact,
} from '../../lib/api/contact';
import { contactActions } from '../reducers/contact';
import { uiActions } from '../reducers/ui';

export const getContactData = () => {
	return async (dispatch) => {
		dispatch(uiActions.setContactStatus('pending'));
		try {
			const contactData = await getAllContact();
			dispatch(contactActions.listContact(contactData || []));
			dispatch(uiActions.setContactStatus('success'));
		} catch (error) {
			dispatch(uiActions.setContactStatus('error'));
		}
	};
};

export const addOneContact = (contact) => {
	return async (dispatch) => {
		dispatch(uiActions.setContactStatus('pending'));
		try {
			const newContact = { ...contact };
			newContact.peopleId = contact.id;
			await addContact(newContact);
			dispatch(contactActions.addToContact(newContact));
			dispatch(uiActions.setContactStatus('success'));
		} catch (error) {
			dispatch(uiActions.setContactStatus('error'));
		}
	};
};

export const deleteOneContact = (id) => {
	return async (dispatch) => {
		dispatch(uiActions.setContactStatus('pending'));
		try {
			await deleteContact(id);
			dispatch(contactActions.deleteFromContact(id));
			dispatch(uiActions.setContactStatus('success'));
		} catch (error) {
			dispatch(uiActions.setContactStatus('error'));
		}
	};
};
