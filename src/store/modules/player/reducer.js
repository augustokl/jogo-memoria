import Types from './types';

const INITIAL_STATE = {
  player: false,
};

export default function rank(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_PLAYER: {
      return { ...state, player: action.payload };
    }
    default:
      return state;
  }
}
