import Types from './types';

export const actionSetMatch = (matchId) => ({
  type: Types.SET_MATCH,
  payload: matchId,
});

export const actionOpenCard = (openId = 0) => ({
  type: Types.SET_CARD_OPEN,
  payload: openId,
});

export const actionPlayAgain = () => ({
  type: Types.PLAY_AGAIN,
});
