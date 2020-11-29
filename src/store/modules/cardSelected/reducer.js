import Types from './types';
import TypesRank from '../rank/types';
import TypesPlayer from '../player/types';

const INITIAL_STATE = {
  matchList: [],
  cardsOpen: [],
  count: 0,
};

export default function cardSelected(state = INITIAL_STATE, action) {
  switch (action.type) {
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
    case TypesRank.UPDATE_RANK: {
      return {
        ...state,
        matchList: [],
        cardsOpen: [],
      };
    }
    case TypesPlayer.SET_PLAYER:
    case Types.CLEAR_COUNT: {
      return {
        ...state,
        count: 0,
      };
    }
    default:
      return state;
  }
}
