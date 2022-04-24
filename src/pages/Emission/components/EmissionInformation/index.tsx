import { Stack } from "@mui/material";

import { StyledLabel, StyledValue } from "./styles";

interface EmissionInformationProps {
    label: string;
    value: string | Date | number;
}

export function EmissionInformation({
    label,
    value,
}: EmissionInformationProps) {
    return (
        <Stack direction="column" spacing={1}>
            <StyledLabel>{label}</StyledLabel>
            <StyledValue>{value}</StyledValue>
        </Stack>
    );
}
