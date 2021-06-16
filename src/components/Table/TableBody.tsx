import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import { addFavorite } from '../../redux/actions';
import { Country } from '../../redux/Types/countryType';

const useStyles = makeStyles(() => ({
  image: {
    width: '200px'
  },
  row: {
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: '35%'
  },
  countryname: {
    cursor: 'pointer'
  }
}));

type TableProps = {
  countries: Country[];
};

const TableBodyEl = ({ countries }: TableProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCountryClick = (country: Country) => {
    history.push(`/country/${country.name}`);
  };
  const classes = useStyles();

  const addCountryToFavorite = (country: Country) =>
    dispatch(addFavorite(country));

  return (
    <TableBody>
      {countries.map((el) => (
        <TableRow key={el.name} className={classes.row}>
          <TableCell
            width='20%'
            className={classes.countryname}
            onClick={() => handleCountryClick(el)}
          >
            {el.name}
          </TableCell>
          <TableCell width='20%'>
            <img src={el.flag} alt='flag' className={classes.image} />
          </TableCell>

          <TableCell width='20%'>{el.capital}</TableCell>
          <TableCell width='20%'>{el.region}</TableCell>
          <TableCell width='20%'>{el.population}</TableCell>
          <TableCell>
            <IconButton
              className={classes.icon}
              onClick={() => addCountryToFavorite(el)}
            >
              <AddIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableBodyEl;
