import Types from './types';

export const actionSetSelected = (idCard) => ({
  type: Types.SET_SELECT_CARD,
  payload: idCard,
});

export const actionSetMatch = (matchId) => ({
  type: Types.SET_MATCH,
  payload: matchId,
});

export const actionAddCount = () => ({
  type: Types.ADD_COUNT,
});
