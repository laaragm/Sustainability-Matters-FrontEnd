import { useRef, useState } from "react";
import {
    alpha,
    Box,
    Divider,
    Stack,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import MIconButton from "./../../../@material-extend/MIconButton";
import MenuPopover from "../MenuPopover";
import MyAvatar from "../UserAvatar";
import { CustomizedButton } from "../../../CustomizedButton";
import { useAuth } from "../../../../../hooks/useAuth";
import { StyledText } from "./styles";

interface AccountPopoverProps {
    onLogout: () => void;
}

export function AccountPopover({ onLogout }: AccountPopoverProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const { name, email } = useAuth();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        onLogout();
    };

    return (
        <Stack direction="row" spacing={1} alignItems="center">
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

            {isMobile ? (
                <Stack direction="column">
                    <StyledText>{name}</StyledText>
                    <StyledText>{email}</StyledText>
                </Stack>
            ) : (
                <MenuPopover
                    open={open}
                    onClose={handleClose}
                    anchorEl={anchorRef.current}
                    sx={{ width: 220 }}
                >
                    <Stack direction="column" p={1.5}>
                        <StyledText>{name}</StyledText>
                        <StyledText>{email}</StyledText>
                    </Stack>

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
            )}
        </Stack>
    );
}
