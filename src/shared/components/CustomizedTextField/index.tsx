import { Stack, useMediaQuery, useTheme } from "@mui/material";

import { StyledLabel, StyledTextField } from "./styles";

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
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="center"
            spacing={1}
            width="100%"
        >
            {!!title && <StyledLabel>{title}</StyledLabel>}
            <StyledTextField
                id={id}
                type={type}
                isMobile={isMobile}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </Stack>
    );
}