import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    AppBar,
    Box,
    Divider,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";

import { AppBarDesktop } from "./components/AppBarDesktop";
import { AppBarMobile } from "./components/AppBarMobile";
import { PATHS } from "../../../routes/paths";

export function Header() {
    let navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // TODO: Change this as soon as we have the authentication in place

    const handleDrawerOpen = () => setDrawerOpen(true);
    const handleDrawerClose = () => setDrawerOpen(false);

    const handleLogin = () => {
        navigate(PATHS.login.route);
    };

    // TODO: Implement it as soon as the backend is in place
    const handleSignUp = () => {
        navigate(PATHS.signUp.route);
    };

    // TODO: Implement it as soon as the backend is in place
    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    const handleClickOnTitle = () => {
        navigate("/");
    };

    const handleMenuItemButtonClick = (path: string) => {
        navigate(path);
    };

    const appTitle = (
        <Typography
            variant="h6"
            component="h6"
            color={theme.palette.text.primary}
        >
            <Box fontWeight="fontWeightBold" onClick={handleClickOnTitle}>
                Sustainability Matters
            </Box>
        </Typography>
    );

    return (
        <AppBar elevation={0}>
            {isMobile ? (
                <Stack>
                    <AppBarMobile
                        isAuthenticated={isAuthenticated}
                        appTitle={appTitle}
                        onDrawerClose={handleDrawerClose}
                        onDrawerOpen={handleDrawerOpen}
                        drawerOpen={drawerOpen}
                        onLogin={handleLogin}
                        onSignUp={handleSignUp}
                        onLogout={handleLogout}
                        onMenuItemButtonClick={handleMenuItemButtonClick}
                    />
                    <Divider />
                </Stack>
            ) : (
                <Stack pl={5} pr={5} pt={1}>
                    <AppBarDesktop
                        isAuthenticated={isAuthenticated}
                        appTitle={appTitle}
                        onMenuItemButtonClick={handleMenuItemButtonClick}
                        onLogin={handleLogin}
                        onSignUp={handleSignUp}
                        onLogout={handleLogout}
                    />
                </Stack>
            )}
        </AppBar>
    );
}
