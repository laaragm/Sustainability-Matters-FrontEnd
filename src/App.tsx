import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
    ThemeProvider,
    StyledEngineProvider,
    CssBaseline,
} from "@mui/material";

import { LoadingScreen } from "./shared/components/LoadingScreen";
import theme from "./theme";
import Routes from "./routes";
import { ScrollToTop } from "./shared/components/ScrollToTop";
import { Header } from "./shared/components/Header";
import { MainStyle } from "./styles";

export default function App() {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <BrowserRouter>
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <ScrollToTop />
                        <Header />
                        <MainStyle>
                            <Routes />
                        </MainStyle>
                        <ToastContainer
                            position="bottom-right"
                            autoClose={3000}
                            closeOnClick
                            pauseOnHover
                        />
                    </ThemeProvider>
                </StyledEngineProvider>
            </BrowserRouter>
        </Suspense>
    );
}
