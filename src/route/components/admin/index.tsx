import React, { lazy } from "react";

<<<<<<< HEAD
const Home = lazy(() => import('../../../features/dashboard/admin/dashboard/index'));
const AuthPage = lazy(() => import('../../../features/Auth/layout'));
const Table = lazy(() => import('../../../layouts/Table'));
const TwoFactor = lazy(() => import('../../../features/Auth/Two_factor'));
const PropertyManagment = lazy(() => import('../../../features/dashboard/admin/PropertyManagemt/PropertyList/Layout'));

const PageNotFound = lazy(() => import('../../../ErrorPage/404'));


//Property Routes
const AddProperty = React.lazy(() => import('../../../features/dashboard/admin/PropertyManagemt/addProperty'));
const RoomList = React.lazy(() => import('../../../features/dashboard/admin/PropertyManagemt/Appointment/Layout'));
const Addroom = React.lazy(() => import('../../../features/dashboard/admin/PropertyManagemt/Appointment/addroomform'));
const TicketList = React.lazy(() => import('../../../features/dashboard/admin/PropertyManagemt/Ticket/Layout'));
=======
const Home = lazy(() => import('../../../pages/admin/dashboard/admin/dashboard/index'));
const Manager = lazy(()=>import ('../../../pages/admin/manager/managerList'))
const AddManager = lazy(()=>import ('../../../pages/admin/manager/addManager'))
const Payment = lazy(()=>import ('../../../pages/admin/payment/paymentList'))
const Branch = lazy (()=>import('../../../pages/admin/settings/branches'))
const Property = lazy (()=>import('../../../pages/admin/properties/Layout'))


const RootLayoutAdmin = lazy(() => import("../../../layouts/admin/LayoutAdmin"));

// const AuthPage = lazy(() => import('../../../pages/Auth/layout'));
// const Table = lazy(() => import('../../../layouts/Table'));
// const TwoFactor = lazy(() => import('../../../pages/Auth/Two_factor'));
// const PropertyManagment = lazy(() => import('../../../pages/manager/Properties/PropertyList/Layout'));

// const PageNotFound = lazy(() => import('../../../ErrorPage/404'));
// const Appointment = lazy(() => import('../../../pages/manager/Appointment/appointment'));
// const Tenanat = lazy(() => import('../../../pages/manager/Tenants/tenants'));


// //Property Routes
// const AddProperty = React.lazy(() => import('../../../pages/manager/Properties/MergeProperty'));
// const RoomList = React.lazy(() => import('../../../pages/manager/Appointment/Layout'));
// const Addroom = React.lazy(() => import('../../../pages/manager/Appointment/addroomform'));
// const TicketList = React.lazy(() => import('../../../pages/manager/Ticket/Layout'));

>>>>>>> db310847952ae7f08b9e78f4f048acdecd0ed748

const adminRoute = [
    {
        path: '/dashboard/admin',
        component: Home,
        layout: 'RootLayout',
        className: '',
        is_Child: false,
    },
    {
        path: '/dashboard/admin',
        component: Home,
        layout: 'RootLayoutAdmin', // ✅ Ensure this matches the correct layout name
        className: '',
        is_Child: false,
    },
    {
<<<<<<< HEAD
        path: 'property/roomlisting',
        component: RoomList,
        layout: '',
        className: '',
        is_Child: false,
    },
    {
        path: 'property/form',
        component: Addroom,
        layout: '',
        className: '',
        is_Child: false,
    },
    {
        path: 'property/Ticket',
        component: TicketList,
        layout: '',
        className: '',
        is_Child: false,
    },
    {
        path: '/admin/auth/login',
        component: AuthPage,
        layout: 'Blank',
=======
        path: '/addManager',
        component: AddManager,
        layout: 'RootLayoutAdmin',
>>>>>>> db310847952ae7f08b9e78f4f048acdecd0ed748
        className: '',
        is_Child: false,
    },
    {
        path: '/paymentList',
        component: Payment,
        layout: 'RootLayoutAdmin',
        className: '',
        is_Child: false,
    },
    
    {
        path: '/settings/branches',
        component: Branch,
        layout: 'RootLayoutAdmin',

    },
    {
        path: '/properties',
        component: Property,
        layout: 'RootLayoutAdmin',

    },
//     {
//         path: 'property/form',
//         component: Addroom,
//         layout: '',
//         className: '',
//         is_Child: false,
//     },
//     {
//         path: 'property/Ticket',
//         component: TicketList,
//         layout: '',
//         className: '',
//         is_Child: false,
//     },
//     {
//         path: '/admin/auth/login',
//         component: AuthPage,
//         layout: 'Blank',
//         className: '',
//         is_Child: false,
//     },
//     {
//         path: '/',
//         component: AuthPage,
//         layout: 'Blank',
//         className: '',
//         is_Child: false,
//     },
//     {
//         path: 'properties/managment',
//         component: PropertyManagment,
//         layout: '',
//         className: '',
//         is_Child: false,
//     },
//     {
//         path: '/table',
//         component: Table,
//         layout: '',
//         className: '',
//         is_Child: false,
//     },
//     {
//         path: '/auth/two-factor',
//         component: TwoFactor,
//         layout: 'Blank',
//         className: '',
//         is_Child: false,
//     },
//     {
//         path: '*',
//         component: PageNotFound,
//         layout: 'Blank',
//         className: '',
//         is_Child: false,
//     }
];



export { adminRoute };
