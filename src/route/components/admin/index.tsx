import React, { lazy } from "react";

const Home = lazy(() => import('../../../features/dashboard/admin/dashboard/index'));
const AuthPage = lazy(() => import('../../../features/Auth/layout'));
const Table = lazy(() => import('../../../layouts/Table'));
const TwoFactor = lazy(() => import('../../../features/Auth/Two_factor'));
const PropertyManagment = lazy(() => import('../../../features/dashboard/admin/PropertyManagemt/PropertyList/Layout'));

const PageNotFound = lazy(() => import('../../../ErrorPage/404'));


//Property Routes
const AddProperty = React.lazy(() => import('../../../features/dashboard/admin/PropertyManagemt/addProperty'));
const Addroom = React.lazy(() => import('../../../features/dashboard/admin/PropertyManagemt/Appointment/Layout'));

const adminRoute = [
    {
        path: '/dashboard/admin',
        component: Home,
        layout: '',
        className: '',
        is_Child: false,
    },

    {
        path: '/property/add',
        component: AddProperty,
        layout: '',
        className: '',
        is_Child: false,
    },
    {
        path: 'property/appointment',
        component: Addroom,
        layout: '',
        className: '',
        is_Child: false,
    },
    {
        path: '/admin/auth/login',
        component: AuthPage,
        layout: 'Blank',
        className: '',
        is_Child: false,
    },
    {
        path: '/',
        component: AuthPage,
        layout: 'Blank',
        className: '',
        is_Child: false,
    },
    {
        path: 'properties/managment',
        component: PropertyManagment,
        layout: '',
        className: '',
        is_Child: false,
    },
    {
        path: '/table',
        component: Table,
        layout: '',
        className: '',
        is_Child: false,
    },
    {
        path: '/auth/two-factor',
        component: TwoFactor,
        layout: 'Blank',
        className: '',
        is_Child: false,
    },
    {
        path: '*',
        component: PageNotFound,
        layout: 'Blank',
        className: '',
        is_Child: false,
    }
];



export { adminRoute };
