const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          id: Math.random(),
          name: 'facebook/react',
          description:
            'askjdjad ajd ajs djahsdjas dn askjdakjda jlkdas kjdalkjd adajsdlk jadlkjasdjasldkja',
          url: 'https://www.github.com/facebook/react/',
        },
      ];

    default:
      return state;
  }
}
