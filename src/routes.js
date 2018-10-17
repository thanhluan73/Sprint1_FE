import React from 'react';
import Login from 'pages/login/Login';
import Company from 'pages/manager/company/Company';
export const adminRoutes = [
    {
        path: '/companys',
        exact: true,
        main: () => <Company/>
    },
   
];
export const publicRoutes=[
    {
        path: '/login',
        exact: true,
        main: () => <Login />
    },
]

