import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import {
    ThemeProvider,
    StyledEngineProvider,
    CssBaseline,
} from "@mui/material";

import { LoadingScreen } from "./shared/components/LoadingScreen";
import theme from "./theme";
import Routes from "./routes";

export default function App() {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <BrowserRouter>
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Routes />
                    </ThemeProvider>
                </StyledEngineProvider>
            </BrowserRouter>
        </Suspense>
    );
}
