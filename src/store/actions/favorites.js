import {
	getAllFavorite,
	addFavorite,
	deleteFavorite,
} from '../../lib/api/favorite';
import { favoriteActions } from '../favorite-slice';
import { uiActions } from '../ui-slice';

export const getFavoriteData = () => {
	return async (dispatch) => {
		dispatch(uiActions.setFavoriteStatus('pending'));
		try {
			const favoriteData = await getAllFavorite();
			dispatch(favoriteActions.listContact(favoriteData || []));
			dispatch(uiActions.setFavoriteStatus('success'));
		} catch (error) {
			dispatch(uiActions.setFavoriteStatus('error'));
		}
	};
};

export const addOneFavorite = (favorite) => {
	return async (dispatch) => {
		dispatch(uiActions.setFavoriteStatus('pending'));
		try {
			const newFavorite = { ...favorite };
			newFavorite.peopleId = favorite.id;
			await addFavorite(newFavorite);
			dispatch(favoriteActions.addToFavorite(newFavorite));
			dispatch(uiActions.setFavoriteStatus('success'));
		} catch (error) {
			dispatch(uiActions.setFavoriteStatus('error'));
		}
	};
};

export const deleteOneFavorite = (id) => {
	return async (dispatch) => {
		dispatch(uiActions.setFavoriteStatus('pending'));
		try {
			await deleteFavorite(id);
			dispatch(favoriteActions.deleteFromFavorite(id));
			dispatch(uiActions.setFavoriteStatus('success'));
		} catch (error) {
			dispatch(uiActions.setFavoriteStatus('error'));
		}
	};
};
