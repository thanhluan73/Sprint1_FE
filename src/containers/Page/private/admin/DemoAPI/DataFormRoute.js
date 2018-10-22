
import asyncComponent from 'helpers/AsyncFunc';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const DataFormRoute = ({ url }) => {
  return (
    <div>
      <Switch>
        <Route
          path={url + '/:type/:id/edit'}
          component={asyncComponent(() => import('./DataForm'))}
        />
        <Route
          path={url + '/:type/:id'}
          exact={true}
          component={asyncComponent(() => import('./DataForm'))}
        />
      </Switch>
    </div>
  );
};

export default DataFormRoute;