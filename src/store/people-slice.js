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
		addToFavorite(state, action) {
			const favoritePeople = { ...action.payload };
			favoritePeople.isFavorite = true;

			const indexPeople = state.people.findIndex(
				(item) => item.id === favoritePeople.id,
			);
			const people = state.people;
			people[indexPeople].isFavorite = true;
			state.people = people;
			state.favorites = [...state.favorites, favoritePeople];
		},
		deleteFromFavorite(state, action) {
			const id = action.payload;
			const people = state.people;
			const indexPeople = people.findIndex((item) => item.id === id);
			people[indexPeople].isFavorite = false;
			state.people = people;

			const favorites = state.favorites;
			const indexFavoritePeople = favorites.findIndex(
				(item) => item.id === id,
			);
			favorites.splice(indexFavoritePeople, 1);
			state.favorites = favorites;
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
