import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import cardSelected from './modules/cardSelected/reducer';
import rank from './modules/rank/reducer';
import player from './modules/player/reducer';

const persistConfig = {
  key: '@jogoMemoria',
  storage,
  whitelist: ['rank'],
};

const rootReducers = combineReducers({ cardSelected, rank, player });

export default persistReducer(persistConfig, rootReducers);
