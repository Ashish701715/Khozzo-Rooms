import RouteMapping from "./components/RouteMapping";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const routeMapping = new RouteMapping();
import Layout from './../layouts/Layout';
function AppRouter() {
    return (
        <Layout>

            <Card>
                <CardHeader>
                    <CardTitle className="text-[25px] font-bold">Welcome back!</CardTitle>
                    <CardDescription>Here's a list of your tasks for this month!</CardDescription>
                </CardHeader>
                <CardContent>
                    <Router>
                        <Routes>
                            {routeMapping.routes.map(({ path, component: Component }, index) => (
                                <Route
                                    key={index}
                                    path={path}
                                    element={routeMapping.renderComponent(Component)}
                                />
                            ))}
                        </Routes>
                    </Router>
                </CardContent>
            </Card>
        </Layout>
    );
}

export default AppRouter;
