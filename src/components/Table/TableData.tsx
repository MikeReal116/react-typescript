import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from './TableHead';
import TableBody from './TableBody';
import useContry from '../../custom-hooks/useCountry';

const TableData = () => {
  const { error, loading, filteredCountries } = useContry();

  return (
    <div>
      {loading && !error ? (
        <p>Loading...</p>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead />
            <TableBody countries={filteredCountries} />
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default TableData;
