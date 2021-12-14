import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		peopleStatus: null,
		favoriteStatus: null,
	},
	reducers: {
		setPeopleStatus(state, action) {
			state.peopleStatus = action.payload;
		},
		setFavoriteStatus(state, action) {
			state.favoriteStatus = action.payload;
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice;
