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

export function Header() {
    let navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => setDrawerOpen(true);
    const handleDrawerClose = () => setDrawerOpen(false);

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

    const handleButtonClick = () => {
        // TODO: Implement login functionality as soon as possible
    };

    return (
        <AppBar elevation={0}>
            <Stack pl={5} pr={5} pt={1}>
                {isMobile ? (
                    <>
                        <AppBarMobile
                            appTitle={appTitle}
                            onDrawerClose={handleDrawerClose}
                            onDrawerOpen={handleDrawerOpen}
                            drawerOpen={drawerOpen}
                            onButtonClick={handleButtonClick}
                            onMenuItemButtonClick={handleMenuItemButtonClick}
                        />
                        <Divider />
                    </>
                ) : (
                    <AppBarDesktop
                        appTitle={appTitle}
                        onButtonClick={handleButtonClick}
                        onMenuItemButtonClick={handleMenuItemButtonClick}
                    />
                )}
            </Stack>
        </AppBar>
    );
}
