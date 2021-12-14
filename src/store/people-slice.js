import { createSlice } from '@reduxjs/toolkit';

const peopleSlice = createSlice({
	name: 'people',
	initialState: {
		originPeople: [],
		people: [],
		isGridView: true,
		cities: [],
		favorites: [],
		contacts: [],
	},
	reducers: {
		listCity(state, action) {
			state.cities = action.payload;
		},
		listPeople(state, action) {
			state.people = action.payload;
			state.originPeople = action.payload;
		},
		filterPeopleByCity(state, action) {
			state.people = state.originPeople.filter(
				(item) =>
					item.city === action.payload || action.payload === 'all',
			);
		},
		searchPeople(state, action) {
			state.people = state.originPeople.filter(
				(item) =>
					item.name.toLowerCase().includes(action.payload) ||
					action.payload === '',
			);
		},
		addPeople(state, action) {
			const newPeople = { ...action.payload };
			state.people = [...state.people, newPeople];
		},
		updatePeople(state, action) {
			const newPeople = { ...action.payload };
			const indexPeople = state.people.findIndex(
				(item) => item.id === newPeople.id,
			);
			const people = state.people;
			people[indexPeople] = newPeople;
			state.people = people;
		},
		addToContact(state, action) {
			const contactPeople = { ...action.payload };
			contactPeople.isContact = true;

			const indexPeople = state.people.findIndex(
				(item) => item.id === contactPeople.id,
			);
			const people = state.people;
			people[indexPeople].isContact = true;
			state.people = people;
			state.contacts = [...state.contacts, contactPeople];
		},
		deleteFromContact(state, action) {
			const id = action.payload;
			const people = state.people;
			const indexPeople = people.findIndex((item) => item.id === id);
			people[indexPeople].isContact = false;
			state.people = people;

			const contacts = state.contacts;
			const indexContactPeople = contacts.findIndex(
				(item) => item.id === id,
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

export const peopleActions = peopleSlice.actions;
export default peopleSlice;
