import { ReactNode } from "react";
import { IconButton, Stack, SwipeableDrawer, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { AccountPopover } from "../AccountPopover";
import { menuItems } from "../../menuItems";
import { CustomizedButton } from "../../../CustomizedButton";
import { StyledToolbarContainer } from "./styles";

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
    const handleOpen = () => onDrawerOpen();
    const handleClose = () => onDrawerClose();

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
        <StyledToolbarContainer
            role="presentation"
            onClick={handleClose}
            onKeyDown={handleClose}
        >
            <Stack
                direction="column"
                spacing={1}
                p={3}
                height="100%"
                width="100%"
            >
                {isAuthenticated && (
                    <Stack
                        direction="column"
                        spacing={1}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <AccountPopover onLogout={handleLogout} />
                    </Stack>
                )}
                <Stack
                    direction="column"
                    spacing={2}
                    sx={{
                        position: isAuthenticated ? "absolute" : "",
                        top: isAuthenticated ? "30%" : "",
                        left: isAuthenticated ? "30%" : "",
                    }}
                >
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
                            spacing={2}
                            justifyContent="flex-end"
                            alignItems="center"
                            mb={3}
                            sx={{ position: "absolute", bottom: 0 }}
                        >
                            <CustomizedButton
                                color="secondary"
                                borderRadius="1.5rem"
                                onClick={handleLogout}
                            >
                                Logout
                            </CustomizedButton>
                        </Stack>
                    ) : (
                        <Stack
                            direction="column"
                            spacing={2}
                            justifyContent="center"
                            alignItems="center"
                            mb={3}
                            sx={{ position: "absolute", bottom: 0 }}
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
        </StyledToolbarContainer>
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
                {itemsList()}
            </SwipeableDrawer>
        </Toolbar>
    );
}
