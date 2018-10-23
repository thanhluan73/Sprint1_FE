import React, { Component } from "react";
import { Route } from "react-router-dom";
import asyncComponent from 'helpers/AsyncFunc';

const adminRoutes = [
  {
    path: "",
    exact: true,
    component: asyncComponent(() => import("containers/Page/private/admin/dashboard"))
  },
  {
    path: 'account',
    exact: false,
    component: asyncComponent(() => import("containers/Page/private/admin/Account"))
  },
  {
    path: 'demoapi',
    exact: false,
    component: asyncComponent(() => import("containers/Page/private/admin/DemoAPI"))
  },
  {
    path: 'demoapi2',
    exact: false,
    component: asyncComponent(() => import("containers/Page/private/admin/DemoAPI2"))
  },
  {
    path: 'anh-tu',
    exact: false,
    component: asyncComponent(() => import("containers/Page/private/admin/User"))
  },
  {
    path: 'company',
    exact: false,
    component: asyncComponent(() => import("containers/Page/private/admin/Company"))
  },
];

class AppRouter extends Component { 
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {adminRoutes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={path}
              path={`${url}/${path}`}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

export default AppRouter;
