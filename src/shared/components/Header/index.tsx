import { useEffect, useState } from "react";
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
import { useAuth } from "../../../hooks/useAuth";

export function Header() {
    const { token, logout } = useAuth();
    let navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(token?.length > 0);

    const handleDrawerOpen = () => setDrawerOpen(true);
    const handleDrawerClose = () => setDrawerOpen(false);

    useEffect(() => {
        if (token?.length > 0) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [token]);

    const handleLogin = () => {
        navigate(PATHS.login.route);
    };

    const handleSignUp = () => {
        navigate(PATHS.signUp.route);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        logout();
        navigate(PATHS.login.route);
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
            <Box
                fontWeight="fontWeightBold"
                onClick={handleClickOnTitle}
                sx={{ cursor: "pointer" }}
            >
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
