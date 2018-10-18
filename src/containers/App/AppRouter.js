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
    path: 'company',
    exact: false,
    component: asyncComponent(() => import("containers/Page/private/admin/Company"))
  },
  { 
    path: 'users',
    exact: false,
    component: asyncComponent(() => import("pages/manager/user/Users"))
  },
  { 
    path: 'list-role',
    exact: false, 
    component: asyncComponent(() => import("pages/manager/role/ListRole"))
  },
  // {
  //   path: "blankPage",
  //   component: asyncComponent(() => import("../blankPage"))
  // }
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
