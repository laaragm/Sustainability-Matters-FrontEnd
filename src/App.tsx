import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "react-query/devtools";
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
import { makeServer } from "./services/mirage";
import { queryClient } from "./services/queryClient";
import { MainStyle } from "./styles";

if (process.env.NODE_ENV === "development") {
    makeServer();
}

export default function App() {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <QueryClientProvider client={queryClient}>
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

                <ReactQueryDevtools />
            </QueryClientProvider>
        </Suspense>
    );
}
