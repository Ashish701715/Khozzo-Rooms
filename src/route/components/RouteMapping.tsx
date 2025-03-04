import { lazy, Suspense } from "react";
import { ManagerRoutes } from "./manager";
import { adminRoute } from "./admin";


class RouteMapping {
    routes = [
        ...ManagerRoutes , ...adminRoute
    ];

    renderComponent(Component: any) {
        return (
            <Suspense fallback={<div>loading page...</div>}>
                <Component />
            </Suspense>
        );
    }
}

export default RouteMapping;
