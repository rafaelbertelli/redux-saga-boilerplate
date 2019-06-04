import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { addFavoriteSuccess } from '../actions/favorites';

export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    const repositoryData = {
      id: data.id,
      url: data.html_url,
      name: data.full_name,
      description: data.description,
    };

    yield put(addFavoriteSuccess(repositoryData));
  } catch (err) {
    console.error(err.message);
  }
}
