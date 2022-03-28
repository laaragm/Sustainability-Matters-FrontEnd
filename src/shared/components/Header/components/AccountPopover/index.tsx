import { useRef, useState } from "react";
import { alpha, Box, Divider, Typography, useTheme } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import MIconButton from "./../../../@material-extend/MIconButton";
import MenuPopover from "../MenuPopover";
import MyAvatar from "../UserAvatar";
import { CustomizedButton } from "../../../CustomizedButton";

// TODO: Remove this as soon as we have the authentication process
const user = {
    name: "Lara Galvani",
    email: "lara.galvani@gmail.com",
};

interface AccountPopoverProps {
    onLogout: () => void;
}

export function AccountPopover({ onLogout }: AccountPopoverProps) {
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // TODO: Implement the logout functionality
    const handleLogout = () => {
        onLogout();
    };

    return (
        <>
            <MIconButton
                ref={anchorRef}
                onClick={handleOpen}
                sx={{
                    padding: 0,
                    width: 44,
                    height: 44,
                    ...(open && {
                        "&:before": {
                            zIndex: 1,
                            content: "''",
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            position: "absolute",
                            bgcolor: (theme: any) =>
                                alpha(theme.palette.grey[900], 0.72),
                        },
                    }),
                }}
            >
                <MyAvatar />
            </MIconButton>

            <MenuPopover
                open={open}
                onClose={handleClose}
                anchorEl={anchorRef.current}
                sx={{ width: 220 }}
            >
                <Box sx={{ my: 1.5, px: 2.5 }}>
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        sx={{ color: theme.palette.text.secondary }}
                    >
                        {user?.name}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: theme.palette.text.secondary }}
                        noWrap
                    >
                        {user?.email}
                    </Typography>
                </Box>

                <Divider sx={{ my: 1 }} />

                <Box sx={{ p: 2, pt: 1.5 }}>
                    <CustomizedButton
                        fullWidth
                        color="secondary"
                        variant="contained"
                        borderRadius="2rem"
                        onClick={handleLogout}
                    >
                        <Box sx={{ mr: 1.5, width: 24, height: 24 }}>
                            <ExitToAppIcon />
                        </Box>
                        Logout
                    </CustomizedButton>
                </Box>
            </MenuPopover>
        </>
    );
}
