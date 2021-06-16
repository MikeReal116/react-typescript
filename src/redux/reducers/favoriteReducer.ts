import { ADD_TO_FAVORITE } from '../Types/actionType';
import { REMOVE_FROM_FAVORITE } from '../Types/actionType';
import { Country } from '../Types/countryType';
import { FavoriteActionType } from '../Types/actionType';

const initialState: FavoriteState = {
  favorite: []
};

export type FavoriteState = {
  favorite: Country[];
};

const favoriteReducer = (
  state: FavoriteState = initialState,
  action: FavoriteActionType
): FavoriteState => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      if (state.favorite.includes(action.payload)) {
        return state;
      }
      return { ...state, favorite: [...state.favorite, action.payload] };
    case REMOVE_FROM_FAVORITE:
      const favorite = state.favorite.filter(
        (country) => country.name !== action.payload.name
      );
      return { ...state, favorite };
    default:
      return state;
  }
};

export default favoriteReducer;
