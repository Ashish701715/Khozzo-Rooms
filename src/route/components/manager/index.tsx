import { lazy } from "react";

const Home = lazy(() => import('../../../App'));
const AuthPage = lazy(() => import('../../../features/Auth/layout'));
const Table = lazy(() => import('../../../layouts/Table'));
const TwoFactor = lazy(() => import('../../../features/Auth/Two_factor'));

class RouteMapping {
    routes = [
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
            path: '/auth/two-factor/:client_id',
            component: TwoFactor,
            layout: 'Blank',
            className: '',
            is_Child: false,
        }
    ];

}

export default RouteMapping;
