import { useState } from "react";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

import { StyledCard, StyledTitle } from "./styles";

export default function AddEmission() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [amount, setAmount] = useState("");

    return (
        <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={isMobile ? 8 : 2}
            m={isMobile ? 0 : 5}
            height="100%"
            width="100%"
        >
            <StyledCard>
                <Stack
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                >
                    <Stack direction="row">
                        <StyledTitle>CO2 Emissions</StyledTitle>
                    </Stack>
                </Stack>
            </StyledCard>
        </Stack>
    );
}
