import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { Loadable } from "../shared/components/Loadable";
import { PATHS } from "./paths";

export default function Router() {
    const { token } = useAuth();
    const isAuthenticated = token?.length > 0;

    return (
        <Routes>
            <Route path={PATHS.home.route} element={<HomePage />} />
            <Route path={PATHS.about.route} element={<AboutUs />} />
            <Route path={PATHS.contact.route} element={<Contact />} />
            <Route path={PATHS.login.route} element={<Login />} />
            <Route
                path={PATHS.noEmissions.route}
                element={
                    isAuthenticated ? (
                        <NoEmissions />
                    ) : (
                        <Navigate to={PATHS.noPermissions.route} replace />
                    )
                }
            />
            <Route path={PATHS.signUp.route} element={<SignUp />} />
            <Route
                path={PATHS.addEmission.route}
                element={
                    isAuthenticated ? (
                        <AddEmission />
                    ) : (
                        <Navigate to={PATHS.noPermissions.route} replace />
                    )
                }
            />
            <Route
                path={PATHS.emissions.route}
                element={
                    isAuthenticated ? (
                        <Emissions />
                    ) : (
                        <Navigate to={PATHS.noPermissions.route} replace />
                    )
                }
            />
            <Route
                path={PATHS.emission.route}
                element={
                    isAuthenticated ? (
                        <Emission />
                    ) : (
                        <Navigate to={PATHS.noPermissions.route} replace />
                    )
                }
            />
            <Route
                path={PATHS.forgotPassword.route}
                element={<ForgotPassword />}
            />
            <Route
                path={PATHS.budget.route}
                element={
                    isAuthenticated ? (
                        <Budget />
                    ) : (
                        <Navigate to={PATHS.noPermissions.route} replace />
                    )
                }
            />
            <Route
                path={PATHS.changePassword.route}
                element={<ChangePassword />}
            />
            <Route
                path={PATHS.noPermissions.route}
                element={<NoPermissions />}
            />
        </Routes>
    );
}

const HomePage = Loadable(lazy(() => import("../pages/HomePage")));
const AboutUs = Loadable(lazy(() => import("../pages/AboutUs")));
const Contact = Loadable(lazy(() => import("../pages/Contact")));
const Login = Loadable(lazy(() => import("../pages/Login")));
const NoEmissions = Loadable(lazy(() => import("../pages/NoEmissions")));
const SignUp = Loadable(lazy(() => import("../pages/SignUp")));
const AddEmission = Loadable(lazy(() => import("../pages/AddEmission")));
const ForgotPassword = Loadable(lazy(() => import("../pages/ForgotPassword")));
const Budget = Loadable(lazy(() => import("../pages/Budget")));
const Emissions = Loadable(lazy(() => import("../pages/Emissions")));
const Emission = Loadable(lazy(() => import("../pages/Emission")));
const ChangePassword = Loadable(lazy(() => import("../pages/ChangePassword")));
const NoPermissions = Loadable(lazy(() => import("../pages/NoPermissions")));
