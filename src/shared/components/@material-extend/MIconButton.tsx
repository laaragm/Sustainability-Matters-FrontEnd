import { forwardRef } from "react";
import { IconButtonProps, IconButton } from "@mui/material";

const MIconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ children, ...other }, ref) => (
        <IconButton ref={ref} {...other}>
            {children}
        </IconButton>
    )
);

export default MIconButton;
