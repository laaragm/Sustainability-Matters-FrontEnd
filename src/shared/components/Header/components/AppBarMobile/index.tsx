import { ReactNode } from "react";
import { IconButton, SwipeableDrawer, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { ToolbarItems } from "../ToolbarItems";

type AppBarMobileProps = {
    isAuthenticated: boolean;
    appTitle: ReactNode;
    drawerOpen: boolean;
    onDrawerOpen: VoidFunction;
    onDrawerClose: VoidFunction;
    onMenuItemButtonClick: (path: string) => void;
    onLogin: () => void;
    onSignUp: () => void;
    onLogout: () => void;
};

export function AppBarMobile({
    isAuthenticated,
    appTitle,
    drawerOpen,
    onDrawerOpen,
    onDrawerClose,
    onLogin,
    onSignUp,
    onLogout,
    onMenuItemButtonClick,
}: AppBarMobileProps) {
    const handleDrawerOpen = () => {
        onDrawerOpen();
    };

    const handleDrawerClose = () => {
        onDrawerClose();
    };

    const handleMenuItemButtonClick = (path: string) => {
        onMenuItemButtonClick(path);
    };

    const handleLogin = () => {
        onLogin();
    };

    const handleSignUp = () => {
        onSignUp();
    };

    const handleLogout = () => {
        onLogout();
    };

    return (
        <Toolbar
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <div>{appTitle}</div>
            <IconButton
                edge="start"
                aria-label="menu"
                aria-haspopup={true}
                onClick={handleDrawerOpen}
            >
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerClose}
                onOpen={handleDrawerOpen}
            >
                <ToolbarItems
                    isAuthenticated={isAuthenticated}
                    onDrawerClose={handleDrawerClose}
                    onLogin={handleLogin}
                    onSignUp={handleSignUp}
                    onLogout={handleLogout}
                    onMenuItemButtonClick={handleMenuItemButtonClick}
                />
            </SwipeableDrawer>
        </Toolbar>
    );
}
