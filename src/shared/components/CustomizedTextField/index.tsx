import { Stack, useMediaQuery, useTheme } from "@mui/material";

import { StyledLabel, StyledTextField } from "./styles";

interface CustomizedTextFieldProps {
    value: any;
    id: string;
    type?: string;
    title?: string;
    customTextField?: boolean;
    height?: string;
    onChange: (value: any) => void;
}

export function CustomizedTextField({
    value,
    onChange,
    id,
    type = "text",
    title,
    height,
    customTextField = false,
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
                customTextField={customTextField}
                type={type}
                isMobile={isMobile}
                value={value}
                height={!!height ? height : "auto"}
                onChange={(event) => onChange(event.target.value)}
            />
        </Stack>
    );
}
