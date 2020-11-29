import Types from './types';

const INITIAL_STATE = {
  rank: [],
};

export default function rank(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPDATE_RANK: {
      const updatedList = [...state.rank, action.payload].sort(
        (a, b) => a.plays - b.plays
      );

      return {
        ...state,
        rank: updatedList.length > 5 ? updatedList.slice(0, 5) : updatedList,
        actualPlayer: false,
      };
    }
    default:
      return state;
  }
}
