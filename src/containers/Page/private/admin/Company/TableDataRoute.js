
import asyncComponent from 'helpers/AsyncFunc';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const TableDataRoute = ({ url }) => {
  return (
    <div>
      <Switch>
        <Route
          path={url + '/add-new'}
          component={asyncComponent(() => import('./DataForm'))}
        />
        <Route
          path={url + '/:type'}
          component={asyncComponent(() => import('./TableData'))}
        />
      </Switch>
    </div>
  );
};

export default TableDataRoute;