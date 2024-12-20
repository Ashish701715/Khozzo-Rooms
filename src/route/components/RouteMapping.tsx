import { lazy, Suspense } from "react";
import { adminRoute } from "./admin";

class RouteMapping {
    routes = [
        ...adminRoute
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
