import { Stack, useMediaQuery, useTheme } from "@mui/material";

import homePageIllustration from "../../assets/images/homePageIllustration.svg";
import { SuspenseImg } from "./../../shared/components/SuspenseImage";
import { StyledTitle, StyledSubtitle } from "./styles";

export default function HomePage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Stack
            direction={isMobile ? "column" : "row"}
            alignItems="center"
            justifyContent="space-between"
            spacing={isMobile ? 8 : 2}
            m={isMobile ? 3 : 5}
        >
            <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                width={isMobile ? "100%" : "40%"}
            >
                <StyledTitle>
                    Lets Make our Earth Green and Clean ☘️
                </StyledTitle>
                <StyledSubtitle>
                    The increase in C02 production in recent centuries, as well as the effects caused by it, is already a matter of concern in many nations. We have an obligation to preserve life on earth, doing everything possible to improve its environment.
                </StyledSubtitle>
            </Stack>
            <Stack width={isMobile ? "100%" : "60%"}>
                <SuspenseImg
                    src={homePageIllustration}
                    alt="Home page illustration"
                    height="100%"
                    width="100%"
                />
            </Stack>
        </Stack>
    );
}
