import { lazy, Suspense } from "react";
import { adminRoute } from "./admin";
import { ManagerRoute } from "./manager/index"

class RouteMapping {
    routes = [
        ...adminRoute , ...ManagerRoute
    ];

    renderComponent(Component: any) {
        return (
            <Suspense fallback={<div>laoding page...</div>}>
                <Component />
            </Suspense>
        );
    }
}

export default RouteMapping;
