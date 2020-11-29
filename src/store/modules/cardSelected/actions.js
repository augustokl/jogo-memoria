import Types from './types';

export const actionSetMatch = (matchId) => ({
  type: Types.SET_MATCH,
  payload: matchId,
});

export const actionOpenCard = (openId) => ({
  type: Types.SET_CARD_OPEN,
  payload: openId,
});

export const actionClearCount = () => ({
  type: Types.CLEAR_COUNT,
});
