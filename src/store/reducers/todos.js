const INITIAL_STATE = [{ id: 1, text: 'Fazer café' }, { id: 2, text: 'Ir ao médico' }];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    default:
      return state;
  }
}
