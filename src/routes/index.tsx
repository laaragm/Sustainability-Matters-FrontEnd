import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Loadable } from "../shared/components/Loadable";
import { PATHS } from "./paths";

export default function Router() {
    return (
        <Routes>
            <Route path={PATHS.home.route} element={<HomePage />} />
        </Routes>
    );
}

const HomePage = Loadable(lazy(() => import("../pages/HomePage")));
