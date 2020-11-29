import Types from './types';

export const actionSetPlayer = (newPlayer = false) => ({
  type: Types.SET_PLAYER,
  payload: newPlayer,
});

export const actionPlayAgain = () => ({
  type: Types.PLAY_AGAIN,
});
