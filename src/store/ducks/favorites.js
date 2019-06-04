/**
 * TYPES
 */
export const Types = {
  ADD_REQUEST: 'favorites/ADD_REQUEST',
  ADD_SUCCESS: 'favorites/ADD_SUCCESS',
  ADD_FAILURE: 'favorites/ADD_FAILURE',
};

/**
 * REDUCER
 */
const INITIAL_STATE = {
  data: [],
  error: null,
  loading: false,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.data],
        error: null,
        loading: false,
      };

    case Types.ADD_FAILURE:
      return {
        ...state,
        error: action.payload.err,
        loading: false,
      };

    default:
      return state;
  }
}

/**
 * ACTIONS
 */
export const Creators = {
  addFavoriteRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository },
  }),

  addFavoriteSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addFavoriteError: err => ({
    type: Types.ADD_FAILURE,
    payload: { err },
  }),
};
