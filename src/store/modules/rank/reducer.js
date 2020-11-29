import Types from './types';

const INITIAL_STATE = {
  target: 0,
  matchList: [],
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
      return { ...state, matchList: newMatchList };
    }
    case Types.ADD_COUNT: {
      const newCount = state.count + 1;
      return { ...state, count: newCount };
    }
    default:
      return state;
  }
}
