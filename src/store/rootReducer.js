import { combineReducers } from 'redux';

import cardSelected from './modules/cardSelected/reducer';
import rank from './modules/rank/reducer';
import player from './modules/player/reducer';

export default combineReducers({ cardSelected, rank, player });
