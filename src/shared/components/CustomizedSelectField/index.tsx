import { Stack, useMediaQuery, useTheme } from "@mui/material";

import { StyledLabel, StyledSelect, StyledMenuItem } from "./styles";

interface CustomizedSelectFieldProps {
    value: any;
    id: string;
    title?: string;
    options: any;
    onChange: (value: any) => void;
}

export function CustomizedSelectField({
    value,
    onChange,
    options,
    id,
    title,
}: CustomizedSelectFieldProps) {
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
            <StyledSelect
                labelId={`${id}-label`}
                id={id}
                value={value}
                label=""
                onChange={(event) => onChange(event.target.value)}
            >
                {options.map((option: any) => (
                    <StyledMenuItem value={option}>{option}</StyledMenuItem>
                ))}
            </StyledSelect>
        </Stack>
    );
}
