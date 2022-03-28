import { ReactNode, useState } from "react";
import { Button, Stack } from "@mui/material";

import { menuItems } from "../../menuItems";
import { LoggedInInfo } from "../LoggedInInfo";
import { CustomizedButton } from "../../../CustomizedButton";
import { ActiveLink } from "../../../ActiveLink";

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

    const handleButtonClick = () => {
        setIsAuthenticated((previousState) => !previousState);
        onButtonClick();
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
            <Stack direction="row" spacing={5}>
                {getMenuItems()}
            </Stack>
            <div>
                {isAuthenticated ? (
                    <LoggedInInfo />
                ) : (
                    <CustomizedButton
                        color="info"
                        variant="text"
                        onClick={handleButtonClick}
                    >
                        Sign In
                    </CustomizedButton>
                )}
            </div>
        </Stack>
    );
}
