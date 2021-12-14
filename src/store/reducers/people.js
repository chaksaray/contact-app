import { createSlice } from '@reduxjs/toolkit';

const peopleSlice = createSlice({
	name: 'people',
	initialState: {
		originPeople: [],
		people: [],
		cities: [],
		isGridView: true,
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
