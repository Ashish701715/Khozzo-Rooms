import RouteMapping from "./components/RouteMapping";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManagerLayout from "../layouts/manager/Layout";
import AdminLayout from "../layouts/admin/LayoutAdmin";

const routeMapping = new RouteMapping();

function AppRouter() {
    return (
        <Router>
            <Routes>
                {routeMapping.routes.map(({ path, component: Component, layout }, index) => {
                    const Page = routeMapping.renderComponent(Component);

                    let SelectedLayout = ManagerLayout;
                    if (layout === "RootLayoutAdmin") {
                        SelectedLayout = AdminLayout;
                    }

                    return (
                        <Route
                            key={index}
                            path={path}
                            element={
                                layout === "Blank" ? (
                                    Page
                                ) : (
                                    <SelectedLayout>{Page}</SelectedLayout>
                                )
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default AppRouter;
