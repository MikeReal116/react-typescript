import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { sortCountry } from '../redux/actions';

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 200
  },
  input: {
    padding: 10
  }
}));

const Dropdown = () => {
  const [sort, setSort] = useState('');
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setSort(e.target.value as string);
    dispatch(sortCountry(e.target.value as string));
    setSort('');
  };

  return (
    <FormControl variant='filled' className={classes.formControl}>
      <InputLabel className={classes.input}>Sort Population</InputLabel>
      <Select value={sort} onChange={handleChange}>
        <MenuItem value={'asc'}>Asc</MenuItem>
        <MenuItem value={'desc'}>Desc</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
