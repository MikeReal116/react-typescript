import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Country } from './Types/countryType';
import { CountryState } from './reducers/countryReducer';
import { FavoriteState } from './reducers/favoriteReducer';

import reducers from './reducers';

const saveToLocalStorage = (state: Country[]) => {
  try {
    const stateToSave = JSON.stringify(state);
    localStorage.setItem('savedItems', stateToSave);
  } catch (error) {
    console.log(error);
  }
};

const loadFromLocalStorage = (): Country[] => {
  try {
    const savedState = localStorage.getItem('savedItems');
    if (savedState === null) return [];
    return JSON.parse(savedState);
  } catch (error) {
    console.log(error);
    return [];
  }
};

const initialState: { favorite: FavoriteState; country: CountryState } = {
  favorite: {
    favorite: loadFromLocalStorage()
  },
  country: {
    countries: [],
    error: '',
    loading: false,
    filteredCountries: []
  }
};
let composeEnhancers = compose;

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true
    });
  }
}
const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

store.subscribe(() => saveToLocalStorage(store.getState().favorite.favorite));
export default store;
