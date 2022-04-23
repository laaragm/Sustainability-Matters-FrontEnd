import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Loadable } from "../shared/components/Loadable";
import { PATHS } from "./paths";

export default function Router() {
    return (
        <Routes>
            <Route path={PATHS.home.route} element={<HomePage />} />
            <Route path={PATHS.about.route} element={<AboutUs />} />
            <Route path={PATHS.contact.route} element={<Contact />} />
            <Route path={PATHS.login.route} element={<Login />} />
            <Route path={PATHS.noEmissions.route} element={<NoEmissions />} />
            <Route path={PATHS.signUp.route} element={<SignUp />} />
            <Route path={PATHS.addEmission.route} element={<AddEmission />} />
            <Route path={PATHS.forgotPassword.route} element={<ForgotPassword />} />
            <Route path={PATHS.budget.route} element={<Budget />} />
        </Routes>
    );
}

const HomePage = Loadable(lazy(() => import("../pages/HomePage")));
const AboutUs = Loadable(lazy(() => import("../pages/AboutUs")));
const Contact = Loadable(lazy(() => import("../pages/Contact")));
const Login = Loadable(lazy(() => import("../pages/Login")));
const NoEmissions = Loadable(lazy(() => import("../pages/NoEmissions")));
const SignUp = Loadable(lazy(() => import("../pages/SignUp")))
const AddEmission = Loadable(lazy(() => import("../pages/AddEmission")));
const ForgotPassword = Loadable(lazy(() => import("../pages/ForgotPassword")));
const Budget = Loadable(lazy(() => import("../pages/Budget")));
