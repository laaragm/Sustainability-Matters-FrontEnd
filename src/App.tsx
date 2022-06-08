import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import toast, { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "react-query/devtools";
import {
    ThemeProvider,
    StyledEngineProvider,
    CssBaseline,
    Stack,
} from "@mui/material";

import { LoadingScreen } from "./shared/components/LoadingScreen";
import theme from "./theme";
import Routes from "./routes";
import { ScrollToTop } from "./shared/components/ScrollToTop";
import { Header } from "./shared/components/Header";
import { makeServer } from "./services/mirage";
import { queryClient } from "./services/queryClient";
import { AuthContextProvider } from "./contexts/AuthContext";
import { MainStyle } from "./styles";

if (process.env.NODE_ENV === "development") {
    // makeServer();
}

export default function App() {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <AuthContextProvider>
                        <StyledEngineProvider injectFirst>
                            <ThemeProvider theme={theme}>
                                <CssBaseline />
                                <ScrollToTop />
                                <Header />
                                <MainStyle>
                                    <Routes />
                                    <Stack
                                        sx={{
                                            position: "absolute",
                                            right: 0,
                                            bottom: 0,
                                        }}
                                    >
                                        <Toaster position="bottom-right" />
                                    </Stack>
                                </MainStyle>
                            </ThemeProvider>
                        </StyledEngineProvider>
                    </AuthContextProvider>
                </BrowserRouter>

                <ReactQueryDevtools />
            </QueryClientProvider>
        </Suspense>
    );
}
