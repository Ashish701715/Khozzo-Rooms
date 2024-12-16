import RouteMapping from "./components/RouteMapping";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Layout from "./../layouts/Layout";

const routeMapping = new RouteMapping();

function AppRouter() {
    return (
        <Router>
            <Routes>
                {routeMapping.routes.map(({ path, component: Component, layout }, index) => {
                    const Page = routeMapping.renderComponent(Component);
                    return (
                        <Route
                            key={index}
                            path={path}
                            element={
                                layout === "Blank" ? (
                                    Page
                                ) : (
                                    <Layout>
                                        {Page}
                                    </Layout>
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
