import { Stack } from "@mui/material";

import { StyledIndicator, StyledValue, StyledSubtitle } from "./styles";

interface CO2IndicatorProps {
    value: number;
    isMobile: boolean;
}

export function CO2Indicator({ value, isMobile }: CO2IndicatorProps) {
    return (
        <StyledIndicator isMobile={isMobile}>
            <Stack
                direction="column"
                spacing={isMobile ? 1 : 5}
                alignItems="center"
                justifyContent="center"
            >
                <StyledValue isMobile={isMobile}>{value}</StyledValue>
                <StyledSubtitle isMobile={isMobile}>kgCO2eq</StyledSubtitle>
            </Stack>
        </StyledIndicator>
    );
}
