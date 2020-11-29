import Types from './types';

export const actionUpdateRank = (player) => ({
  type: Types.UPDATE_RANK,
  payload: player,
});
