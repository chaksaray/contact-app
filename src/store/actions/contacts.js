import { getAllPeople } from '../../lib/api/people';
import { contactActions } from '../reducers/contact';
import { uiActions } from '../reducers/ui';

export const getContactData = () => {
	return async (dispatch) => {
		dispatch(uiActions.setContactStatus('pending'));
		try {
			let contactData = await getAllPeople();
			contactData = contactData.map((contact) => contact.isContact);
			dispatch(contactActions.listContact(contactData || []));
			dispatch(uiActions.setContactStatus('success'));
		} catch (error) {
			dispatch(uiActions.setContactStatus('error'));
		}
	};
};

export const addOneContact = (contact) => {
	return (dispatch) => {
		const newContact = { ...contact };
		newContact.peopleId = contact.id;
		dispatch(contactActions.addToContact(newContact));
	};
};

export const deleteOneContact = (id) => {
	return (dispatch) => {
		dispatch(contactActions.deleteFromContact(id));
	};
};
