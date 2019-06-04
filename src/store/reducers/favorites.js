const INITIAL_STATE = {
  data: [],
  error: '',
  loading: false,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_REQUEST':
      return {
        ...state,
        error: '',
        loading: true,
      };

    case 'ADD_FAVORITE_SUCCESS':
      return {
        ...state,
        data: [...state.data, action.payload.data],
        error: '',
        loading: false,
      };

    case 'ADD_FAVORITE_ERROR':
      return {
        ...state,
        error: action.payload.err,
        loading: false,
      };

    default:
      return state;
  }
}
