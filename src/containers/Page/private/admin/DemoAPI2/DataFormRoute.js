
import asyncComponent from 'helpers/AsyncFunc';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DataForm from './DataForm';
const DataFormRoute = ({ url,handleSubmit ,handleDelete}) => {
  return (
    <div>
      <Switch>
        <Route
          path={url + '/:id/edit'}
          // component={asyncComponent(() => import('./DataForm'))}
          render={(props) => {return (<DataForm handleDelete={handleDelete} handleSubmitEdit={handleSubmit} {...props} />)}}
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