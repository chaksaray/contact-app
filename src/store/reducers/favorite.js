import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState: {
		originFavorite: [],
		isGridView: true,
		cities: [],
		favorites: [],
	},
	reducers: {
		listCity(state, action) {
			state.cities = action.payload;
		},
		listFavorite(state, action) {
			state.favorites = action.payload;
			state.originFavorite = action.payload;
		},
		filterFavoriteByCity(state, action) {
			state.favorites = state.originFavorite.filter(
				(item) =>
					item.city === action.payload || action.payload === 'all',
			);
		},
		searchFavorite(state, action) {
			state.favorites = state.originFavorite.filter(
				(item) =>
					item.name.toLowerCase().includes(action.payload) ||
					action.payload === '',
			);
		},
		addToFavorite(state, action) {
			const favoritePeople = { ...action.payload };
			state.favorites = [...state.favorites, favoritePeople];
		},
		deleteFromFavorite(state, action) {
			const id = action.payload;
			const favorites = state.favorites;
			const indexFavoritePeople = favorites.findIndex(
				(item) => item.peopleId === id,
			);
			favorites.splice(indexFavoritePeople, 1);
			state.favorites = favorites;
		},
		viewAsGrid(state) {
			state.isGridView = true;
		},
		viewAsList(state) {
			state.isGridView = false;
		},
	},
});

export const favoriteActions = favoriteSlice.actions;
export default favoriteSlice;
