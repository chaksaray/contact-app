import { configureStore } from '@reduxjs/toolkit';
import peopleSlice from './reducers/people';
import contactSlice from './reducers/contact';
import favoriteSlice from './reducers/favorite';
import uiSlice from './reducers/ui';

const store = configureStore({
	reducer: {
		people: peopleSlice.reducer,
		ui: uiSlice.reducer,
		contact: contactSlice.reducer,
		favorite: favoriteSlice.reducer,
	},
});

export default store;
