import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		peopleStatus: null,
		addPeopleStatus: null,
		favoriteStatus: null,
		contactStatus: null,
	},
	reducers: {
		setPeopleStatus(state, action) {
			state.peopleStatus = action.payload;
		},
		setFormPeopleStatus(state, action) {
			state.addPeopleStatus = action.payload;
		},
		setFavoriteStatus(state, action) {
			state.favoriteStatus = action.payload;
		},
		setContactStatus(state, action) {
			state.contactStatus = action.payload;
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice;
