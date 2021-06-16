// your custom hook goes here
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCountry } from '../redux/actions';
import { RootState } from '../redux/reducers';

const useContry = (...name: string[]) => {
  const dispatch = useDispatch();

  const state = useSelector((state: RootState) => state.country);

  const url = `https://restcountries.eu/rest/v2/${
    name.length === 0 ? `all` : `name/${name[0]}`
  }`;

  useEffect(() => {
    dispatch(fetchCountry(url));
  }, [url, dispatch]);

  return state;
};

export default useContry;
