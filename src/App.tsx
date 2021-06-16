import { useContext } from 'react';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import { ThemeProvider, Container } from '@material-ui/core';
import Layout from './components/Layout';
import themeContext from './context/themeContext';

import './App.css';

function App() {
  const { theme } = useContext(themeContext);
  const materialtheme = createMuiTheme({
    palette: { type: theme === 'Light' ? 'light' : 'dark' }
  });
  return (
    <ThemeProvider theme={materialtheme}>
      <Container>
        <Layout />
      </Container>
    </ThemeProvider>
  );
}

export default App;
