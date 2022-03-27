import { Popover, PopoverProps } from "@mui/material";

import { ArrowStyle } from "./styles";

export default function MenuPopover({ children, sx, ...other }: PopoverProps) {
    return (
        <Popover
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            PaperProps={{
                sx: {
                    mt: 1.5,
                    ml: 0.5,
                    overflow: "inherit",
                    boxShadow: (theme) => theme.shadows[20],
                    border: (theme) => `solid 1px ${theme.palette.grey[500]}`,
                    width: 200,
                    ...sx,
                },
            }}
            {...other}
        >
            <ArrowStyle />
            {children}
        </Popover>
    );
}
