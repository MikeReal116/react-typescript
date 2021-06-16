import { FETCH_SUCCESS } from '../Types/actionType';
import { FETCH_ERROR } from '../Types/actionType';
import { FETCHING_COUNTRY } from '../Types/actionType';
import { FILTER_CONTINENT } from '../Types/actionType';
import { SEARCH_COUNTRY } from '../Types/actionType';
import { SORT_COUNTRY } from '../Types/actionType';
import { Country } from '../Types/countryType';
import { CountryActionType } from '../Types/actionType';

export type CountryState = {
  countries: Country[];
  error: string;
  loading: boolean;
  filteredCountries: Country[];
};

const initialState: CountryState = {
  countries: [],
  error: '',
  loading: false,
  filteredCountries: []
};

const countryReducer = (
  state: CountryState = initialState,
  action: CountryActionType
): CountryState => {
  switch (action.type) {
    case FETCHING_COUNTRY:
      return {
        ...state,
        countries: [],
        error: '',
        loading: true,
        filteredCountries: []
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        error: '',
        loading: false,
        filteredCountries: action.payload
      };

    case FETCH_ERROR:
      return {
        ...state,
        countries: [],
        error: action.payload,
        loading: false,
        filteredCountries: []
      };
    case FILTER_CONTINENT:
      if (action.payload === 'allcountries') {
        return { ...state, filteredCountries: state.countries };
      }
      const filteredState = state.countries.filter(
        (country) => country.region.toLowerCase() === action.payload
      );
      return { ...state, filteredCountries: filteredState };

    case SEARCH_COUNTRY:
      if (action.payload === '') {
        return { ...state, filteredCountries: state.countries };
      }
      const searchedResult = state.countries.filter((country) => {
        return country.name
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
      return { ...state, filteredCountries: searchedResult };

    case SORT_COUNTRY:
      if (action.payload === 'asc') {
        const sorted = [...state.filteredCountries].sort(
          (a, b) => a.population - b.population
        );
        return { ...state, filteredCountries: sorted };
      } else if (action.payload === 'desc') {
        const sorted = [...state.filteredCountries].sort(
          (a, b) => b.population - a.population
        );
        return { ...state, filteredCountries: sorted };
      }
      return state;
    default:
      return state;
  }
};

export default countryReducer;
