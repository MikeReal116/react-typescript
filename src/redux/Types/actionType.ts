import { Country } from './countryType';

export const FETCH_COUNTRY = 'FETCH_COUNTRY';
export const FETCHING_COUNTRY = 'FETCHING_COUNTRY';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';
export const FILTER_CONTINENT = 'FILTER_CONTINENT';
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY';
export const SORT_COUNTRY = 'SORT_COUNTRY';

type FetchingCountry = {
  type: typeof FETCHING_COUNTRY;
};

type FetchSuccess = {
  type: typeof FETCH_SUCCESS;
  payload: Country[];
};

type FetchError = {
  type: typeof FETCH_ERROR;
  payload: string;
};

type FilterContinent = {
  type: typeof FILTER_CONTINENT;
  payload: string;
};

type SearchCountry = {
  type: typeof SEARCH_COUNTRY;
  payload: string;
};

type SortCountry = {
  type: typeof SORT_COUNTRY;
  payload: string;
};

type AddFavorite = {
  type: typeof ADD_TO_FAVORITE;
  payload: Country;
};
type RemoveFavorite = {
  type: typeof REMOVE_FROM_FAVORITE;
  payload: Country;
};

export type CountryActionType =
  | FetchingCountry
  | FetchSuccess
  | FetchError
  | FilterContinent
  | SearchCountry
  | SortCountry;

export type FavoriteActionType = AddFavorite | RemoveFavorite;
