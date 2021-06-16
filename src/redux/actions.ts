import { Dispatch } from 'redux';
import { FETCH_SUCCESS } from './Types/actionType';
import { FETCH_ERROR } from './Types/actionType';
import { ADD_TO_FAVORITE } from './Types/actionType';
import { REMOVE_FROM_FAVORITE } from './Types/actionType';
import { FETCHING_COUNTRY } from './Types/actionType';
import { FILTER_CONTINENT } from './Types/actionType';
import { SEARCH_COUNTRY } from './Types/actionType';
import { SORT_COUNTRY } from './Types/actionType';
import { CountryActionType } from './Types/actionType';
import { FavoriteActionType } from './Types/actionType';
import { Country } from './Types/countryType';

export const fetchSuccess = (data: Country[]): CountryActionType => {
  return {
    type: FETCH_SUCCESS,
    payload: data
  };
};

export const fetchError = (error: string): CountryActionType => {
  return {
    type: FETCH_ERROR,
    payload: error
  };
};

export const fetchingCountry = (): CountryActionType => {
  return {
    type: FETCHING_COUNTRY
  };
};

export const fetchCountry = (url: string) => {
  return async (dispatch: Dispatch<CountryActionType>) => {
    try {
      dispatch(fetchingCountry());
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('resource not found');
      }
      const data = await response.json();
      dispatch(fetchSuccess(data));
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
};

export const addFavorite = (country: Country): FavoriteActionType => {
  return {
    type: ADD_TO_FAVORITE,
    payload: country
  };
};

export const removeFavorite = (country: Country): FavoriteActionType => {
  return {
    type: REMOVE_FROM_FAVORITE,
    payload: country
  };
};

export const filterContinent = (continent: string): CountryActionType => {
  return {
    type: FILTER_CONTINENT,
    payload: continent
  };
};

export const searchCountry = (value: string): CountryActionType => {
  return {
    type: SEARCH_COUNTRY,
    payload: value
  };
};

export const sortCountry = (value: string): CountryActionType => {
  return {
    type: SORT_COUNTRY,
    payload: value
  };
};
