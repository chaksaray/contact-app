import { configureStore } from '@reduxjs/toolkit';
import peopleSlice from './people-slice';
import uiSlice from './ui-slice';

const store = configureStore({
	reducer: { people: peopleSlice.reducer, ui: uiSlice.reducer },
});

export default store;
