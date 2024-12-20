import { lazy } from "react";

const AuthPage = lazy(() => import('../../../features/Auth/layout'));
const TwoFactor = lazy(() => import('../../../features/Auth/Two_factor'));

class RouteMapping {
    routes = [

        {
            path: '/admin/auth/login',
            component: AuthPage,
            layout: 'Blank',
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
