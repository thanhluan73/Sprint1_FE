
import asyncComponent from 'helpers/AsyncFunc';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DataForm from './DataForm';
const TableDataRoute = ({ url,handleSubmit }) => {
  return (
    <div>
      <Switch>
        <Route
          path={url + '/add-new'}
          // component={asyncComponent(() => import('./DataForm'))}
          render={(props) => {return (<DataForm handleSubmitAdd={handleSubmit} {...props} />)}}
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