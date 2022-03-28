import { ReactNode, useState } from "react";
import { Stack } from "@mui/material";

import { menuItems } from "../../menuItems";
import { CustomizedButton } from "../../../CustomizedButton";
import { ActiveLink } from "../../../ActiveLink";
import { AccountPopover } from "./../AccountPopover/index";

type AppBarDesktopProps = {
    appTitle: ReactNode;
    onButtonClick: () => void;
    onMenuItemButtonClick: (path: string) => void;
};

export function AppBarDesktop({
    appTitle,
    onButtonClick,
    onMenuItemButtonClick,
}: AppBarDesktopProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // TODO: Change this as soon as we have the authentication in place

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

    const handleMenuItemButtonClick = (path: string) => {
        onMenuItemButtonClick(path);
    };

    const getMenuItems = () => {
        return menuItems.map((item) => {
            return (
                // @ts-ignore
                <ActiveLink href={item.route} passHref>
                    <CustomizedButton
                        color="info"
                        variant="text"
                        key={item.route}
                        onClick={() => handleMenuItemButtonClick(item.route)}
                    >
                        {item.name}
                    </CustomizedButton>
                </ActiveLink>
            );
        });
    };

    return (
        <Stack
            width="100%"
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            p={1}
        >
            {appTitle}
            <Stack direction="row" spacing={2}>
                {getMenuItems()}
            </Stack>
            <div>
                {isAuthenticated ? (
                    <AccountPopover onLogout={handleLogout} />
                ) : (
                    <Stack direction="row" spacing={1}>
                        <CustomizedButton
                            color="info"
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
            </div>
        </Stack>
    );
}
