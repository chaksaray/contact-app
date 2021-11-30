import { createSlice } from '@reduxjs/toolkit';

const peopleSlice = createSlice({
	name: 'people',
	initialState: {
		originPeople: [],
		items: [],
		isGridView: true,
		cities: [],
	},
	reducers: {
		listCity(state, action) {
			state.cities = action.payload;
		},
		listPeople(state, action) {
			state.items = action.payload;
			state.originPeople = action.payload;
		},
		filterPeopleByCity(state, action) {
			state.items = state.originPeople.filter(
				(item) =>
					item.city === action.payload || action.payload === 'all',
			);
		},
		searchPeople(state, action) {
			state.items = state.originPeople.filter(
				(item) =>
					item.name.toLowerCase().includes(action.payload) ||
					action.payload === '',
			);
		},
		addToContact() {},
		addToFavorite() {},
		deleteFromFavorite() {},
		deleteFromContact() {},
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
