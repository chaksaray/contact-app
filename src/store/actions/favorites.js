import { getAllPeople } from '../../lib/api/people';
import { favoriteActions } from '../reducers/favorite';
import { uiActions } from '../reducers/ui';

export const getFavoriteData = () => {
	return async (dispatch) => {
		dispatch(uiActions.setFavoriteStatus('pending'));
		try {
			let favoriteData = await getAllPeople();
			favoriteData = favoriteData.map((favorite) => favorite.isFavorite);
			dispatch(favoriteActions.listContact(favoriteData || []));
			dispatch(uiActions.setFavoriteStatus('success'));
		} catch (error) {
			dispatch(uiActions.setFavoriteStatus('error'));
		}
	};
};

export const addOneFavorite = (favorite) => {
	return (dispatch) => {
		const newFavorite = { ...favorite };
		newFavorite.peopleId = favorite.id;
		dispatch(favoriteActions.addToFavorite(newFavorite));
	};
};

export const deleteOneFavorite = (id) => {
	return (dispatch) => {
		dispatch(favoriteActions.deleteFromFavorite(id));
	};
};
