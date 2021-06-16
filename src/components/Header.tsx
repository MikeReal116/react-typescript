import { useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import themeContext from '../context/themeContext';
import IconButton from '@material-ui/core/IconButton';

import Drawer from './Drawer';
import { searchCountry } from '../redux/actions';
import { RootState } from '../redux/reducers';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  right: {
    display: 'flex',
    alignItems: 'center'
  },
  favorite: {
    marginRight: 10
  },
  favcontainer: {
    position: 'relative'
  },
  favnum: {
    position: 'absolute',
    top: '0',
    fontSize: 14,
    color: '#f50057',
    right: 14,
    fontWeight: 700
  },
  countrylabel: {
    display: 'none'
  },
  countryinput: {
    height: 24,
    padding: 10,
    '&:focus': {
      outline: 'none'
    }
  }
}));

const Header = () => {
  const { favorite } = useSelector((state: RootState) => state.favorite);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [debounce, setDebounce] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(input);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  useEffect(() => {
    dispatch(searchCountry(debounce));
  }, [dispatch, debounce]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const theme = useContext(themeContext);
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Typography variant='h5'>Country App</Typography>
        <div>
          <label htmlFor='search-country' className={classes.countrylabel}>
            Search Country
          </label>
          <input
            id='search-country'
            aria-describedby='search-country'
            className={classes.countryinput}
            placeholder='Search country'
            onChange={inputHandler}
            value={input}
          />
        </div>
        <div className={classes.right}>
          <div className={classes.favcontainer}>
            <IconButton onClick={handleDrawerOpen}>
              <FavoriteIcon color='primary' className={classes.favorite} />
            </IconButton>
            <span className={classes.favnum}>
              {favorite.length > 0 && favorite.length}
            </span>
          </div>
          <Button
            variant='outlined'
            color='primary'
            onClick={theme.changeTheme}
          >
            {theme.theme === 'Light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </div>
      </div>
      <Drawer open={open} onSetClose={handleDrawerClose} />
    </>
  );
};

export default Header;
