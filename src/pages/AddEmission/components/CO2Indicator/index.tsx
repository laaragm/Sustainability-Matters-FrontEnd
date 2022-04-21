import { Stack } from "@mui/material";

import { StyledIndicator, StyledValue, StyledSubtitle } from "./styles";

interface CO2IndicatorProps {
    value: number;
}

export function CO2Indicator({ value }: CO2IndicatorProps) {
    return (
        <StyledIndicator>
            <Stack
                direction="column"
                spacing={5}
                alignItems="center"
                justifyContent="center"
            >
                <StyledValue>{value}</StyledValue>
                <StyledSubtitle>kgCO2eq</StyledSubtitle>
            </Stack>
        </StyledIndicator>
    );
}
