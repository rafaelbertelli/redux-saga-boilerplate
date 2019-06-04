import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as FavoriteActions } from '../ducks/favorites';

export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    const isDuplicated = yield select(state =>
      state.favorites.data.find(favorite => favorite.id === data.id)
    );

    if (isDuplicated) {
      yield put(FavoriteActions.addFavoriteError('Repositório duplicado'));
    } else {
      const repositoryData = {
        id: data.id,
        url: data.html_url,
        name: data.full_name,
        description: data.description,
      };

      yield put(FavoriteActions.addFavoriteSuccess(repositoryData));
    }
  } catch (err) {
    yield put(FavoriteActions.addFavoriteError(err.message));
  }
}
