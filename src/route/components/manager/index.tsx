import { lazy } from "react";
const Home = lazy(() => import('../../../pages/manager/dashboard/admin/dashboard/index'))
const AuthPage = lazy(() => import('../../../pages/Auth/layout'));
const Table = lazy(() => import('../../../layouts/Table'));
const TwoFactor = lazy(() => import('../../../pages/Auth/Two_factor'));
const Appointment = lazy(() => import('../../../pages/manager/Appointment/appointment'));
const Tenanat = lazy(() => import('../../../pages/manager/Tenants/tenants'));
const PropertyManagment = lazy(() => import('../../../pages/manager/Properties/PropertyList/Layout'));
const AddProperty = lazy(() => import('../../../pages/manager/Properties/MergeProperty'));
const RoomList = lazy(() => import('../../../pages/manager/Appointment/Layout'));
const Addroom = lazy(() => import('../../../pages/manager/Appointment/addroomform'));
const TicketList = lazy(() => import('../../../pages/manager/Ticket/Layout'));
const TenanatForm =  lazy(() => import('../../../pages/manager/Tenants/addTenants'));

const  ManagerRoutes =  [
   
        {
            path: '/dashboard/admin',
            component: Home,
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
            path: '/dashboard/manager',
            component: Home,
            layout: '',
            className: '',
            is_Child: false,
        },
        {
            path: '/tenant',
            component: Tenanat,
            layout: '',
            className: '',
            is_Child: false,
        },
        {
            path: '/add/tenant',
            component: TenanatForm,
            layout: '',
            className: '',
            is_Child: false,
        },
        {
            path: '/appointment',
            component: Appointment,
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
    ];

export  {ManagerRoutes};
