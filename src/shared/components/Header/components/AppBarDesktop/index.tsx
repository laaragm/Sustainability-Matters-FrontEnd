import { Button, Toolbar } from "@mui/material";
import { ReactNode, useState } from "react";
import { PATHS } from "../../../../../routes/paths";
import { menuItems } from "../../menuItems";

import { LoggedInInfo } from "../LoggedInInfo";

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
                <Button
                    key={item.route}
                    onClick={() => handleMenuItemButtonClick(item.route)}
                    sx={{ ml: "1.5rem", mr: "1.5rem" }}
                >
                    {item.name}
                </Button>
            );
        });
    };

    return (
        <Toolbar
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            {appTitle}
            <div>{getMenuItems()}</div>
            <div>
                {isAuthenticated ? (
                    <LoggedInInfo />
                ) : (
                    <Button onClick={handleButtonClick}>Sign In</Button>
                )}
            </div>
        </Toolbar>
    );
}
