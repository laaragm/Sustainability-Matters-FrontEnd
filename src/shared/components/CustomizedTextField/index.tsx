import { TextField, useTheme } from "@mui/material";

import { StyledLabel } from "../CustomizedButton/styles";

interface CustomizedTextFieldProps {
    value: any;
    id: string;
    type?: string;
    title?: string;
    onChange: (value: any) => void;
}

export function CustomizedTextField({
    value,
    onChange,
    id,
    type = "text",
    title,
}: CustomizedTextFieldProps) {
    const theme = useTheme();

    return (
        <>
            {!!title && <StyledLabel>{title}</StyledLabel>}
            <TextField
                id={id}
                type={type}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                sx={{
                    background: theme.palette.common.white,
                    width: "100%",
                    "& > div:after": {
                        border: "none",
                    },
                }}
                inputProps={{
                    sx: {
                        padding: "1.5rem",
                        boxSizing: "border-box",
                        color: theme.palette.text.secondary,
                    },
                }}
            />
        </>
    );
}
