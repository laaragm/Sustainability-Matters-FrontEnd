import { useNavigate } from "react-router-dom";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

import { StyledCard } from "./styles";

export default function Emissions() {
    const theme = useTheme();
    let navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Stack
            direction={isMobile ? "row" : "column"}
            alignItems="center"
            justifyContent="center"
            spacing={isMobile ? 8 : 2}
            m={isMobile ? 0 : 5}
            mt={isMobile ? 6 : 5}
            height="100%"
            width="100%"
        >
            <StyledCard isMobile={isMobile}></StyledCard>
        </Stack>
    );
}
