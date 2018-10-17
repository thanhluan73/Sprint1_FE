import React from 'react';
import Login from 'pages/login/Login';
import Company from 'pages/manager/company/Company';
import Users from 'pages/manager/user/Users';
export const adminRoutes = [
    {
        path: '/companys',
        exact: true,
        main: () => <Company/>
    },
    {
        path: '/users',
        exact: true,
        main: () => <Users/>
    },
   
];
export const publicRoutes=[
    {
        path: '/login',
        exact: true,
        main: () => <Login />
    },
]

