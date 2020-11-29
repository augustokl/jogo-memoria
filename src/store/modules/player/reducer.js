import Types from './types';

const INITIAL_STATE = {
  player: false,
  playAgain: false,
};

export default function rank(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_PLAYER: {
      return { ...state, player: action.payload, playAgain: false };
    }
    case Types.PLAY_AGAIN: {
      return { ...state, playAgain: true };
    }
    default:
      return state;
  }
}
