import React from 'react';

import TableData from './Table/TableData';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Tab from './Tabs';
import Countrydetail from './Countrydetail';

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Tab />
            <TableData />
          </Route>
          <Route path='/country/:countryname' exact>
            {' '}
            <Countrydetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
