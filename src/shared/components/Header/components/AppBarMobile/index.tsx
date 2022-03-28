import { ReactNode, useState } from "react";
import { IconButton, Stack, SwipeableDrawer, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { AccountPopover } from "../AccountPopover";
import { menuItems } from "../../menuItems";
import { CustomizedButton } from "../../../CustomizedButton";

type AppBarMobileProps = {
    appTitle: ReactNode;
    drawerOpen: boolean;
    onDrawerOpen: VoidFunction;
    onDrawerClose: VoidFunction;
    onButtonClick: () => void;
    onMenuItemButtonClick: (path: string) => void;
};

export function AppBarMobile({
    appTitle,
    drawerOpen,
    onDrawerOpen,
    onDrawerClose,
    onButtonClick,
    onMenuItemButtonClick,
}: AppBarMobileProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // TODO: Change this as soon as we have the authentication in place

    const handleOpen = () => onDrawerOpen();
    const handleClose = () => onDrawerClose();

    const handleMenuItemButtonClick = (path: string) => {
        onMenuItemButtonClick(path);
    };

    // TODO: Implement it as soon as the backend is in place
    const handleLogin = () => {
        setIsAuthenticated((previousState) => !previousState);
        onButtonClick();
    };

    // TODO: Implement it as soon as the backend is in place
    const handleSignUp = () => {
        setIsAuthenticated((previousState) => !previousState);
        onButtonClick();
    };

    // TODO: Implement it as soon as the backend is in place
    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    const getMenuItems = () => {
        return menuItems.map((item) => {
            return (
                <CustomizedButton
                    color="success"
                    variant="text"
                    key={item.route}
                    onClick={() => handleMenuItemButtonClick(item.route)}
                >
                    {item.name}
                </CustomizedButton>
            );
        });
    };

    const itemsList = () => (
        <div role="presentation" onClick={handleClose} onKeyDown={handleClose}>
            <Stack direction="column" spacing={1}>
                {appTitle}
                <Stack direction="column" spacing={2}>
                    {getMenuItems()}
                </Stack>
                <Stack
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    {isAuthenticated ? (
                        <Stack
                            direction="column"
                            spacing={1}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <AccountPopover onLogout={handleLogout} />
                        </Stack>
                    ) : (
                        <Stack
                            direction="column"
                            spacing={1}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <CustomizedButton
                                color="secondary"
                                variant="text"
                                onClick={handleLogin}
                            >
                                Login
                            </CustomizedButton>
                            <CustomizedButton
                                color="secondary"
                                borderRadius="1.5rem"
                                onClick={handleSignUp}
                            >
                                Sign up
                            </CustomizedButton>
                        </Stack>
                    )}
                </Stack>
            </Stack>
        </div>
    );

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
                onClick={handleOpen}
            >
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                anchor="right"
                open={drawerOpen}
                onClose={handleClose}
                onOpen={handleOpen}
            >
                <div>{itemsList()}</div>
            </SwipeableDrawer>
        </Toolbar>
    );
}
