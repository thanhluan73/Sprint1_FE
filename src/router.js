import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import App from './containers/App/App';
import asyncComponent from './helpers/AsyncFunc';
import { frontPageConfig } from './settings/index';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location }
            }}
          />
        )
    }
  />
);     
const PublicRoutes = ({ history, isLoggedIn='true' }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route
          exact
          path={'/test-form'}
          component={asyncComponent(() => import('./containers/Page/test'))}
        />

        <Route
          exact
          path={'/'}
          component={asyncComponent(() => import('./containers/Page/private/account/signin'))}
        />
        <Route    
          exact
          path={'/signin'}
          component={asyncComponent(() => import('./containers/Page/private/account/signin'))}
        />
        <Route
          exact
          path={'/signup'}
          component={asyncComponent(() => import('containers/Page/private/account/signup'))}
        />
        <Route
          exact
          path={'/forgotpassword'}
          component={asyncComponent(() => import('containers/Page/private/account/forgotPassword'))}
        />
        <Route
          exact
          path={'/resetpassword'}
          component={asyncComponent(() => import('./containers/Page/private/account/resetPassword'))}
        />
        <Route
          path={`${frontPageConfig.baseUrl}`}
          component={asyncComponent(() => import('./containers/Page/public'))}
        />
        <Route
          exact
          path={'/confirmregister'}
          component={asyncComponent(() => import('./containers/Page/private/account/confirmRegister'))}
        />
        <Route
          exact
          path={'/requestconfirm'}
          component={asyncComponent(() => import('./containers/Page/private/account/requestConfirm'))}
        />
        <RestrictedRoute
          path="/dashboard"
          component={App}
          isLoggedIn={true} // chuyen ve true de by pass login
        />
      </div>
    </ConnectedRouter>
  );
};

export default PublicRoutes;
// export default connect(
// //   state => ({
// //   isLoggedIn: state.Auth.idToken !== null
// // })
// null,null
// )(PublicRoutes);
