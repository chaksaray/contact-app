import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		peopleStatus: null,
	},
	reducers: {
		setPeopleStatus(state, action) {
			state.peopleStatus = action.payload;
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice;
