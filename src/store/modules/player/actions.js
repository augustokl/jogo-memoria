import Types from './types';

export const actionSetPlayer = (newPlayer) => ({
  type: Types.SET_PLAYER,
  payload: newPlayer,
});
