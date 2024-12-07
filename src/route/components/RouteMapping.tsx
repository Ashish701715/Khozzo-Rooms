import { lazy, Suspense } from "react";

const Home = lazy(() => import('../../App'));
const AuthPage = lazy(() => import('../../features/Auth/layout'));
const Table = lazy(() => import('../../layouts/Table'));
class RouteMapping {
    routes = [
        {
            path: '/',
            component: Home,
            layout: 'Blank',
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
            layout: 'Blank',
            className: '',
            is_Child: false,
        }
    ];

    renderComponent(Component: any) {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Component />
            </Suspense>
        );
    }
}

export default RouteMapping;
