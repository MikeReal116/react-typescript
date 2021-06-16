import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import themeContext from '../../context/themeContext';

type Theme = {
  theme: string;
};
const useStyles = makeStyles(() => ({
  rowhead: {
    backgroundColor: (color: Theme) => {
      if (color.theme === 'Light') {
        return "'#f4f4fb'";
      } else {
        return '#020001';
      }
    }
  }
}));

const TableHeader = () => {
  const theme = useContext(themeContext);

  const classes = useStyles(theme);

  const tableHead = [
    'Country',
    'Flag',
    'Capital',
    'Region',
    'Population',
    'Add'
  ];
  return (
    <TableHead className={classes.rowhead}>
      <TableRow>
        {tableHead.map((item) => (
          <TableCell key={item}>{item}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
