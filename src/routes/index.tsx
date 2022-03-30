import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Loadable } from "../shared/components/Loadable";
import { PATHS } from "./paths";

export default function Router() {
    return (
        <Routes>
            <Route path={PATHS.home.route} element={<HomePage />} />
            <Route path={PATHS.about.route} element={<AboutUs />} />
        </Routes>
    );
}

const HomePage = Loadable(lazy(() => import("../pages/HomePage")));
const AboutUs = Loadable(lazy(() => import("../pages/AboutUs")));
