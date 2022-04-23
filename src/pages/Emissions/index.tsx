import { useNavigate } from "react-router-dom";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

import { CustomizedButton } from "../../shared/components/CustomizedButton";
import { CardContent } from "./components/CardContent";
import { useEmissions } from "../../hooks/useEmissions";
import { StyledCard } from "./styles";

export default function Emissions() {
    const theme = useTheme();
    let navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { data, isLoading } = useEmissions(1);

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
            <StyledCard isMobile={isMobile}>
                {/* @ts-ignore */}
                {!isLoading && <CardContent emissions={data?.emissions} />}
            </StyledCard>
            <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="end"
                spacing={1}
                pt={5}
            >
                <CustomizedButton
                    color="secondary"
                    borderRadius="1.5rem"
                    onClick={() => {}}
                >
                    Add
                </CustomizedButton>
            </Stack>
        </Stack>
    );
}
