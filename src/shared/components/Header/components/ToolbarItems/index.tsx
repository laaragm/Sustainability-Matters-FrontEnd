import { Stack } from "@mui/material";
import { menuItems } from "../../menuItems";

import { AccountPopover } from "../AccountPopover";
import { StyledToolbarContainer } from "../AppBarMobile/styles";
import { CustomizedButton } from "./../../../CustomizedButton/index";

interface ToolbarItemsProps {
    isAuthenticated: boolean;
    onLogin: () => void;
    onSignUp: () => void;
    onLogout: () => void;
    onDrawerClose: () => void;
    onMenuItemButtonClick: (path: string) => void;
}

export function ToolbarItems({
    isAuthenticated,
    onDrawerClose,
    onLogin,
    onSignUp,
    onLogout,
    onMenuItemButtonClick,
}: ToolbarItemsProps) {
    const handleClose = () => {
        onDrawerClose();
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

    const handleMenuItemButtonClick = (path: string) => {
        onMenuItemButtonClick(path);
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

    return (
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
}
