import { createSlice } from '@reduxjs/toolkit';

const peopleSlice = createSlice({
	name: 'people',
	initialState: {
		originPeople: [],
		items: [],
		isGridView: true,
	},
	reducers: {
		listPeople(state, action) {
			state.items = action.payload;
			state.originPeople = action.payload;
		},
		filterPeopleByCity(state, action) {
			state.items = state.items.filter(
				(item) => item.id === action.payload,
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
