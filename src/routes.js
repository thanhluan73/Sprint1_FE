import React from 'react';
import Login from 'pages/login/Login';
import Company from 'pages/manager/company/Company';
import ForgotPassword from './pages/forgot-password/ForgotPassword';
import RequestPassword from './pages/request-password/RequestPassword';
import RequestRegister from './pages/request-register/RequestRegister';
import Users from 'pages/manager/user/Users';
import Role from 'pages/manager/role/ListRole';
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
    {
        path: '/list-role',
        exact: true,
        main: () => <Role/>
    },
   
];
export const publicRoutes=[
    {
        path: '/login',
        exact: true,
        main: () => <Login />
    },
    {
        path: '/forgotpassword',
        exact: true,
        main: () => <ForgotPassword/>
    },
    {
        path: '/requestpassword',
        exact: true,
        main: () => <RequestPassword />
    },
    {
        path: '/requestregister',
        exact: true,
        main: () => <RequestRegister />
    }
]

