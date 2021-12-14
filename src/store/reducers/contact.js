import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
	name: 'contacts',
	initialState: {
		originContact: [],
		isGridView: true,
		cities: [],
		contacts: [],
	},
	reducers: {
		listCity(state, action) {
			state.cities = action.payload;
		},
		listContact(state, action) {
			state.contacts = action.payload;
			state.originContact = action.payload;
		},
		filterContactByCity(state, action) {
			state.contacts = state.originContact.filter(
				(item) =>
					item.city === action.payload || action.payload === 'all',
			);
		},
		searchContact(state, action) {
			state.contacts = state.originContact.filter(
				(item) =>
					item.name.toLowerCase().includes(action.payload) ||
					action.payload === '',
			);
		},
		addToContact(state, action) {
			const contactPeople = { ...action.payload };
			state.contacts = [...state.contacts, contactPeople];
		},
		deleteFromContact(state, action) {
			const id = action.payload;
			const contacts = state.contacts;
			const indexContactPeople = contacts.findIndex(
				(item) => item.peopleId === id,
			);
			contacts.splice(indexContactPeople, 1);
			state.contacts = contacts;
		},
		viewAsGrid(state) {
			state.isGridView = true;
		},
		viewAsList(state) {
			state.isGridView = false;
		},
	},
});

export const contactActions = contactSlice.actions;
export default contactSlice;
