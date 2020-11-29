import Types from './types';

const INITIAL_STATE = {
  matchList: [],
  cardsOpen: [],
  count: 0,
};

export default function cardSelected(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_SELECT_CARD: {
      return {
        ...state,
        target: action.payload,
      };
    }
    case Types.SET_MATCH: {
      const newMatchList = [...state.matchList, action.payload];
      return {
        ...state,
        matchList: newMatchList,
        cardsOpen: [],
      };
    }
    case Types.SET_CARD_OPEN: {
      let newOpenList = [];
      let { count } = state;

      if (action.payload) {
        newOpenList = [...state.cardsOpen, action.payload];
      }

      if (newOpenList.length === 2) {
        count += 1;
      }

      return { ...state, cardsOpen: newOpenList, count };
    }
    case Types.PLAY_AGAIN: {
      return {
        matchList: [],
        cardsOpen: [],
        count: 0,
      };
    }
    default:
      return state;
  }
}
