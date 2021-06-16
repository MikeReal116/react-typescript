import { combineReducers } from 'redux';
import favoriteReducer from './favoriteReducer';
import countryReducer from './countryReducer';

const reducers = combineReducers({
  favorite: favoriteReducer,
  country: countryReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
